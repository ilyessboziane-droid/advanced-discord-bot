const { Client, GatewayIntentBits, Collection, ChannelType } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

const config = require('./config.json');

// Collections
client.commands = new Collection();
client.cooldowns = new Collection();

// Load Commands
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if (command.data && command.execute) {
      client.commands.set(command.data.name, command);
      console.log(`✅ تم تحميل الأمر: ${command.data.name}`);
    }
  }
}

// Events
client.once('ready', () => {
  console.log(`\n🤖 البوت جاهز! تم تسجيل الدخول كـ: ${client.user.tag}`);
  console.log(`📊 عدد السيرفرات: ${client.guilds.cache.size}`);
  
  client.user.setActivity('!help | Advanced Bot', { type: 'WATCHING' });
});

client.on('guildCreate', (guild) => {
  console.log(`\n✨ تمت إضافة البوت إلى سيرفر جديد: ${guild.name} (${guild.id})`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  
  if (!command) {
    return message.reply({
      embeds: [{
        color: config.color.error,
        title: '❌ خطأ',
        description: `الأمر \`${commandName}\` غير موجود!`,
        footer: { text: config.embedSettings.footer }
      }],
      ephemeral: true
    }).catch(() => {});
  }

  // Cooldown
  if (!client.cooldowns.has(command.data.name)) {
    client.cooldowns.set(command.data.name, new Collection());
  }

  const now = Date.now();
  const timestamps = client.cooldowns.get(command.data.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply({
        embeds: [{
          color: config.color.warning,
          title: '⏳ Cooldown',
          description: `يرجى الانتظار ${timeLeft.toFixed(1)} ثانية قبل استخدام هذا الأمر مرة أخرى`,
          footer: { text: config.embedSettings.footer }
        }],
        ephemeral: true
      }).catch(() => {});
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    await command.execute(message, args, client, config);
  } catch (error) {
    console.error(`❌ خطأ في تنفيذ الأمر ${commandName}:`, error);
    return message.reply({
      embeds: [{
        color: config.color.error,
        title: '❌ حدث خطأ',
        description: 'حدث خطأ أثناء تنفيذ الأمر. حاول مرة أخرى لاحقاً',
        footer: { text: config.embedSettings.footer }
      }],
      ephemeral: true
    }).catch(() => {});
  }
});

// Error Handling
client.on('error', error => {
  console.error('❌ خطأ في البوت:', error);
});

process.on('unhandledRejection', error => {
  console.error('❌ خطأ غير معالج:', error);
});

// Login
if (!process.env.DISCORD_TOKEN) {
  console.error('❌ لم يتم العثور على DISCORD_TOKEN في ملف .env');
  process.exit(1);
}

client.login(process.env.DISCORD_TOKEN);
