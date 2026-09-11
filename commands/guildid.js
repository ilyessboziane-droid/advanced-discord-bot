const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('guildid').setDescription('معرفة ID السيرفر'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const guildId = interaction.guild.id;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🏛️ Guild ID').addFields({name:'ID',value:`\`${guildId}\``}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
