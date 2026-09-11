const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coin')
    .setDescription('رمي النقود'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const result = Math.random() > 0.5 ? 'صورة 🪙' : 'كتابة 📝';
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🪙 رمي النقود')
      .setDescription(`النتيجة: **${result}**`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
