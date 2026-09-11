const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'help',
    description: 'عرض جميع الأوامر المتاحة'
  },
  cooldown: 3,
  async execute(message, args, client, config) {
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🤖 مساعدة البوت')
      .setDescription('قائمة الأوامر المتاحة:')
      .addFields(
        { name: '!help', value: 'عرض هذه الرسالة', inline: true },
        { name: '!ping', value: 'عرض تأخير البوت', inline: true },
        { name: '!userinfo', value: 'معلومات المستخدم', inline: true },
        { name: '!serverinfo', value: 'معلومات السيرفر', inline: true },
        { name: '!avatar', value: 'عرض صورة الملف الشخصي', inline: true },
        { name: '!embed', value: 'إرسال رسالة embed جميلة', inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
};