const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reverse')
    .setDescription('عكس النص')
    .addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const reversed = text.split('').reverse().join('');
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔄 عكس النص')
      .addFields(
        { name: 'الأصلي', value: text },
        { name: 'المعكوس', value: reversed }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
