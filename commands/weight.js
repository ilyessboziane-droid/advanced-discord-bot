const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('weight').setDescription('تحويل الأوزان').addNumberOption(option => option.setName('kg').setDescription('كيلوجرام').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const kg = interaction.options.getNumber('kg');
    const pounds = (kg * 2.20462).toFixed(2);
    const grams = kg * 1000;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('⚖️ تحويل الأوزان').addFields({name:'كيلوجرام',value:`${kg}kg`},{name:'باوند',value:`${pounds}lbs`},{name:'جرام',value:`${grams}g`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
