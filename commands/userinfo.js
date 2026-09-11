const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'userinfo',
    description: 'عرض معلومات المستخدم'
  },
  cooldown: 3,
  async execute(message, args, client, config) {
    const user = message.mentions.users.first() || message.author;
    const member = message.guild.members.cache.get(user.id);

    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle(`👤 معلومات ${user.username}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
      .addFields(
        { name: 'Username', value: user.username, inline: true },
        { name: 'ID', value: user.id, inline: true },
        { name: 'Bot', value: user.bot ? 'نعم ✅' : 'لا ❌', inline: true },
        { name: 'Account Created', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`, inline: false },
        { name: 'Server Join Date', value: member ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>` : 'N/A', inline: false },
        { name: 'Roles', value: member ? member.roles.cache.map(r => r.toString()).join(', ') || 'No roles' : 'N/A', inline: false }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
};