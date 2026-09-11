const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'ping',
    description: 'عرض تأخير البوت'
  },
  cooldown: 2,
  async execute(message, args, client, config) {
    const embed = new EmbedBuilder()
      .setColor(config.color.success)
      .setTitle('🏓 Pong!')
      .addFields(
        { name: 'Bot Ping', value: `${client.ws.ping}ms`, inline: true },
        { name: 'Message Latency', value: `${Date.now() - message.createdTimestamp}ms`, inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
};