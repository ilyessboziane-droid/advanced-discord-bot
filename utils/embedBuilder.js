/**
 * Advanced Discord Bot
 * رسائل Embed احترافية وأوامر متقدمة
 */

const { EmbedBuilder } = require('discord.js');

// دالة لإنشاء embed بسيطة
function createSimpleEmbed(title, description, color = '#5865F2') {
  return new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();
}

// دالة لإنشاء embed متقدمة مع حقول
function createAdvancedEmbed(config) {
  const embed = new EmbedBuilder()
    .setColor(config.color || '#5865F2')
    .setTitle(config.title)
    .setDescription(config.description);
  
  if (config.thumbnail) embed.setThumbnail(config.thumbnail);
  if (config.image) embed.setImage(config.image);
  if (config.fields) {
    embed.addFields(config.fields);
  }
  
  embed.setFooter({ text: config.footer || 'Advanced Bot' });
  embed.setTimestamp();
  
  return embed;
}

// دالة لإنشاء embed للأخطاء
function createErrorEmbed(message, details = '') {
  return new EmbedBuilder()
    .setColor('#ED4245')
    .setTitle('❌ خطأ')
    .setDescription(message)
    .addFields({ name: 'التفاصيل', value: details || 'لا توجد تفاصيل إضافية' })
    .setTimestamp();
}

// دالة لإنشاء embed للنجاح
function createSuccessEmbed(title, description) {
  return new EmbedBuilder()
    .setColor('#57F287')
    .setTitle(`✅ ${title}`)
    .setDescription(description)
    .setTimestamp();
}

// دالة لإنشاء embed للتحذير
function createWarningEmbed(title, description) {
  return new EmbedBuilder()
    .setColor('#FFA500')
    .setTitle(`⚠️ ${title}`)
    .setDescription(description)
    .setTimestamp();
}

module.exports = {
  createSimpleEmbed,
  createAdvancedEmbed,
  createErrorEmbed,
  createSuccessEmbed,
  createWarningEmbed
};