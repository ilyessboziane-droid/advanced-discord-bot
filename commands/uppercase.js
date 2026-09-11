const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uppercase')
    .setDescription('تحويل النص إلى أحرف كبيرة')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const upper = text.toUpperCase();
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔤 أحرف كبيرة')
      .addFields({ name: 'النتيجة', value: upper })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
