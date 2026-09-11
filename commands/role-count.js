const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('role-count').setDescription('عدد الرولات'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const roles = interaction.guild.roles.cache.size;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🎨 عدد الرولات').addFields({name:'المجموع',value:`${roles}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
