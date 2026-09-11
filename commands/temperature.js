const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('temperature').setDescription('تحويل درجات الحرارة').addNumberOption(option => option.setName('celsius').setDescription('درجة مئوية').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const celsius = interaction.options.getNumber('celsius');
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('🌡️ تحويل الحرارة').addFields({name:'مئوية',value:`${celsius}°C`},{name:'فهرنهايت',value:`${fahrenheit.toFixed(2)}°F`},{name:'كلفن',value:`${kelvin.toFixed(2)}K`}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
