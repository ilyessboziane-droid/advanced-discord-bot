const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('flip-image').setDescription('قلب الصور (محاكاة)').addAttachmentOption(option => option.setName('image').setDescription('الصورة').setRequired(false)),
  cooldown: 3,
  async execute(interaction, client, config) {
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🔄 قلب الصورة').setDescription('ميزة قلب الصور تحتاج مكتبة معالجة صور').setFooter({text:config.embedSettings.footer}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
