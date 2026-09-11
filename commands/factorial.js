const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('factorial').setDescription('حساب العاملي').addNumberOption(option => option.setName('n').setDescription('الرقم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const n = interaction.options.getNumber('n');
    let fact = 1;
    for(let i=2;i<=n;i++) fact*=i;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🎯 العاملي').addFields({name:'الرقم',value:`${n}`},{name:'النتيجة',value:`${fact}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
