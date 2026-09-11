const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('color')
    .setDescription('عرض لون عشوائي'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const embed = new EmbedBuilder()
      .setColor(color)
      .setTitle('🎨 لون عشوائي')
      .setDescription(`الكود: ${color}`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
