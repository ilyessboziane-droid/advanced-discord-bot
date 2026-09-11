const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('octal').setDescription('تحويل إلى نظام ثماني').addNumberOption(option => option.setName('num').setDescription('الرقم').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const num = interaction.options.getNumber('num');
    const octal = num.toString(8);
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔢 نظام ثماني').addFields({name:'العشري',value:`${num}`},{name:'الثماني',value:`0o${octal}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
