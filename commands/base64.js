const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('base64')
    .setDescription('تحويل النص إلى Base64')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const encoded = Buffer.from(text).toString('base64');
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔐 Base64')
      .addFields(
        { name: 'الأصلي', value: text },
        { name: 'المشفر', value: encoded }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
