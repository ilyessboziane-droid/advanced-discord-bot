const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('channel-count').setDescription('عدد القنوات'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const channels = interaction.guild.channels.cache.size;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📌 عدد القنوات').addFields({name:'المجموع',value:`${channels}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
