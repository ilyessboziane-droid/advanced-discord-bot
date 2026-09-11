const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ascii')
    .setDescription('تحويل النص إلى ASCII art')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text').substring(0, 20);
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🎨 ASCII Art')
      .setDescription(`\`\`\`\n${text}\n\`\`\``)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
