const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('عرض نكتة عشوائية'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const jokes = [
      'لماذا البرمجة مثل الحب؟ لأنها تحتاج صبرا وتفهما!',
      'ما الفرق بين المبرمج والراقص؟ المبرمج يستمتع بالأخطاء!',
      'البرمجة مثل الطبخ، إذا فشلت المرة الأولى، تحاول مرة أخرى!',
      'المبرمج يحب القهوة أكثر من الطعام!',
      'الأخطاء لا توقف المبرمج، بل تعلمه!'
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('😂 نكتة')
      .setDescription(joke)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
