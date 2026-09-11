const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('sha256').setDescription('حساب SHA256').addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const crypto = require('crypto');
    const text = interaction.options.getString('text');
    const hash = crypto.createHash('sha256').update(text).digest('hex');
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔐 SHA256').addFields({name:'النص',value:text},{name:'Hash',value:`\`${hash}\``}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
