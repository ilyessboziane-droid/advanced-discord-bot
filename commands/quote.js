const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote')
    .setDescription('عرض اقتباس عشوائي'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const quotes = [
      { text: 'النجاح لا يأتي من الفراغ', author: 'الحكماء' },
      { text: 'الوقت هو أثمن شيء', author: 'الحياة' },
      { text: 'الحلم يبدأ بخطوة', author: 'النجاح' },
      { text: 'لا تستسلم أبداً', author: 'الإصرار' },
      { text: 'أنت أقوى مما تتخيل', author: 'القوة الداخلية' }
    ];
    
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('💭 اقتباس')
      .setDescription(`"${quote.text}"`)
      .addFields({ name: 'المصدر', value: quote.author })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
