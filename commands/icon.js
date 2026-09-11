const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('icon').setDescription('عرض أيقونة السيرفر'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const icon = interaction.guild.iconURL({dynamic:true,size:1024});
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🖼️ أيقونة السيرفر');
    if(icon) embed.setImage(icon);
    else embed.setDescription('لا توجد أيقونة');
    await interaction.reply({embeds:[embed]});
  }
};
