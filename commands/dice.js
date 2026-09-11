const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription('رمي النرد'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const result = Math.floor(Math.random() * 6) + 1;
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🎲 النرد')
      .setDescription(`النتيجة: **${result}**`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
