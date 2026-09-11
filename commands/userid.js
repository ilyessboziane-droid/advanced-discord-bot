const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('userid').setDescription('معرفة ID المستخدم').addUserOption(option=>option.setName('user').setDescription('المستخدم').setRequired(false)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const user = interaction.options.getUser('user') || interaction.user;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🏛️ User ID').addFields({name:'Username',value:user.username},{name:'ID',value:`\`${user.id}\``}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
