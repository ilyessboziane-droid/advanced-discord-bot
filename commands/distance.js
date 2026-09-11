const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('distance').setDescription('تحويل المسافات').addNumberOption(option => option.setName('km').setDescription('كيلومتر').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const km = interaction.options.getNumber('km');
    const miles = (km * 0.621371).toFixed(2);
    const meters = km * 1000;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📏 تحويل المسافات').addFields({name:'كيلومتر',value:`${km}km`},{name:'ميل',value:`${miles}mi`},{name:'متر',value:`${meters}m`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
