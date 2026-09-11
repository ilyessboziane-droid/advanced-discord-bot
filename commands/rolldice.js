const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('rolldice').setDescription('رمي نرد متعدد').addNumberOption(option => option.setName('sides').setDescription('عدد الأوجه').setRequired(false)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const sides = interaction.options.getNumber('sides') || 6;
    const result = Math.floor(Math.random() * sides) + 1;
    const embed = new EmbedBuilder().setColor(config.color.success).setTitle('🎲 النرد').addFields({name:'عدد الأوجه',value:`${sides}`},{name:'النتيجة',value:`${result}`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
