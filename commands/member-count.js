const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('member-count').setDescription('عدد أعضاء السيرفر'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const guild = interaction.guild;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('👥 عدد الأعضاء').addFields({name:'المجموع',value:`${guild.memberCount}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
