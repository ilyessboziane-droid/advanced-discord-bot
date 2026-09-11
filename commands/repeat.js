const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('repeat')
    .setDescription('تكرار النص')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true))
    .addNumberOption(option => option.setName('times').setDescription('عدد التكرارات').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const times = interaction.options.getNumber('times');
    const repeated = text.repeat(Math.min(times, 10));
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔁 تكرار النص')
      .addFields({ name: 'النتيجة', value: repeated })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
