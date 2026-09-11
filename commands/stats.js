const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('stats').setDescription('إحصائيات البوت'),
  cooldown: 2,
  async execute(interaction, client, config) {
    const embed = new EmbedBuilder().setColor(config.color.primary).setTitle('📊 إحصائيات البوت').addFields({name:'الأوامر',value:`${client.commands.size}`},{name:'السيرفرات',value:`${client.guilds.cache.size}`},{name:'المستخدمين',value:`${client.users.cache.size}`},{name:'Ping',value:`${client.ws.ping}ms`}).setFooter({text:config.embedSettings.footer}).setTimestamp();
    await interaction.reply({embeds:[embed]});
  }
};
