const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('randomname').setDescription('توليد اسم عشوائي'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const names = ['أحمد','فاطمة','محمد','نور','سارة','علي','ليلى','إبراهيم','مريم','عمر'];
    const name = names[Math.floor(Math.random() * names.length)];
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📝 اسم عشوائي').setDescription(`**${name}**`).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
