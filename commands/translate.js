const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('translate').setDescription('ترجمة نصية').addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)).addStringOption(option => option.setName('lang').setDescription('اللغة (en/ar/fr)').setRequired(false)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const text = interaction.options.getString('text');
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🌐 ترجمة').addFields({name:'النص',value:text},{name:'ملاحظة',value:'ميزة الترجمة الفعلية تحتاج API خارجي'}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
