# Advanced Discord Bot 🤖

بوت Discord متقدم مع رسائل Embed احترافية والعديد من الميزات المفيدة!

## ✨ الميزات

- 🎨 **رسائل Embed احترافية** - رسائل جميلة ومنسقة
- 📊 **معلومات المستخدم والسيرفر** - عرض تفاصيل شاملة
- ⚡ **أوامر سريعة** - Ping، مساعدة، وغيرها
- 🛡️ **نظام Cooldown** - حماية من الإساءة
- 🎯 **منصة عربية** - دعم كامل للغة العربية

## 📋 الأوامر

| الأمر | الوصف |
|------|-------|
| `!help` | عرض جميع الأوامر المتاحة |
| `!ping` | عرض تأخير البوت |
| `!userinfo [@user]` | معلومات المستخدم |
| `!serverinfo` | معلومات السيرفر |
| `!avatar [@user]` | صورة ملف المستخدم |
| `!embed` | رسالة embed جميلة مع مثال |

## 🚀 البدء

### المتطلبات
- Node.js v16 أو أحدث
- حساب Discord Developer
- رمز البوت (Token)

### التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/ilyessboziane-droid/advanced-discord-bot.git
cd advanced-discord-bot
```

2. **تثبيت المكتبات**
```bash
npm install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.example .env
```

4. **أضف التوكن في `.env`**
```
DISCORD_TOKEN=your_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

5. **تشغيل البوت**
```bash
npm start
```

## 📝 كيفية الحصول على التوكن

1. اذهب إلى [Discord Developer Portal](https://discord.com/developers/applications)
2. أنشئ تطبيق جديد
3. اذهب إلى **Bot** وأنقر **Add Bot**
4. انسخ الرمز (Token) من قسم **TOKEN**
5. استخدمه في ملف `.env`

## 🎨 تخصيص الألوان

عدّل `config.json` لتغيير الألوان:

```json
{
  "color": {
    "primary": "#5865F2",
    "success": "#57F287",
    "error": "#ED4245",
    "warning": "#FFA500"
  }
}
```

## 📂 هيكل المشروع

```
├── index.js              # ملف البوت الرئيسي
├── config.json           # الإعدادات
├── package.json          # المكتبات
├── .env.example          # متغيرات البيئة
└── commands/             # مجلد الأوامر
    ├── help.js
    ├── ping.js
    ├── userinfo.js
    ├── serverinfo.js
    ├── avatar.js
    └── embed.js
```

## 🔧 إضافة أوامر جديدة

أنشئ ملف جديد في مجلد `commands/`:

```javascript
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'commandname',
    description: 'وصف الأمر'
  },
  cooldown: 3,
  async execute(message, args, client, config) {
    // كود الأمر هنا
  }
};
```

## 📚 أمثلة على Embed

### رسالة بسيطة
```javascript
const embed = new EmbedBuilder()
  .setColor('#5865F2')
  .setTitle('العنوان')
  .setDescription('الوصف')
  .setFooter({ text: 'التذييل' })
  .setTimestamp();
```

### رسالة متقدمة
```javascript
const embed = new EmbedBuilder()
  .setColor('#5865F2')
  .setTitle('📊 العنوان')
  .setDescription('الوصف')
  .setThumbnail('رابط_الصورة')
  .addFields(
    { name: 'الحقل 1', value: 'القيمة 1', inline: true },
    { name: 'الحقل 2', value: 'القيمة 2', inline: true }
  )
  .setImage('رابط_صورة_كبيرة')
  .setFooter({ text: 'التذييل', iconURL: 'رابط_الأيقونة' })
  .setTimestamp();

await message.reply({ embeds: [embed] });
```

## 🐛 معالجة الأخطاء

البوت يتضمن نظام معالجة أخطاء شامل:
- معالجة الأخطاء غير المتوقعة
- رسائل خطأ واضحة للمستخدم
- تسجيل الأخطاء في Console

## 🤝 المساهمة

نرحب بمساهماتك! يمكنك:
1. Fork المشروع
2. Create branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للـ branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف LICENSE للتفاصيل.

## 👨‍💻 المطور

تم تطويره بواسطة **ilyessboziane-droid**

## 📞 الدعم

إذا واجهت أي مشاكل:
1. تحقق من ملف `.env` وتأكد من صحة التوكن
2. تأكد من تثبيت جميع المكتبات
3. افتح Issue على GitHub

---

⭐ إذا أعجبك المشروع، لا تنسَ إضافة نجمة! 🌟