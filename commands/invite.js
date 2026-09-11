const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('invite').setDescription('رابط دعوة البوت'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔗 رابط الدعوة').setDescription(`[اضغط هنا لإضافة البوت](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
