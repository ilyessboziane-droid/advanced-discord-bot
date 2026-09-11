const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('choose')
    .setDescription('اختيار من بين خيارات')
    .addStringOption(option => option.setName('options').setDescription('الخيارات مفصولة بفاصلة').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const options = interaction.options.getString('options').split(',').map(o => o.trim());
    const choice = options[Math.floor(Math.random() * options.length)];
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🎲 الاختيار')
      .setDescription(`الخيار المختار: **${choice}**`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
