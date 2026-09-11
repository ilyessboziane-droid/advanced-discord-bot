const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('replace')
    .setDescription('استبدال جزء من النص')
    .addStringOption(option => option.setName('text').setDescription('النص الأصلي').setRequired(true))
    .addStringOption(option => option.setName('find').setDescription('البحث عن').setRequired(true))
    .addStringOption(option => option.setName('replace').setDescription('الاستبدال ب').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const find = interaction.options.getString('find');
    const replace = interaction.options.getString('replace');
    const result = text.replace(new RegExp(find, 'g'), replace);
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔄 استبدال النص')
      .addFields({ name: 'النتيجة', value: result })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
