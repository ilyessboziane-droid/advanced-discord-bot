const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('أعد نطق الرسالة')
    .addStringOption(option => option.setName('message').setDescription('الرسالة').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const message = interaction.options.getString('message');
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setDescription(message)
      .setFooter({ text: `قال: ${interaction.user.username}` })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
