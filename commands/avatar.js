const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'avatar',
    description: 'عرض صورة الملف الشخصي'
  },
  cooldown: 2,
  async execute(message, args, client, config) {
    const user = message.mentions.users.first() || message.author;
    const avatarURL = user.displayAvatarURL({ dynamic: true, size: 1024 });

    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle(`🖼️ صورة ${user.username}`)
      .setImage(avatarURL)
      .addFields(
        { name: 'Username', value: user.username, inline: true },
        { name: 'ID', value: user.id, inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
};