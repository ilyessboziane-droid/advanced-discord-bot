const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lowercase')
    .setDescription('تحويل النص إلى أحرف صغيرة')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const lower = text.toLowerCase();
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔡 أحرف صغيرة')
      .addFields({ name: 'النتيجة', value: lower })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
