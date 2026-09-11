const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('md5').setDescription('حساب MD5 (محاكاة)').addStringOption(option => option.setName('text').setDescription('النص').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const crypto = require('crypto');
    const text = interaction.options.getString('text');
    const hash = crypto.createHash('md5').update(text).digest('hex');
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔐 MD5').addFields({name:'النص',value:text},{name:'Hash',value:`\`${hash}\``}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
