const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rate')
    .setDescription('تقييم شيء ما')
    .addStringOption(option => option.setName('thing').setDescription('الشيء المراد تقييمه').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const thing = interaction.options.getString('thing');
    const rating = Math.floor(Math.random() * 10) + 1;
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('⭐ التقييم')
      .addFields({ name: 'الشيء', value: thing }, { name: 'التقييم', value: `${rating}/10` })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
