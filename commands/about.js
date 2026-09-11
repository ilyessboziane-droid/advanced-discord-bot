const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('معلومات عن البوت'),
  cooldown: 3,
  async execute(interaction, client, config) {
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('ℹ️ معلومات البوت')
      .setDescription('بوت Discord متقدم مع Slash Commands')
      .addFields(
        { name: 'الإسم', value: client.user.username, inline: true },
        { name: 'الإصدار', value: '1.0.0', value: true },
        { name: 'المطور', value: 'ilyessboziane-droid', inline: true },
        { name: 'المكتبة', value: 'discord.js v14', inline: true },
        { name: 'الأوامر', value: `${client.commands.size} أمر`, inline: true },
        { name: 'السيرفرات', value: `${client.guilds.cache.size} سيرفر`, inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
