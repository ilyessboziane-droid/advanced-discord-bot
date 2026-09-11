const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('password')
    .setDescription('توليد كلمة مرور عشوائية')
    .addNumberOption(option => option.setName('length').setDescription('طول كلمة المرور').setRequired(false)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const length = interaction.options.getNumber('length') || 12;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
    let password = '';
    for (let i = 0; i < Math.min(length, 32); i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle('🔐 كلمة مرور')
      .addFields({ name: 'كلمة المرور', value: `\`${password}\`` })
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();
    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
};
