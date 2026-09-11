const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('energy').setDescription('تحويل الطاقة').addNumberOption(option => option.setName('joules').setDescription('جول').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const j = interaction.options.getNumber('joules');
    const calories = (j / 4.184).toFixed(2);
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('⚡ تحويل الطاقة').addFields({name:'جول',value:`${j}J`},{name:'سعرة حرارية',value:`${calories}cal`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
