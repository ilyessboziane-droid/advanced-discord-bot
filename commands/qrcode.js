const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('qrcode').setDescription('توليد QR Code').addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📱 QR Code').setDescription(`يمكنك استخدام: https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`).setFooter({text:config.embedSettings.footer}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
