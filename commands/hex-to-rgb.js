const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hex-to-rgb')
    .setDescription('تحويل Hex إلى RGB')
    .addStringOption(option => option.setName('hex').setDescription('كود HEX مثل #FF5733').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    let hex = interaction.options.getString('hex').replace('#', '');
    if (hex.length !== 6) return interaction.reply({ content: '❌ صيغة HEX غير صحيحة!', ephemeral: true });
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const embed = new EmbedBuilder()
      .setColor(parseInt(hex, 16))
      .setTitle('🎨 تحويل الألوان')
      .addFields({ name: 'HEX', value: `#${hex}` }, { name: 'RGB', value: `rgb(${r}, ${g}, ${b})` })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
