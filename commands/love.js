const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('love')
    .setDescription('اختبر مستوى الحب 💕')
    .addUserOption(option => option.setName('user1').setDescription('الشخص الأول').setRequired(true))
    .addUserOption(option => option.setName('user2').setDescription('الشخص الثاني').setRequired(true)),
  cooldown: 3,
  async execute(interaction, client, config) {
    const user1 = interaction.options.getUser('user1');
    const user2 = interaction.options.getUser('user2');
    const percentage = Math.floor(Math.random() * 101);
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('💕 اختبار الحب')
      .setDescription(`حب بين ${user1.username} و ${user2.username}`)
      .addFields({ name: 'مستوى الحب', value: `${percentage}%` })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
