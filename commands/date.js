const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('date')
    .setDescription('عرض التاريخ الحالي'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const now = new Date();
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('📅 التاريخ الحالي')
      .setDescription(`${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
