const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('عرض صورة الملف الشخصي')
    .addUserOption(option => option.setName('user').setDescription('المستخدم').setRequired(false)),
  cooldown: 2,
  async execute(interaction, client, config) {
    const user = interaction.options.getUser('user') || interaction.user;
    const avatarURL = user.displayAvatarURL({ dynamic: true, size: 1024 });

    const embed = new EmbedBuilder()
      .setColor(config.color.primary)
      .setTitle(`🖼️ صورة ${user.username}`)
      .setImage(avatarURL)
      .addFields(
        { name: 'Username', value: user.username, inline: true },
        { name: 'ID', value: user.id, inline: true }
      )
      .setFooter({ text: config.embedSettings.footer })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
