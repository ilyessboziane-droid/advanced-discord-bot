const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('average').setDescription('حساب المتوسط').addStringOption(option => option.setName('numbers').setDescription('الأرقام مفصولة بفواصل').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const nums = interaction.options.getString('numbers').split(',').map(n=>parseFloat(n.trim())).filter(n=>!isNaN(n));
    const avg = (nums.reduce((a,b)=>a+b,0)/nums.length).toFixed(2);
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📊 المتوسط').addFields({name:'الأرقام',value:nums.join(', ')},{name:'المتوسط',value:`${avg}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
