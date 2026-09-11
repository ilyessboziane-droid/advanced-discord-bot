const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('fib').setDescription('سلسلة فيبوناتشي').addNumberOption(option => option.setName('n').setDescription('العدد').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const n = Math.min(interaction.options.getNumber('n'), 15);
    let fib = [0, 1];
    for(let i=2;i<=n;i++) fib[i] = fib[i-1] + fib[i-2];
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📈 فيبوناتشي').addFields({name:'النتيجة',value:fib.slice(0,n+1).join(', ')}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
