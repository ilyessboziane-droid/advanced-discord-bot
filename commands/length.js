const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('length')
    .setDescription('حساب طول النص')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('📏 طول النص')
      .addFields({ name: 'النص', value: text }, { name: 'الطول', value: `${text.length} حرف` })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
