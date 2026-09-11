const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('info').setDescription('معلومات عامة'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('ℹ️ معلومات').addFields({name:'إصدار discord.js',value:'14.x'},{name:'Node.js',value:process.version},{name:'المنصة',value:process.platform}).setFooter({text:config.embedSettings.footer}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
