const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('binary').setDescription('تحويل إلى ثنائي').addNumberOption(option => option.setName('num').setDescription('الرقم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const num = interaction.options.getNumber('num');
    const binary = num.toString(2);
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔢 نظام ثنائي').addFields({name:'العشري',value:`${num}`},{name:'الثنائي',value:binary}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
