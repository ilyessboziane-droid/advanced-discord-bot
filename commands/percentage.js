const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('percentage').setDescription('حساب النسبة المئوية').addNumberOption(option => option.setName('num').setDescription('الرقم').setRequired(true)).addNumberOption(option => option.setName('total').setDescription('المجموع').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const num = interaction.options.getNumber('num');
    const total = interaction.options.getNumber('total');
    const percent = ((num/total)*100).toFixed(2);
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('%النسبة المئوية').addFields({name:'الجزء',value:`${num}`},{name:'المجموع',value:`${total}`},{name:'النسبة',value:`${percent}%`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
