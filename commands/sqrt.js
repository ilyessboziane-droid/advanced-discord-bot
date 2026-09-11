const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('sqrt').setDescription('الجذر التربيعي').addNumberOption(option => option.setName('num').setDescription('الرقم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const num = interaction.options.getNumber('num');
    const sqrt = Math.sqrt(num).toFixed(2);
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('√ الجذر التربيعي').addFields({name:'الرقم',value:`${num}`},{name:'النتيجة',value:`${sqrt}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
