const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('time')
    .setDescription('عرض الوقت الحالي'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const now = new Date();
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('⏰ الوقت الحالي')
      .addFields(
        { name: 'الوقت', value: now.toLocaleTimeString('ar-SA'), inline: true },
        { name: 'التاريخ', value: now.toLocaleDateString('ar-SA'), inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
