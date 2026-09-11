const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('calculate')
    .setDescription('حاسبة بسيطة')
    .addStringOption(option => option.setName('operation').setDescription('العملية الحسابية (+ - * /)').setRequired(true))
    .addNumberOption(option => option.setName('num1').setDescription('الرقم الأول').setRequired(true))
    .addNumberOption(option => option.setName('num2').setDescription('الرقم الثاني').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const operation = interaction.options.getString('operation');
    const num1 = interaction.options.getNumber('num1');
    const num2 = interaction.options.getNumber('num2');
    
    let result;
    
    switch(operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          return interaction.reply({ content: '❌ لا يمكن القسمة على صفر!', ephemeral: true });
        }
        result = num1 / num2;
        break;
      default:
        return interaction.reply({ content: '❌ عملية غير صحيحة!', ephemeral: true });
    }
    
    const embed = new EmbedBuilder()
      .setColor(config.color.success)
      .setTitle('🧮 الحاسبة')
      .setDescription(`${num1} ${operation} ${num2} = **${result}**`)
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
