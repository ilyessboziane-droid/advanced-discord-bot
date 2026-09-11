const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
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

// Load Slash Commands
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  
  if (command.data && command.execute) {
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
    console.log(`✅ تم تحميل الأمر: ${command.data.name}`);
  }
}

// Events
client.once('ready', async () => {
  console.log(`\n🤖 البوت جاهز! تم تسجيل الدخول كـ: ${client.user.tag}`);
  console.log(`📊 عدد السيرفرات: ${client.guilds.cache.size}`);
  console.log(`📝 عدد الأوامر: ${commands.length}`);
  
  client.user.setActivity('/ لعرض الأوامر', { type: 'WATCHING' });

  // تسجيل Slash Commands
  try {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    
    console.log('\n⚙️ جاري تسجيل Slash Commands...');
    
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
    
    console.log(`✅ تم تسجيل ${commands.length} أمر بنجاح!`);
  } catch (error) {
    console.error('❌ خطأ في تسجيل الأوامر:', error);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    return interaction.reply({
      embeds: [{
        color: config.color.error,
        title: '❌ خطأ',
        description: `الأمر \`${interaction.commandName}\` غير موجود!`,
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

  if (timestamps.has(interaction.user.id)) {
    const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return interaction.reply({
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

  timestamps.set(interaction.user.id, now);
  setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

  try {
    await command.execute(interaction, client, config);
  } catch (error) {
    console.error(`❌ خطأ في تنفيذ الأمر ${interaction.commandName}:`, error);
    
    const errorEmbed = {
      color: config.color.error,
      title: '❌ حدث خطأ',
      description: 'حدث خطأ أثناء تنفيذ الأمر. حاول مرة أخرى لاحقاً',
      footer: { text: config.embedSettings.footer }
    };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ embeds: [errorEmbed], ephemeral: true }).catch(() => {});
    } else {
      await interaction.reply({ embeds: [errorEmbed], ephemeral: true }).catch(() => {});
    }
  }
});

client.on('guildCreate', (guild) => {
  console.log(`\n✨ تمت إضافة البوت إلى سيرفر جديد: ${guild.name} (${guild.id})`);
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
