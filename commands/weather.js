const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('weather')
    .setDescription('معلومات الطقس (محاكاة)')
    .addStringOption(option => option.setName('city').setDescription('المدينة').setRequired(true)),
  cooldown: 3,
  async execute(interaction, client, config) {
    const city = interaction.options.getString('city');
    const temps = [15, 20, 25, 30, 35];
    const conditions = ['صافي', 'غائم', 'ممطر', 'عاصفة', 'ثلج'];
    const temp = temps[Math.floor(Math.random() * temps.length)];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🌤️ الطقس')
      .addFields({ name: 'المدينة', value: city }, { name: 'درجة الحرارة', value: `${temp}°C` }, { name: 'الحالة', value: condition })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
