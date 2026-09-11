const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fact')
    .setDescription('عرض حقيقة عشوائية'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const facts = [
      'الدماغ البشري يحتوي على حوالي 86 مليار خلية عصبية!',
      'الأرض تدور حول نفسها مرة واحدة كل 24 ساعة!',
      'الشمس توفر الطاقة لجميع الكائنات الحية على الأرض!',
      'المحيطات تغطي 71% من سطح الأرض!',
      'الضوء من الشمس يستغرق 8 دقائق للوصول للأرض!'
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('💡 حقيقة')
      .setDescription(fact)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
