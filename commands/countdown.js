const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('countdown').setDescription('عداد تنازلي').addNumberOption(option => option.setName('seconds').setDescription('الثواني').setRequired(true)),
  cooldown: 3,
  async execute(interaction, client, config) {
    const seconds = interaction.options.getNumber('seconds');
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('⏱️ عداد تنازلي').setDescription(`العداد سيبدأ من ${seconds} ثانية`).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
