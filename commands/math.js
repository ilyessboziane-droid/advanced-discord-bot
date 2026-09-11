const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('math').setDescription('عملية حسابية متقدمة').addStringOption(option => option.setName('expression').setDescription('المعادلة').setRequired(true)),
  cooldown: 2,
  async execute(interaction, client, config) {
    try {
      const expr = interaction.options.getString('expression');
      const result = Function('return ' + expr)();
      const embed = new EmbedBuilder().setColor(config.color.success).setTitle('🧮 الحسابات').addFields({name:'المعادلة',value:expr},{name:'النتيجة',value:`${result}`}).setTimestamp();
      await interaction.reply({embeds:[embed]});
    } catch(e) {
      await interaction.reply({content:'❌ معادلة غير صحيحة!',ephemeral:true});
    }
  }
};
