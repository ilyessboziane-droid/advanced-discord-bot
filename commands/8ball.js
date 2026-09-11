const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('سؤال الكرة الثمينة')
    .addStringOption(option => option.setName('question').setDescription('السؤال').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const answers = ['نعم بالتأكيد', 'لا أبداً', 'ربما', 'الأفضل بعدين', 'بكل تأكيد', 'غير مؤكد', 'مستحيل', 'قد يكون'];
    const answer = answers[Math.floor(Math.random() * answers.length)];
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🎱 الكرة الثمينة')
      .addFields({ name: 'السؤال', value: interaction.options.getString('question') }, { name: 'الإجابة', value: answer })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
