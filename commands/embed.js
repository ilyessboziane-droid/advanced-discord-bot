const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'embed',
    description: 'إرسال رسالة embed جميلة مع مثال'
  },
  cooldown: 3,
  async execute(message, args, client, config) {
    const embed = new EmbedBuilder()
      .setColor('#5865F2')
      .setTitle('✨ مرحباً بك في البوت المتقدم')
      .setDescription('هذه رسالة embed احترافية مع تصميم جميل!')
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: '🎯 المميزات', value: 'رسائل Embed احترافية\nأوامر متقدمة\nإدارة سهلة', inline: false },
        { name: '📊 الإحصائيات', value: `السيرفرات: ${client.guilds.cache.size}\nالمستخدمين: ${client.users.cache.size}`, inline: false },
        { name: '🔗 الروابط', value: '[GitHub](https://github.com)\n[Discord](https://discord.com)', inline: false }
      )
      .setImage('https://media.discordapp.net/attachments/1234567890/1234567890/banner.png')
      .setFooter({ text: 'Advanced Discord Bot | Made with ❤️', iconURL: message.author.displayAvatarURL() })
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
};