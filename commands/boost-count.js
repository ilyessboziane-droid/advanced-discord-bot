const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('boost-count').setDescription('عدد البوستات'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const boosts = interaction.guild.premiumSubscriptionCount;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🚀 عدد البوستات').addFields({name:'المجموع',value:`${boosts}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
