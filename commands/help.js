const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('عرض جميع الأوامر المتاحة'),
  cooldown: 3,
  async execute(interaction, client, config) {
    const commands = client.commands.map(cmd => `\`/${cmd.data.name}\` - ${cmd.data.description}`).join('\n');
    
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🤖 مساعدة البوت')
      .setDescription('قائمة جميع الأوامر المتاحة:')
      .addFields(
        { name: `📝 إجمالي الأوامر: ${client.commands.size}`, value: commands }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
