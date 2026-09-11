const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('إنشاء استطلاع')
    .addStringOption(option => option.setName('question').setDescription('السؤال').setRequired(true))
    .addStringOption(option => option.setName('option1').setDescription('الخيار الأول').setRequired(true))
    .addStringOption(option => option.setName('option2').setDescription('الخيار الثاني').setRequired(true))
    .addStringOption(option => option.setName('option3').setDescription('الخيار الثالث').setRequired(false))
    .addStringOption(option => option.setName('option4').setDescription('الخيار الرابع').setRequired(false)),
  cooldown: 3,
  async execute(interaction, client, config) {
    const question = interaction.options.getString('question');
    const option1 = interaction.options.getString('option1');
    const option2 = interaction.options.getString('option2');
    const option3 = interaction.options.getString('option3');
    const option4 = interaction.options.getString('option4');
    
    const options = [option1, option2, option3, option4].filter(Boolean);
    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'];
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('📋 استطلاع')
      .setDescription(question)
      .addFields(
        ...options.map((opt, i) => ({ name: `الخيار ${i + 1}`, value: opt, inline: false }))
      )
      .setFooter({ text: `الاستطلاع من: ${interaction.user.username}` })
      .setTimestamp();

    const message = await interaction.reply({ embeds: [embed], fetchReply: true });
    
    for (let i = 0; i < options.length; i++) {
      await message.react(emojis[i]);
    }
  }
};
