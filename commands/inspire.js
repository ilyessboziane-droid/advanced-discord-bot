const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('inspire').setDescription('جملة تحفيزية'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const quotes = ['أنت أقوى مما تعتقد','لا تستسلم أبداً','كل يوم فرصة جديدة','الحلم يبدأ بخطوة','أنت تستحق النجاح'];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('✨ إلهام').setDescription(quote).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
