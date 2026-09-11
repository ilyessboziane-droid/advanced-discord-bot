const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('zodiac').setDescription('البرج الفلكي').addStringOption(option => option.setName('month').setDescription('الشهر (1-12)').setRequired(true)).addStringOption(option => option.setName('day').setDescription('اليوم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const month = interaction.options.getString('month');
    const day = interaction.options.getString('day');
    const zodiacs = ['حمل','ثور','جوزاء','سرطان','أسد','عذراء','ميزان','عقرب','قوس','جدي','دلو','حوت'];
    const zodiac = zodiacs[Math.floor(Math.random() * zodiacs.length)];
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('♈ البرج').addFields({name:'التاريخ',value:`${day}/${month}`},{name:'البرج',value:zodiac}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
