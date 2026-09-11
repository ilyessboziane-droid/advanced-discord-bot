const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('word-count')
    .setDescription('عد الكلمات في النص')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const wordCount = text.trim().split(/\s+/).length;
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('📊 عد الكلمات')
      .addFields({ name: 'عدد الكلمات', value: `${wordCount} كلمة` })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
