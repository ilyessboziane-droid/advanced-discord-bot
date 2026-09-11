const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('prime').setDescription('التحقق من الأعداد الأولية').addNumberOption(option => option.setName('num').setDescription('الرقم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const num = interaction.options.getNumber('num');
    let isPrime = num > 1;
    for(let i=2;i<=Math.sqrt(num);i++) if(num%i===0) {isPrime=false;break;}
    const embed = new EmbedBuilder().setColor(isPrime?config.color.success:config.color.error).setTitle('🔢 الأعداد الأولية').addFields({name:'الرقم',value:`${num}`},{name:'نتيجة',value:isPrime?'أولي':'غير أولي'}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
