const { EmbedBuilder, ChannelType } = require('discord.js');

module.exports = {
  data: {
    name: 'serverinfo',
    description: 'عرض معلومات السيرفر'
  },
  cooldown: 3,
  async execute(message, args, client, config) {
    const guild = message.guild;
    const channels = guild.channels.cache;
    const textChannels = channels.filter(c => c.type === ChannelType.GuildText).size;
    const voiceChannels = channels.filter(c => c.type === ChannelType.GuildVoice).size;

    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle(`🏢 معلومات ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true, size: 512 }))
      .addFields(
        { name: 'Server ID', value: guild.id, inline: true },
        { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
        { name: 'Created', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`, inline: true },
        { name: 'Members', value: `${guild.memberCount}`, inline: true },
        { name: 'Channels', value: `${textChannels} 💬 | ${voiceChannels} 🎤`, inline: true },
        { name: 'Roles', value: `${guild.roles.cache.size}`, inline: true },
        { name: 'Verification Level', value: guild.verificationLevel, inline: true },
        { name: 'Boosts', value: `${guild.premiumSubscriptionCount}`, inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
};