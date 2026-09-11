const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('emoji-count').setDescription('عدد الرموز'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const emojis = interaction.guild.emojis.cache.size;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('😀 عدد الرموز').addFields({name:'المجموع',value:`${emojis}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
