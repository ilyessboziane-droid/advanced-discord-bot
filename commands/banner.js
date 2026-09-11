const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('banner').setDescription('عرض بانر السيرفر'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const banner = interaction.guild.bannerURL({size:1024});
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🖼️ بانر السيرفر');
    if(banner) embed.setImage(banner);
    else embed.setDescription('لا يوجد بانر');
    await interaction.reply({embeds:[embed]});
  }
};
