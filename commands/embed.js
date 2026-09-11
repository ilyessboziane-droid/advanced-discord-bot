const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('عرض رسالة embed جميلة'),
  cooldown: 3,
  async execute(interaction, client, config) {
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
      .setFooter({ text: 'Advanced Discord Bot | Made with ❤️' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
