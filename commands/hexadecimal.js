const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('hexadecimal').setDescription('تحويل إلى سادس عشري').addNumberOption(option => option.setName('num').setDescription('الرقم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const num = interaction.options.getNumber('num');
    const hex = num.toString(16).toUpperCase();
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔢 نظام سادس عشري').addFields({name:'العشري',value:`${num}`},{name:'السادس عشري',value:`0x${hex}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
