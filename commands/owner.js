const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('owner').setDescription('معلومات مالك السيرفر'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const owner = interaction.guild.ownerId;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('👑 مالك السيرفر').addFields({name:'المالك',value:`<@${owner}>`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
