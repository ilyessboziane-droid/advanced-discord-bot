const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('رقم عشوائي')
    .addNumberOption(option => option.setName('min').setDescription('الحد الأدنى').setRequired(false))
    .addNumberOption(option => option.setName('max').setDescription('الحد الأقصى').setRequired(false)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const min = interaction.options.getNumber('min') || 1;
    const max = interaction.options.getNumber('max') || 100;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🎰 رقم عشوائي')
      .setDescription(`الرقم العشوائي بين ${min} و ${max}: **${result}**`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
