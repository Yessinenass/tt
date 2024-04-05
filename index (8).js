// { This Bot Was Programmed And Devloped By Ciminal Team } //

const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Strong Team')
});

app.listen(3000, () => {
  console.log('Strong Team');
});

// { Ciminal Team Uptime } //

app.post("/uptime_devtools", (req, res) => {
  console.log("Strong Team Uptime")
    res.send({
      msg: "done uptime",
      access: "by_devtools",
    })
  })

  // { Ciminal Team Intents } //

  const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu , MessageAttachment,  TextInputComponent , Modal} = require(`discord.js`)
  const {createTranscript} = require('discord-html-transcripts');
  const ms = require("ms")
  const fs = require(`node:fs`)
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_PRESENCES
    ],
    partials: ["REACTION", "MESSAGE", "CHANNEL"]
  }).setMaxListeners(0)
  const { REST } = require("@discordjs/rest")
  const { Routes } = require("discord-api-types/v9")
  const config = require(`./config.json`)
  const db = require(`pro.db`)
  const prefix = "!"
  client.config = config
  const line = "https://cdn.discordapp.com/attachments/1225465366378057768/1225600241601089568/Strong_Line.gif?ex=6621b82c&is=660f432c&hm=83da5b7169a8ba652f7e3adc1feccc6b942e999f0a15481e432d8f794c2ae73d&"

  // { Ciminal Team Discord.Js } //

  const Discord = require("discord.js")
  module.exports = client

  // { Ciminal Team Fix Error } //

   process.on("unhandledRejection", error => {
    return console.log(error)
  }); 
   process.on("unhandledRejection", error => {
    return 
  }); 
   process.on("unhandledRejection", error => {
    return 
  }); 

  

  // { Ciminal Team Bot Ready } //

  client.on('ready' , async() => {
    console.log(`================`)
    console.log(``)
    console.log(`Bot Name : ${client.user.username}`)
    console.log(`Bot Tag : ${client.user.tag}`)
    console.log(`Bot Id : ${client.user.id}`)
    console.log(`Servers Count : ${client.guilds.cache.size}`)
    console.log(`Users Count : ${client.guilds.cache
  .reduce((a, b) => a + b.memberCount, 0)
  .toLocaleString()}`)
    console.log(``)
    console.log(`================`)
    var statuses = [`Strong Strone 1K???`];
    var timers = 2;
      var timeing = Math.floor(timers * 1000);
      setInterval(function() {
        var lengthesof = statuses.length;
        var amounter = Math.floor(Math.random() * lengthesof);
        client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/help' });
      }, timeing);

    })

 // { Ciminal Team Const,Let,Var } //

const welcomerooom = "1211388928691671131"
const link = "https://discord.gg/strong1"
const feedback = "1225465501598220308"
const autolinerooms = ["1206354206399668294","1206354256370864138","1211388992193560587"]
const ordercategory = "1225465336644632638"
const applycategory =  "1206354145599164466"
const testerrole = "1225465265161240636"
const taxchannel = "1206354263434068000"
const upgraderoom = "1213080855858380831"
const welcomesellerroom = "1225465410439352510"
let team = "1225465164824969323"
let offerroom = "1225600278712156240"
let supportt = "1225765027986931722"
let support = "1225765027986931722"
let supportcategory = "1225765027986931722"
let color = "#303136"
let order = "1206354259575054378"
let applyteam =  "1211389017397133323"
let rulest = "1225465409054969966"
let newst = "1225465407431901265"
let adsprice = "1225465512499220490"
let pricet = "1225465419473752155" 
  var blacklistWords = ['نترو','اكونتات','بوتات','كرديت','نيترو','ديس','كريديت','ديسكورد','ديس','سوشيال','بيتكوين','btc','حسابات','متوفر','بيع','سيرفر','سيرفرات','توكنات','توكن','تفعيل','بوستات','بوست','فيزا','هكر','سعر','عرض','تيك توك','انستا','نتفلكس','نتفليكس','سبوتيفاي','فيسبوك','يوتيوب','تويتر','تيلجرام','ستيم','شدات','يوسي','روبلوكس','Watch it','شاهد','فوت','فوتات','بايبال','اكس بوكس','ماين كرافت','كروت','ديزاين','فايكينج','انشارتد','فايكنج','كسمك','كسمين امك','كسمينك','ياخول','يا خول','يمعرص','يعرص','يامتناك','يا متناك','يشرموط','ياشرموط','يا شرموط','يكسمك','احا','خول']
const VClientRole = "1225465234764857496"; // اي دي رول الكلاينت
const VTeamRole = "1225465164824969323"; // رول التيم او الرول اللي تقدر تستخدم الامر
let boost_channel = "1225465433008898110"; //ID CHANNEL BOOST HERE 
  // { تشفير } //

    client.on('messageCreate', message => {
      if (message.author.bot || message.member.permissions.has('ADMINISTRATOR')) return;

      const content = message.content.split(' ');

      if (!content[0]) return;

      content.forEach(arg => {
        if (!message) return;

        const found = blacklistWords.filter(b => b === arg).map(m => m)[0];

        if (found) {
          message.author.send('');
          message.delete();
          return;
        }
      });
    });

// { +Help } //

client.on("messageCreate", message => {
if (message.content == prefix + "help") {
const embed = new MessageEmbed()
            .setTitle("**Help Menu**")
            .setColor(color)
            .setImage(line)
            .setThumbnail(message.guild.iconURL())            
.setDescription(`**
> 𝐇𝐞𝐲 ${message.author}


> 𝐈𝐦 𝐒𝐭𝐫𝐨𝐧𝐠 𝐒𝐲𝐬𝐭𝐞𝐦 

> 𝐈 𝐖𝐨𝐫𝐤 𝐅𝐨𝐫 ${message.guild.name} 

> 𝐌𝐲 𝐃𝐞𝐯𝐥𝐨𝐩𝐞𝐫 𝐈𝐬 𝐒𝐥𝐨𝐖 𝐎𝐰𝐧𝐞𝐫 𝐃𝐢𝐫𝐞𝐜𝐭 **`)

    let row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('commands')
        .setPlaceholder('⚘・𝐒𝐞𝐥𝐞𝐜𝐭 𝐀 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲')
        .addOptions([
          {
            label: 'Owners Cmds',
            value: 'Owners',
            description: 'Commands For Owners',
            emoji: '<a:emoji_211:1064842844172455956>',
          },
          {
            label: 'Public Cmds',
            value: 'Public',
            description: 'Commands For Public',
            emoji: '<a:aa:1075236857358598185>',
          },
          {
            label: 'Admins Cmds',
            value: 'Admins',
            description: 'Commands For Admins',
            emoji: '<a:ss_4:1064843136276365412>',
          },
          {
            label: 'Store Cmds',
            value: 'Store',
            description: 'Commands For Store',
            emoji: '<a:DesignS:1064842187952619550>',
          },
        ]),
    );

    message.channel.send({ embeds: [embed], components: [row] });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isSelectMenu()) return;

  const category = interaction.values[0];

  if (category === 'Owners') {
    const first = new MessageEmbed()
      .setTitle("**Owners Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}setactivity \` To Change Activity Bot \`

> ${prefix}setprefix \` To Change Prefix Bot \`

> ${prefix}setavatar \` To Change Avatar Bot \`

> ${prefix}team \` To Mention All Members In Team \`

> ${prefix}tbc \` To Send Broadcast For Team \`**`);

    interaction.update({ embeds: [first], components: interaction.message.components });
  } else if (category === 'Public') {
    const publicCmds = new MessageEmbed()
      .setTitle("**Public Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`** 
> ${prefix}uptime \` To Show Uptime Bot \`

> ${prefix}link \` To Show Link Server \`

> ${prefix}avatar \` To Show Avatar Member \`

> ${prefix}avatar-server \` To Show Avatar Server \`

> ${prefix}server \` To Show Information Server \`

> ${prefix}invites \` To Show Your Invites \`

> ${prefix}dev \` To Find Out Who Made The Bot\`**`);

    interaction.update({ embeds: [publicCmds], components: interaction.message.components });
  } else if (category === 'Admins') {
    const adminCmds = new MessageEmbed()
      .setTitle("**Admin Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}embed \` To Make Embed Message \`

> ${prefix}say \` To Make Say Message \`

> ${prefix}unbanall \` To UnBan All Member \`

> ${prefix}name \` To SetName A Member \`

> ${prefix}lock \` To Lock Channel \`

> ${prefix}unlock \` To UnLock Channel \`

> ${prefix}show \` To Show Channel \`

> ${prefix}hide \` To Hide Channel \`

> ${prefix}ban \` To Ban Member \`

> ${prefix}unban \` To UnBan Member \`

> ${prefix}mute \` To Mute Member \`

> ${prefix}unmute \` To UnMute Member \`

> ${prefix}g-role \` To Give Role To Member \`

> ${prefix}r-role \` To Remove Role To Member \`**`);

    interaction.update({ embeds: [adminCmds], components: interaction.message.components });
  } else if (category === 'Store') {
    const storeCmds = new MessageEmbed()
      .setTitle("**Store Cmds**")
      .setColor(color)
      .setImage(line)
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`**
> ${prefix}send \` To Send Msg DM To Member \`

> ${prefix}come \` To Come DM To Member \`

> ${prefix}tax \` To Show Tax A Number \`

> ${prefix}welcome-seller \` To Welcome Seller \`

> ${prefix}upgrade \` To Upgrade Seller \`

> ${prefix}font \` To Change Word For 𝐖𝐨𝐫𝐝 \`

> ${prefix}tag \` To Change Seller Name \`

> مقبول \` To Accept Someone For Team \`

> مرفوض \` To Reject Someone For Team \`

> دليل \` To Get The Pro Bot Website Where You Can Find The Guide \`

> ${prefix}bot \`To obtain a form if you are requesting a bot \`

> ${prefix}design \` To obtain a form if you are requesting a design \`

> ${prefix}rep \` To obtain a form if you want to inform someone \`**`);

    interaction.update({ embeds: [storeCmds], components: interaction.message.components });
  }
});
//
  client.on("guildMemberUpdate", (old,now) => {
    let oldS = old.premiumSince;
    let nowS = now.premiumSince;
    if (!oldS && nowS) {
        let user = now.guild.members.cache.get(now.user.id)
        let channel = now.guild.channels.cache.get(boost_channel)
        channel.send({
         content : `**__
> <a:wblue:1225490853917884568> | Thanks For Added Boost ${now.user} __**`
        }).then((y) => {
y.react("<a:wblue:1225490853917884568>")
})
    }
})
//
client.on('messageCreate', async voxm => {
    if (voxm.author.bot) return;

    if (voxm.content.toLowerCase().startsWith(prefix + "cl")) {
      if (!(voxm.member.permissions.has('ADMINISTRATOR') || voxm.member.roles.cache.has(VTeamRole))) { return voxm.reply("> **❌ | You Don't Have Permission To Do That**"); }
      const user = voxm.mentions.users.first();
      if (!user) { return voxm.reply('> **❌ | Please Mention A User**'); }
      const member = voxm.guild.members.cache.get(user.id);
      if (!member) { return voxm.reply("> **❌ | The Mentioned User Isn't In The Server**"); }
      const role = voxm.guild.roles.cache.get(VClientRole);
      if (!role) { return; }
      if (member.roles.cache.has(role.id)) { return voxm.reply('> **❌ | The Mentioned User Already Has The Role**'); }
      try {
          await member.roles.add(role);
          voxm.reply(`> **✅ | Done Add Client Role To ${user.tag}**`);
      } catch (error) {
          console.error('Error Adding Role Client, Error:', error);
          voxm.reply('Error, Please Try Again Later.');
      }
    }
});  
// { Wlc } //

  client.on('guildMemberAdd' , async(member) => {
    let welcomefukenembed = new MessageEmbed()
    .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
    .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
    .setImage(line)
  .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setDescription(`**<a:Arrow:1225697967860744224> | 𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐒𝐭𝐫𝐨𝐧𝐠 𝐒𝐭𝐨𝐫𝐞__ 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫.𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.

<a:right:1225490855809257673> | 𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. 

<a:right:1225490855809257673> | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 <#${order}> 

<a:right:1225490855809257673> | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 <#${applyteam}> 

<a:right:1225490855809257673> | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :⁠ <#${supportt}>

<a:right:1225490855809257673> | 𝐓𝐡𝐞 𝐀𝐝𝐬 𝐏𝐫𝐢𝐜𝐞𝐬 : <#${adsprice}>


<a:right:1225490855809257673> | 𝐄𝐧𝐣𝐨𝐲 <𝟑 **`) 
     .setColor(color)

  member.guild.channels.cache.get(welcomerooom).send({ content: `> **Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ ` , embeds: [welcomefukenembed]})

  // { Wlc2 } //

  member.send(`https://cdn.discordapp.com/attachments/1225465366378057768/1225616245269860373/Strong_Banner.jpg?ex=6621c713&is=660f5213&hm=b815bdc21f8adcbba875ce496a646779cf41ae52dd88e98a96c2b6c5929cb6af&`)
  }) 

  // { مقبول } //

  client.on('messageCreate', async(message) => {
    if(message.author.bot) return;

    if(message.content === "مقبول") {
   message.delete()

  message.channel.send(`> تم قبولك في منصه كابيتانو ${message.guild.name} 

اجـبـاري قـراءة لـعـدم جـلـب الـورنـات 
<#${newst}>
<#${rulest}>
<#${pricet}>

> نحـن سعـيـدون لـوجودك معـنا`)
    }

  // { +Map } //

    if(message.content === "+map") {
     message.delete()
  message.channel.send(`** 𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐒𝐭𝐫𝐨𝐧𝐠__ 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫.𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.**

**𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬.**


> - **Request Order - طلب اوردر**

 <a:right:1225490855809257673>    <#1225465492224082052>


> - **Request Ads - طلب اعلان**

 <a:right:1225490855809257673>  <#1206354250091855872> 


> - **Technical Support - الدعم الفني**

 <a:right:1225490855809257673> <#1225465518517915700>  


> - **Daily Offers - معرفه العروض اليوميه**

> <a:right:1225490855809257673> <#1225600278712156240>  


> - **Daily GiveAways - مسابقات يوميه**

> <a:right:1225490855809257673>  <#1225465363362480178>
`)
      }

  // { دليل } //

      if(message.content === "+tr") {
        message.reply(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   



  > **About : https://probot.io/transactions **`)
      }
    //
if(message.content === "+addrole") {
        message.reply(`> الان تم اضافه لك رول جديده  



> يجب نزول بها اوفرات يوميا علي الاقل واحد و الا سيتم تصفيتك  > `)
}
  // { Bot } //
    if(message.content === "+bot") {
      message.reply(`**
> Hello Please Fill The List To Help The Developer ・ اهلا بك برجائ ملئ القائمه لمساعده المبرمج


> 1-Please Put The Name Of The Bot ・ برجاء كتابه اسم البوت

> 2-Please Put Photo Of Bot ・ برجاء ارسال صوره البوت

> 3-Whats The Bot Type(system , etc..) ・ ما هو نوع البوت (سستم , الخ..)


برجاء الصبر حتي ينتهي المبرمج من البوت الخاص بك
**`)
    }
  // { +design } //
    if(message.content === "+design") {
      message.reply(`> **Hello Please Fill The List To Help The Designer ・ برجاء ملء الاستماره لمساعده المصمم

> 1-Whats The Name Of Your Server And The Summary ・ ما هو اسم سيرفرك و اختصاره

> 2-Whats The Color Of Your Design ・ ما هو لون التصميم الذي تريده

> 3-Whats The Type Of Design(Classic , Gaming , Store , etc..) ・ ما هو نوع التصميم (كلاسيك , جيمنج , استور , الخ..)

> 4-Do You Have An Example Of Your Design(Optional) ・ هل لديك مثال علي التصميم الذي تريده (اختياري)

> 5-How Many Hours You Want The Design Finished In It ・ كم عدد الساعات التي تريد ان يتم انهاء التصميم فيها

ThankYou , شكرا لكم
**`)
    }
  // { مرفوض } //

    if(message.content === "مرفوض") {
      message.reply(`تم رفضك في فريق ${message.guild.name} 
    
 برجاء تطوير مستواك و التقديم مره اخري`)
    }
  // { +Ws } //

    if(message.content === prefix+"ws") {
      message.delete()
      message.channel.send(`**> <a:w7bluecrown:1225700781530026064> | معك __${message.author}__ من طاقم السيرفر <a:Heart_1:1225700782565883968>

> <a:w7bluecrown:1225700781530026064> | برجاء انتظار البائع <a:Heart_1:1225700782565883968> 

> <a:w7bluecrown:1225700781530026064> | شكرا لتفهمكم برجاء عدم الازعاج بالمنشن <a:Heart_1:1225700782565883968>

> <a:w7bluecrown:1225700781530026064> | With You __${message.author}__ From Staff Server <a:Heart_1:1225700782565883968>

> <a:w7bluecrown:1225700781530026064> | Please Wait Saller <a:Heart_1:1225700782565883968>

> <a:w7bluecrown:1225700781530026064>  | Thank You For Your Understanding. Please don't Disturb With Mention <a:Heart_1:1225700782565883968>**`)
    }

  // { شفر } //

  // { تشفير } //

    

  // { +Rep } //

     if(message.content === prefix+"report") {
       message.delete()
       message.channel.send({embeds: [
         new MessageEmbed()
         .setTitle(`${message.guild.name} Team Report`)
         .setDescription(`**\` مرحبًا بك ف تذكرة الدعم الفني الخاصة ب انشارتد ، للتبليغ عن بائع متواجد ب طاقم العمل يرجى ملئ الليست الاتية   :

 الايدي الخاص بالبائع  : 

اسم السلعه وثمنها : 

القصة والمشكلة  : 

اسكرين التحويل : 
  **
  `)
         .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
         .setTimestamp()
         .setColor(color)
         .setThumbnail(message.guild.iconURL())
       ]})
     }

  // { +Med } //

    if(message.content === prefix+"wa") {
       message.delete()
       message.channel.send({embeds: [
         new MessageEmbed()
         .setTitle(`${message.guild.name} Team Mediator`)
         .setDescription(`**\`**__For Arabic__


> اهلا بك في طاقم العمل سترونج  ستور من فضلك قم بادخال البيانات الاتيه


 اي دي الطرف الثاني : 

اسم السلعه: 

سعر السلعه: 

من فضلك انتظر احد لرد عليك

__For English__


>  Welcome, Strong Store Staff, please enter the following data 


 ID of the second party :

Name of  the thing :

 Price of the thing :

Please wait for someone to reply to you **`)
         .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
         .setTimestamp()
         .setColor(color)
         .setThumbnail(message.guild.iconURL())
       ]})
     }

  // { Link } //

      if(message.content.toLowerCase() === "link") {
      message.channel.send(`**> <a:right:1225490855809257673>  https://discord.gg/strong1 star


> <a:news:1169378601204994058> 
 Strong, Make Yourself at Home <a:blackstars:1225769511186071604>**`)
    }

  // { لينك } //

      if(message.content === "Link") {
      message.channel.send(`> **<a:right:1225490855809257673>  https://discord.gg/strong1 star


> <a:news:1169378601204994058> 
 Strong, Make Yourself at Home <a:blackstars:1225769511186071604>**`)
    }

  // { لاين } //

    if(message.content === "Line") {
      message.delete();
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }

  // { Line } //

      if(message.content.toLowerCase() === "line") {
      message.delete();
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }

  // { خط } //

      if(message.content === "خط") {
      message.delete();
      message.channel.send(`https://media.discordapp.net/attachments/1225465366378057768/1225600241601089568/Strong_Line.gif?ex=6621b82c&is=660f432c&hm=83da5b7169a8ba652f7e3adc1feccc6b942e999f0a15481e432d8f794c2ae73d&`)
    }

  // { Fb } //

    if(message.content.toLowerCase() === "fb") {
      message.reply(`**
 شكرا لاختيارك ${message.guild.name} 

 Thanks For Choosing ${message.guild.name} 


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن ${message.author}

Your opinion matters , Please give feedback and m Mention the name of the person ${message.author}

----------------------------------------------


Here :
 <#${feedback}>
 <#${feedback}>
 **`)
  }
  });

  // { +Welcome Seller } //

  
  client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "welcome-seller")) {

      if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`**No Haved Perm In Role**`);
      let user = message.mentions.users.first()
      let args = message.content.split(" ").slice(2).join(" ")
      if (!user) return message.reply("**Pls Mention Seller**")
      if (!args) return message.reply("**Pls Mention Sell Roles**")
      client.channels.cache.get(welcomesellerroom).send(`> **𝖲𝖺𝗒 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖮𝗎𝗋 𝖭𝖾𝗐 𝖲𝖾𝗅𝗅𝖾𝗋 in __Strong 𝖲𝗍𝗈𝗋𝖾__ **


  > **𝖲𝖾𝗅𝗅𝖾𝗋 : ${user}** 


  > **𝖲𝖾𝗅𝗅𝖾𝗋 𝖱𝗈𝗅𝖾𝗌 : ${args}** 


  > **𝖯𝗅𝗌 𝖱𝖾𝖺𝖽 𝖳𝗁𝖾 𝖱𝗎𝗅𝖾𝗌 𝖳𝗈 𝖠𝗏𝗈𝗂𝖽 𝖳𝖺𝗄𝗂𝗇𝗀 𝖶𝖺𝗋𝗇𝗌 <#${rulest} **


  > **𝖳𝗁𝗑 𝖳𝗈 𝖠𝗉𝗉𝗅𝗒 𝖳𝗈 𝖳𝖾𝖺𝗆 Top Libya Shop **


  > **𝖤𝗇𝗃𝗈𝗒**`)
      client.channels.cache.get(welcomesellerroom).send({
        embeds: [
          new MessageEmbed()
            .setImage(line)
            .setColor(color)
        ]
      })
      message.reply("> Done")
    }
  })
  /*> `&-` 𝖲𝖾𝗅𝗅𝖾𝗋 : <@!913429299430817844>


  > `?-` 𝖴𝗉𝗀𝗋𝖺𝖽𝖾𝖽 𝖳𝗈 : <@&1141865841579786240> 


  > `#-`  𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 𝖠𝗇𝖽 𝖳𝗁𝗑 𝖿𝗈𝗋 𝖠𝖼𝗁𝗂𝖾𝗏𝗂𝗇𝗀 𝖨𝗇 𝐍𝐞𝐕𝐞𝐑 


  > 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀*/

  // { +Upgrade } //

  client.on("messageCreate", message => {
    if (message.content.startsWith(prefix + "upgrade")) {
      const owner = ["148521446468091904"]  

      if (!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);

      if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
      let user = message.mentions.members.first()
      let args = message.mentions.roles.first()
      if (!user) return message.reply("**Pls Mention Seller**") 
      if (!args) return message.reply("**Pls Mention Roles sell**")
      user.roles.add(args)
      client.channels.cache.get(upgraderoom).send(`> **𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖨𝗇 __Strong 𝖲𝗍𝗈𝗋𝖾__  **


  > **𝖲𝖾𝗅𝗅𝖾𝗋 : ${user}**   


  > **𝖴𝗉𝗀𝗋𝖺𝖽𝖾𝖽 𝖳𝗈 : ${args}**


  > **𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 𝖠𝗇𝖽 𝖳𝗁𝗑 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 Strong 𝖲𝗍𝗈𝗋𝖾** 


  > **𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 **`)
      client.channels.cache.get(upgraderoom).send({
        embeds: [
          new MessageEmbed()
            .setImage(line)
            .setColor(color)
        ]
      })
      const upgradedmembed = new MessageEmbed()
        .setColor(color) 
        .setTimestamp()
        .setDescription( 
  `**> \`#-\` 𝖧𝖾𝗅𝗅𝗈 ${user} , 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖱𝖾𝖺𝖼𝗁𝖾𝖽 { ${args} } 

  > \`?-\` 𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇 : ${user} 

  > \`%-\` 𝖳𝗁𝗑 𝖥𝗈𝗋 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇 Stronh 𝖲𝗍𝗈𝗋𝖾 

  > \`-\` 𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀 **`)
        .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 ${message.author.tag}`);
      user.send({ embeds: [upgradedmembed] });
      message.reply("> **Done**")
    }
  })

  // { Add Client Role } //

    client.on('messageCreate', async (message) => {
      if (message.author.id === "1206354139580473385" && message.channel.parentId === ordercategory) {
          let member = message.mentions.members.first();
          if (!member || member.bot) return;

          let roleId = "1179867905186349086";
          let role = message.guild.roles.cache.get(roleId);

          if (!role) {
              console.error(`Role with ID ${roleId} not found.`);
              return;
          }

          if (member.roles.cache.has(roleId)) {
              return;
          } else {
              member.roles.add(role.id).then(() => {
                  return message.channel.send({
                      content: `**<a:w7bluecrown:1225700781530026064> | Done Added __𝐒𝐭𝐫𝐨𝐧𝐠𝐒 | 𝐂𝐥𝐢𝐞𝐧𝐭__
<a:wblue:1225490853917884568> | To Client : <@!${member.user.id}>**`
                  });
              }).catch(error => {
                  console.error("Error adding role:", error);
              });
          }
      }
  });

  // { +Inrole } //

      client.on("messageCreate", message => {
        if (message.content.startsWith(prefix + "inrole")) {
            let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
            let trole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args)
             if (!trole) {
                 return message.reply(`**:rolling_eyes: Please mention role id**`)
             } else {
                 const roleMember = trole.members.map((user) => `${user.id} ${user.user.tag}`).join('\n')
          message.reply({embeds: [
           new MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))

      .setThumbnail(message.author.avatarURL({dynamic:true}))
            .addFields([
          {
          name: `List of users in ${trole.name} role : (${trole.members.size})`,
          value: `**${roleMember}**`
      },
      ])  
      .setColor(color)
      .setImage(line)
      .setFooter(`Members in this role ${trole.members.size}`)]})
        }
        }
       }) 

  // { +Setactivity } //

  client.on('messageCreate', message => {
      if(message.content.toLowerCase().startsWith(prefix + 'setactivity')) {
          if (!owner.includes(message.author.id)) return;
          const oy = message.content.split(" ").slice(1).join(" ");
          if(!oy) return message.reply("**Please Write New Activity**");

          // تسجيل النشاط في الكونسول
          console.log(`Changing bot activity to: ${oy}`);

          client.user.setPresence({ activities: [{ name: oy }], status: 'online' });
          return message.reply(`**Done, set bot presence to ${oy}**`);
      }
  });

  // { +Setprefix } //

  client.on("messageCreate", async message => {


      if (message.content.startsWith(prefix + "setprefix")) {
          if (!owner.includes(message.author.id)) {
              return message.channel.send(`**Permission denied. You don't have the required permissions.**`);
          }

          const args = message.content.slice(1).trim().split(/ +/);
          if (!args[1]) {
              return message.channel.send(`**Please provide a new prefix.**`);
          }

          // تغيير قيمة البريفيكس في قاعدة البيانات
          db.set("prefix", args[1]);

          // تحديث ملف config.json
          const config = require('./config.json');
          config.prefix = args[1];
          fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

          message.channel.send(`**Prefix successfully changed to: \`${args[1]}\`**`);

      }
  });

  // { +Setavatar } //

  client.on("messageCreate", message => {
      if (message.content.toLowerCase().startsWith (prefix+"setavatar")) {
          if (!owner.includes(message.author.id)) return;
          let avLink = message.content.substr(`${prefix}setavatar `.length);
          if (!avLink) return message.channel.send("**Incorrect Link, Please Put Avatar Link!**");

          // تسجيل تغيير الصورة في الكونسول
          console.log(`Changing bot avatar to: ${avLink}`);

          client.user.setAvatar(avLink).then(() => {
              message.delete()
              message.channel.send('**Bot Avatar Has Been Changed ✅**')
          }).catch(() => {
              message.channel.send('**Error, Try Again Later! 🚫: Incorrect Link Or Ratelimit**')
          });
      }
  });

  // { Auto Fedback } //

  client.on('messageCreate' , async(message) => {
    if(message.author.bot) return;
    if(message.channel.id != feedback) return;
      message.reply({embeds:[
        new MessageEmbed()
        .setColor(color)
  .setDescription(`<a:wblue:1225490853917884568> **We Appreciate Your Words ** <a:blackstars:1225769511186071604>**`)
        .setImage(line)
      ]})
    });

  // { +Send } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (!message.channel.guild) return;

      if (message.content.startsWith(prefix + 'send')) {
          if (!message.member.permissions.has("ADMINISTRATOR")) {
              return message.reply(`**You don't have permissions**`);
          }

          let id = message.content.split(' ')[1];
          let user = message.mentions.members.first() || message.guild.members.cache.get(id);
          let argss = message.content.split(' ').slice(2).join(' ');

          if (!user) {
              return message.channel.send(`**Please mention a member or provide their ID**`);
          }

          if (!argss) {
              return message.channel.send(`**Please send a message**`);
          }

          if (user.user.bot || user.id === message.author.id) {
              return message.channel.send(`**You cannot send a message to a bot or yourself**`);
          }

          let attach = message.attachments.first();
          if (attach) {
              user.send({ content: argss, files: [attach] }).then(m => {
                  message.channel.send(`**Done, message sent**`);
              }).catch(err => {
                  return message.channel.send(`**Can't send a message to this user**`);
              });
          } else {
              user.send(argss).then(m => {
                  message.channel.send(`> **Done**`);
              }).catch(err => {
                  return message.channel.send(`**Can't send a message to this user**`);
              });
          }
      }
  });


  // { +Unbanall } //

  client.on('messageCreate', async message => {
          if(message.content.startsWith(prefix + 'unbanall')) {
                  let b = await message.guild.bans.fetch()
                  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
                  b.forEach(ban => message.guild.members.unban(ban.user))
                          message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)
          }
  });

  // { +Name | اسم } //

  client.on('messageCreate', async message => {
      if(message.content.toLowerCase().startsWith(prefix + 'name') || message.content.startsWith(prefix + 'اسم')){

        const member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]);
        const name = message.content.split(" ").slice(2).join(" ")

        if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا تمتلك الصلاحيات اللازمة لاستخدام هذا الامر !')
        if(!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('لا امتلك الصلاحيات اللازمة للقيام هذا الامر !')

        if(!member) return message.reply('رجاء قم بمنشن العضو الذي تريد تغيير لقبه !')
        if(!name) return message.reply("رجاء قم بكتابة اللقب اللذي تريد وضعه للعضو !")

        member.setNickname(name).catch(() => {message.reply('لا يمكنني تغيير اسم هذا العضو !')})
      }
  })

  // { +Unlock } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'unlock')) {
                  const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          SEND_MESSAGES: true
                  }).then(() => {
                          message.reply({ content: `:unlock: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
                  })
      }
  });

  // { +Lock } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'lock')) {
                      const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          SEND_MESSAGES: false
                  }).then(() => {
                          message.reply({ content: `:lock: **${message.channel.name} has been looked.** `, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })
                  })
          }
  });

  // { +Show } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'show')) {
                  const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: "**You don't have permission to use this command**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `**I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          VIEW_CHANNEL: true
                  }).then(() => {
                          message.reply({ content: `<#${message.channel.id}> Done show this room.**`, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })
                  })
          }
  });

  // { +Hide } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'hide')) {

      const permission = message.member.permissions.has("MANAGE_CHANNELS");

      const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

           if (!permission)
     return message.reply({ content: "**You don't have permission to use this command**", ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)

       })

          if (!guilds) return message.reply({ content: `**I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                             console.log(`i couldn't reply to the message: ` + err.message)

      })

            let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          VIEW_CHANNEL: false
                  }).then(() => {
                          message.reply({ content: `**<#${message.channel.id}> Done hide this room.**`, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)

                          })
                  })
          }
  });

  // { +Unban } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.startsWith(prefix + 'unban')) {
  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
      let args = message.content.split(' ')
      let id = args[1];
      if(!id)  return message.reply(`** 😕 Please mention member or id **`);
      if(isNaN(id)) {
         return message.reply(`** 😕 Please mention member or id **`);
      } else {
  message.guild.members.unban(id).then(mmm => {
          message.reply(`✅** ${mmm.tag} unbanned!**`)
        }).catch(err => message.reply(`**I can't find this member in bans list**`));
        }
      }
  }) 

  // { +Avatarserver } //

  client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

  if (command === "server-avatar") {
    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`Download Server Avatar`)
          .setURL((`${message.guild.iconURL({ dynamic: true, size: 4096 })}`))
      );
    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Server Avatar link](${message.guild.iconURL({ dynamic: true, size: 4096 })})`)
          .setImage(`${message.guild.iconURL({ dynamic: true, size: 4096 })}`)
      ], components: [button]
    })
  }
    if (command === "server") {
      await message.guild.members.fetch();
      const members = message.guild.members.cache;
      const channels = message.guild.channels.cache;
      const emojis = message.guild.emojis.cache.size;
      const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
      const boostCount = message.guild.premiumSubscriptionCount;
      const verificationLevel = message.guild.verificationLevel;
      const rolesCount = message.guild.roles.cache.size;

      await message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(color)
            .setImage(line)
            .setAuthor({ name: `${message.guild.name} Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
              { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
              { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
              { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
              { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
              { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
              { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}**\nRoles: **${rolesCount}**`, inline: true },
              { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
            )
        ], ephemeral: true
      })
    }
  })

    // { +Top-server } //

     client.on('messageCreate', async (message) => {
        if(message.content == '+top-server') {

           const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

           const description = guilds.map((guild, index) => {
             return `\`#${index+1}\` | **${guild.name}** -> **\_\_${guild.memberCount}\_\_** members`
           }).join(`\n\n`)

           const embed = new MessageEmbed()
             .setTitle('Top Guilds')
             .setDescription(description)
             .setColor(color)

           message.channel.send({embeds: [embed]})
         }
    })




  // { +Ban } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      let c = message.content.split(' ')
      if (c[0] == prefix + 'ban') {
          if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
      if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;

      let argss = message.content.split(' ')
      let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
      if(!user) return message.reply(`** 😕 Please mention member or id **`);
   if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

      if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
      await user.ban().catch(err => {console.log(err)});
       await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
      }
  }) 


  // { +Uptime } //

  client.on("messageCreate", async (message) => {
    if (message.content === prefix + "uptime") {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let s = Math.floor(client.uptime / 1000) % 60;
      ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setImage(line)
        .setTitle(`uptime:`)
        .setDescription(`**${ip}**`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
      message.reply({ embeds: [embed] })
    }
  })

  // { +G-role } //

  client.on("messageCreate", message => {
    if (message.content.toLowerCase().startsWith(prefix + "g-role")) {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)

      const theRole = message.mentions.roles.first();
      const theUser = message.mentions.members.first();

      if (!theUser) return message.reply('**Please Mention A User !**')
      if (!theRole) return message.reply('**Please Mention A Role !**')

      theUser.roles.add(theRole)
        .then(() => {
          message.reply("Done ✅")
        })
        .catch((t) => {
          message.reply("Error 🚫 : " + t.message)
        })
    }
  })


  // { +R-role } //

  client.on("messageCreate", message => {
    if (message.content.toLowerCase().startsWith(prefix + "r-role")) {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
      const theRole = message.mentions.roles.first();
      const theUser = message.mentions.members.first();

      if (!theUser) return message.reply('**Please Mention A User !**')
      if (!theRole) return message.reply('**Please Mention A Role !**')

      theUser.roles.remove(theRole)
        .then(() => {
          message.reply("Done ✅")
        })
        .catch((t) => {
          message.reply("Error 🚫 : " + t.message)
        })
    }
  })

  // { Order Msg } //

    client.on('channelCreate', message => {
      if (message.parentId !== ordercategory) return;
      setTimeout(() => {
          message.send(`
\`-\` ** السلام عليكم ورحمة الله وبركاته ** 
\`-\` **معك طاقم العمل لدي سترونج في تذكرة الطلب ** <:sttrong:1225487660999508059> 

يرجي توضيح طلبك بالكامل بكل توضيح لكي يمكن لطاقم العمل مساعدتك باكمل وجهه وتاكيد طلب المنتج الخاص بك , بعد تحديد طلبك سيتم منشن فريق السلعه الخاص بطلبك ويرجي التحلي بالصبر و انتظار البائع من فريق العمل , ويرجي العلم ان في حاله عدم توافر المنتج في الوقت الحالي سيتم غلق التذكره و العمل علي توفير المنتج قريبا <a:blackstars:1225769511186071604>
`)
      }, 3000);
                 })
//
client.on('channelCreate' , async(message) => {
  
  if(message.parentId != applycategory) return;
  setTimeout(() => {  
    
  message.send({ content: `\`-\` ** السلام عليكم ورحمة الله وبركاته ** 
\`-\` **معك طاقم العمل لدي كابيتانو في تذكرة التقديم ** 

برجاء تحديد جنسيتك من خلال الضغط علي البوتن 
` , components: [
    new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel("مصري")
      .setStyle("PRIMARY")
      .setCustomId("hh"),
      new MessageButton()
      .setLabel("خليجي")
      .setStyle("PRIMARY")
      .setCustomId("xx"),
      new MessageButton()
      .setLabel("بنات")
      .setStyle("PRIMARY")
      .setCustomId("gg"),
      new MessageButton()
      .setLabel("مصمم")
      .setStyle("PRIMARY")
      .setCustomId("dd"),
      new MessageButton()
      .setLabel("English")
      .setStyle("PRIMARY")
      .setCustomId("jj")
    )
  ]})
     }, 2000);  
  
})
client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "hh") {
     await interaction.reply({ embeds: [
        new MessageEmbed()
        .setTitle("Egyptian Apply To Team")
        .setDescription(`
> \`-\` اسمك ثلاثي 

> \`-\` سنك 

> \`-\` بلد السكن  

> \`-\` رقم الكاش الخاص بك 

> \`-\` رقمك الشخصي 

> \`-\` مده الخبره في شغل الاستورات  

> \`-\` برجاء ارسال 20 فيدباك من تلت سيرفرات مختلفه ومعروفه 

> \`-\` اشتغلت في استورات اي قبل كده 

> \`-\` رولات البيع الخاصه بيك  

\` ملحوظات مهمه للغايه \`

1- اهم حاجه الاحترام المتبادل بينك وبين طاقم العمل جوا

2- لازم الفيدباكات تكون في سيرفرات فوق 6 الاف ممبر 

3- في حال انك تجيب ورنات اكتر من 5 ورنات بيتم تصفيتك

4- اذا كان تم تصفيتك من السيرفر مرتين قبل كده ف مينفعش تقدم تاني خلاص 

بعد ما تخلص اكتب \`+wtester\`
`)
      ]})
    }
  if(interaction.customId == "gg") {
     await interaction.reply({ embeds: [
        new MessageEmbed()
        .setTitle("Gulfs Apply To Team Girl")
        .setDescription(`> #-1 اختبار صوتي <a:emoji_16:1212408881020542976> 



> #-2 اسم المحافظه  <a:emoji_16:1212408881020542976> 



> #-3 رقم الكاش   <a:emoji_16:1212408881020542976> 



> #-4 اسمك الثلاثي   <a:emoji_16:1212408881020542976> 



> #-5 اسماء السيرفرات الذي عملت فيها   <a:emoji_16:1212408881020542976> 

> ضمان 250k or 18ج
<a:emoji_16:1212408881020542976> 
بعد ما بتخلص اكتب \`+wtester\`
`
)
      ]})
}
if(interaction.customId == "xx") {
         await interaction.reply({ embeds: [
            new MessageEmbed()
            .setTitle("Gulfs Apply To Team")
            .setDescription(`**
    > \`-\` اسمك ثلاثي <a:emoji_16:1212408881020542976> 

    > \`-\` سنك <a:emoji_16:1212408881020542976> 

    > \`-\` بلدك <a:emoji_16:1212408881020542976> 

    > \`-\` مده الخبره في البيع و الشراء <a:emoji_16:1212408881020542976> 

    > \`-\` برجاء ارسال 20 فيدباك من تلت سيرفرات مختلفه ومعروفه او يكون معاك رتبه بايع مضمون في سيرفرات الشوب مثل لندن وهوب وغيرها <a:emoji_16:1212408881020542976> 

    > \`-\` اشتغلت في استورات اي قبل كده <a:emoji_16:1212408881020542976> 

    > \`-\` رولات البيع الخاصه بيك <a:emoji_16:1212408881020542976> 

    -------------------------------------- 

    \` ملحوظات مهمه للغايه \`

    1- اهم حاجه الاحترام المتبادل بينك وبين طاقم العمل جوا

    2- لازم تكون بتسوي الحاجه بنفسك ماينفع تكون بتشتريها و تبيع

    3- 150 الف كرييدت ضمان اجباري في حاله عدم وجود فيدباك

    4- اذا كان تم تصفيتك من السيرفر مرتين قبل كده ف مينفعش تقدم تاني خلاص

    --------------------------------------  

    بعد ما تخلص اكتب \`+wtester\`**`)

          ]})
        }
if(interaction.customId == "dd") {
     await interaction.reply({ embeds: [
        new MessageEmbed()
        .setTitle("Gulfs Apply To Team Designer")
        .setDescription(`- رقم الهاتف المحمول الشخصي :   

- اسمك ثلاثي بالكامل :  

- عمرك ؟ عام ( اجباري ) :     

- رقم الكاش التجاري ( اختياري ) :    

- اسم المحافظه و العنوان :  

- اسماء السيرفرات الذي عملت بها من قبل :  

- ارسل رأي معاملات لك ( فيدباك اجباريه ) :  

ضمان رسوم 150 الف برو بوت أو 12 جنيه مصري

بعد ما بتخلص اكتب \`+wtester\`
`) 
       ]})
}
  if(interaction.customId == "jj") {
      interaction.reply({ embeds: [
        new MessageEmbed()
        .setTitle("English Apply To Team")
        .setDescription(`
> \`-\` Name 

> \`-\` Age 

> \`-\` Country 

> \`-\` Experience time in sell and buy  

> \`-\` Send 20 Feedbacks From Ur Clients  

> \`-\` Do You Worked In A Egyptian Store Before  

> \`-\` Sell Roles   

\` Some Important Notes \`

1- The most important thing is mutual respect between you and the crew

2- You have to settle the need yourself, it is not useful to buy and sell it

3- If You Have More Than 5 warns you'll be fired

4- If You Fired From The Team Two Times Before You Cant Join Again
 

After Finishing Type \`+wtester\`
`)
      ]})
    }
  })


  // { Apply Msg } //

    client.on('channelCreate' , async(message) => {

      if(message.parentId != applycategogffhjjhry) return;
      setTimeout(() => {  

      message.send({ content: `\`-\` ** السلام عليكم ورحمة الله وبركاته <a:red_blinking:1202748637990354954>
    \`-\` معك طاقم العمل لدي توب ليبيا شوب في تذكرة التقديم <:logo_1701:1120365671583326289>

    برجاء تحديد جنسيتك من خلال الضغط علي البوتن <a:flower:1192067915453845564>**`
    , components: [
        new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setLabel("مصري")
          .setStyle("PRIMARY")
          .setCustomId("hh"),
          new MessageButton()
          .setLabel("خليجي")
          .setStyle("PRIMARY")
          .setCustomId("xx"),
          new MessageButton()
          .setLabel("English")
          .setStyle("PRIMARY")
          .setCustomId("jj")
        )
      ]})
         }, 2000);  

    })
    client.on('interactionCreate' , async(interaction) => {
        if(interaction.customId == "hh") {
         await interaction.reply({ embeds: [
            new MessageEmbed()
            .setTitle("𝐓𝐨𝐩 𝐋𝐢𝐛𝐲𝐚 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦")
    .setDescription(`**> \`-\` اسمك ثلاثي <a:16:1120471324876353666>

    > \`-\` سنك <a:16:1120471324876353666>

    > \`-\` بلد السكن <a:16:1120471324876353666>

    > \`-\` رقم الكاش الخاص بك <a:16:1120471324876353666>

    > \`-\` رقمك الشخصي <a:16:1120471324876353666>

    > \`-\` مده الخبره في شغل الاستورات <a:16:1120471324876353666>

    > \`-\` برجاء ارسال 20 فيدباك من تلت سيرفرات مختلفه ومعروفه <a:16:1120471324876353666>

    > \`-\` اشتغلت في استورات اي قبل كده <a:16:1120471324876353666>

    > \`-\` رولات البيع الخاصه بيك <a:16:1120471324876353666>

    --------------------------------------

    \` ملحوظات مهمه للغايه \`

    1- اهم حاجه الاحترام المتبادل بينك وبين طاقم العمل جوا

    2- لازم الفيدباكات تكون في سيرفرات مشهوره

    3- اذا كان تم تصفيتك من السيرفر مرتين قبل كده ف مينفعش تقدم تاني خلاص

    4 - 150 الف كرييدت ضمان اجباري في حاله عدم وجود فيدباك
    -------------------------------------- 

    بعد ما تخلص اكتب \`+wtester\`**`)

          ]})
        }
      if(interaction.customId == "xx") {
         await interaction.reply({ embeds: [
            new MessageEmbed()
            .setTitle("𝐓𝐨𝐩 𝐋𝐢𝐛𝐲𝐚 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦")
            .setDescription(`**
    > \`-\` اسمك ثلاثي <a:16:1120471324876353666>

    > \`-\` سنك <a:16:1120471324876353666>

    > \`-\` بلدك <a:16:1120471324876353666>

    > \`-\` مده الخبره في البيع و الشراء <a:16:1120471324876353666>

    > \`-\` برجاء ارسال 20 فيدباك من تلت سيرفرات مختلفه ومعروفه او يكون معاك رتبه بايع مضمون في سيرفرات الشوب مثل لندن وهوب وغيرها <a:16:1120471324876353666>

    > \`-\` اشتغلت في استورات اي قبل كده <a:16:1120471324876353666>

    > \`-\` رولات البيع الخاصه بيك <a:16:1120471324876353666>

    -------------------------------------- 

    \` ملحوظات مهمه للغايه \`

    1- اهم حاجه الاحترام المتبادل بينك وبين طاقم العمل جوا

    2- لازم تكون بتسوي الحاجه بنفسك ماينفع تكون بتشتريها و تبيع

    3- 150 الف كرييدت ضمان اجباري في حاله عدم وجود فيدباك

    4- اذا كان تم تصفيتك من السيرفر مرتين قبل كده ف مينفعش تقدم تاني خلاص

    --------------------------------------  

    بعد ما تخلص اكتب \`+wtester\`**`)

          ]})
        }
      if(interaction.customId == "jj") {
          interaction.reply({ embeds: [
            new MessageEmbed()
            .setTitle("𝐓𝐨𝐩 𝐋𝐢𝐛𝐲𝐚 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦")
            .setDescription(`**
    > \`-\` Name <a:16:1120471324876353666>

    > \`-\` Age <a:16:1120471324876353666>

    > \`-\` Country <a:16:1120471324876353666>

    > \`-\` Experience Time In Sell And Buy <a:16:1120471324876353666>

    > \`-\` Send 20 Feedbacks From Ur Clients <a:16:1120471324876353666>

    > \`-\` Do You Worked In A Egyptian Store Before <a:16:1120471324876353666>

    > \`-\` Sell Roles <a:16:1120471324876353666>

    -------------------------------------- 

    \` Some Important Notes \`

    1- The Most Important Thing Is Mutual Respect Between You And The Crew

    2- You Have To Settle The Need Yourself, It Is Not Useful To Buy And Sell It

    3- 150k / 1$ Mandatory Warranty If You Dont Have Feedback

    4- If You Fired From The Team Two Times Before You Cant Join Again


    -------------------------------------- 

    After Finishing Type \`+wtester\`**`)
          ]})
        }
      })

  // { +Wrester } //

    client.on('messageCreate' , async(message) => {
      if(message.content === prefix+"wtester") {
        message.reply(`<@&1206353749745082368>`)
      }
    })

  // { +Embed } //

  client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'embed')) {
      if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);

      let args = message.content.split(' ').slice(1).join(' ');

      if (!args) return message.reply('** :x: Please select a message **');

      message.delete();

      let embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription(`${args}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor(color) 
        .setTimestamp()
        .setImage(line);

      message.channel.send({ embeds: [embed] });
    }
  });

  // { +Say } //

  client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix) || message.content.length <= prefix.length) return;

    const args = message.content.slice(prefix.length).trim();
    const command = args.split(/ +/)[0].toLowerCase();

    if (command === 'say') {
      const text = args.slice(command.length).trim();
      message.delete();
      message.channel.send(text);
    }
  });

  // { Transfer Line } //

    client.on('message', message => {
      if (message.content.includes('has transferred')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })

    client.on('message', message => {
      if (message.content.includes('قام بتحويل')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })

  // { Auto Tax } //

    client.on('message', message => {
      if (message.content.includes('**Your Tax Is**')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })
    client.on("messageCreate", async(message) => {
        let args = message.content
          .split(" ")
          .slice(0)
          .join(" "); if (message.author.bot) return;
          if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
      else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
      else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
      else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
      else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
    else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
        if (!message.guild) return; 
  if (message.channel.id != taxchannel) return;  
        let args2 = parseInt(args)
        let tax = Math.floor(args2 * (20) / (19) + (1))
        let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
        let tax3 = Math.floor(tax2 * (20) / (19) + (1))
        let tax4 = Math.floor(tax2 + tax3 + args2)
        if (!args2) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
        if (isNaN(args2)) return message.reply(`
  > ** Error It Must Be A Number ⚠⚠ **`);
        if (args2 < 1) return message.reply(`
  > ** Error It Must Be Larger Than 1 ⚠⚠ **`);

          let m = await message.reply({ content: `
**__${tax}__**` });
  })

  // { Support Msg } //

  client.on('channelCreate' , async(message) => {

    if(message.parentId != supportcategory) return;
    setTimeout(() => {  
    message.send({ content: `\`-\` ** السلام عليكم ورحمة الله وبركاته ** 
\`-\` **معك طاقم العمل لدي ستروچ في تذكرة الدعم **

الرجاء من اي سبورت متخصص في تذاكر الدعم ب الضغط علي هذا البتن لاستلام التذكره <
` , components: [
      new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setLabel("Claim")
        .setStyle("PRIMARY")
        .setCustomId("Claim")
      )
    ]})
       }, 2000);  /*client.on('interactionCreate' , async(interaction) => {
      if(interaction.customId == "hh") {
       await interaction.reply({ embeds: [
          new MessageEmbed()
          .setTitle("Strong Apply To Team")
          .setDescription( */
  })
  client.on('interactionCreate' , async(interaction) => {
      if(interaction.customId == "Claim") {
    if(!interaction.member.roles.cache.has(support)) return;
    if(!interaction.channel.name.startsWith("ticket")) return;
          db.add(`supportticketclaims_${interaction.guild.id}_${interaction.user.id}` , 1)

          let levelll = db.get(`support_${interaction.user.id}`)
      if(levelll == null) {
        db.set(`support_${interaction.user.id}` , {
          poi : 0,
          id : interaction.user.id
        })
      }
        let levell = db.get(`support_${interaction.user.id}`)
        let level = levell.poi;

    await db.set(`support_${interaction.user.id}` , {
          poi : Math.floor(level + 3),
          id : interaction.user.id
        })
         interaction.channel.setName(`${interaction.member.nickname}`)
       await interaction.reply({ embeds: [
          new MessageEmbed()
          .setDescription(`> \`-\`** ✅| Done Claimed Ticket ${interaction.member.nickname} **`)
        ]})
      }
  })

  // { +Tax } //

    client.on("messageCreate", async message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;
     const args = message.content.slice(prefix.length).trim().split(/ +/);
     const command = args.shift().toLowerCase();
     if(command === "tax") {
      let args1 = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args1.endsWith("m")) args1 =  args1.replace(/m/gi, "") * 1000000;
    else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
    else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
    else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
    else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
    else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args1)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
    > ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
    > ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
      .addComponents(
                new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator Tax")
        .setEmoji("<a:zz:1179550774322274344>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
    );
        let m = await message.reply({ content: `
**__${tax}__**` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
**__${tax4}__**`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
** __${tax}__**`, components: [row] })

                  i.deferUpdate()
          } else {
            return;
          }
       });

     }

   // { +Come } //

   if(command === "come") {
    const user = message.mentions.members.first()
    if (!user) return message.reply(`**❎ | I Can't Find This User!**`)
      if (user.id == message.author.id) return message.reply(`**❎ | You Can't Send To Yourself!**`)
      if (user.user.bot) return message.reply(`**❎ | You Can't Send To Bot!**`)
            let inv = await message.channel.createInvite(message.channel)
      user.send(`
**Hey Yo ${user}**

**Could You Come Over Here Real Quick : <#${message.channel.id}> **

**${args}**

**Thank You** `)
   .then(() => {
     message.reply({
      embeds : [
        new MessageEmbed()
        .setDescription(`** <a:loading:1225775604016873530> | Please Wait ....**`)
        .setColor(color)  
      ]
    }).then((t) => {
      setTimeout(() => t.edit({
        embeds : [
          new MessageEmbed()
        .setDescription(`**✅ | Done Send To ${user}**`)
          .setColor(color) 
          ]
      }),1800)
  })   
  }).catch((y) => {
                 message.reply({
      embeds : [
        new MessageEmbed()
        .setDescription(`> ** <a:loading:1225775604016873530> | Please Wait ....**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
      ]
    }).then((t) => {
      setTimeout(() => t.edit({
        embeds : [
          new MessageEmbed()
        .setDescription(`❎| **Error == __${y.message}__**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
        ]
      }),1800)
                 })
  })
   }
  })

  // { Offers } //

  client.on('messageCreate', async message => {
    if (message.content.startsWith("تشففففففففففير") && !message.author.bot) {
      let args = message.content.split(" ").slice(1).join(" ");
      let content = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("شوب", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن").replaceAll("نتفلكس", "نtفلكس");


      message.author.send(content);
      message.reply("**تم ارسال الرساله بي التشفير في الخاص **");
    }
  });

  // { Re } //

  client.on("messageCreate", async msg => {
  if(msg.content.toLowerCase() === "re"){
    if(!msg.channel.name.startsWith("ticket-")) return; 
    let user = msg.guild.members.cache.get(msg.author.id).displayName || msg.author.username;
    msg.channel.setName(`by-${user}`)
  }
})
  

  // { +Font } //

   client.on("messageCreate", message => {
    if (message.content.startsWith('+font')) {
      let words = message.content.split(" ").slice(1).join(" ");
      let words2 = words.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎")
      if (!words) return message.channel.send('> ** Please Write a Word ❌ !**')
      message.channel.send(`${words2}`)
    }
  });

  // { +Io | خمول } //

  client.on("message", message => {
    if (message.content == ("io") || message.content === "خمول") {

  message.channel.send(`يرجي العلم أنه في حاله الخمول في التذكره لمده عشر دقايق سوف يتم غلق التذكره`)
      message.delete()

    }
  })

  // { +Tag } //

  client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'tag') {
      let mentionedUser = await message.mentions.members.first();
      let name = args.slice(1).join(' ');

      if (!mentionedUser) {
        return await message.channel.send('**Please mention a user.**');
      }

      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return await message.reply("**You don’t have permission to use this command.**");
      }

      let font = name.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎");

      let newNickname = `𝐒𝐭𝐫𝐨𝐧𝐠𝐒丶
     ${font}`;

      await mentionedUser.setNickname(newNickname).then(async () => {
        await message.channel.send(`> <a:done:1225704338391826525> **Done Adding Server Tag To ${mentionedUser}**`);
      }).catch(err => message.channel.send(`**I don't have Permission to do that**`));
    }
  });

  // { +Team } //

  const owner = ["148521446468091904","1140451333103702068","",""]
  const wait = require("node:timers/promises").setTimeout;
  client.on('messageCreate', async message => {
    let msg = message, m = message
    if (m.author.bot) return;
    if (message.content !== prefix + "team") return
    if (m.member.permissions.has("ADMINISTRATOR")) {
      if (message.channel.id !== "1225465371612676127") {
        let rep = await message.reply("**استخدم الامر في روم التيم**")
        await wait(2000);
        rep.delete();
        message.delete();
        return;
      }
      const webhook = new WebhookClient({ url: "https://discord.com/api/webhooks/1215398319795212338/j8R7P7_0xPmWrpdKkznjMMTg9AyZQPS4K0MGtHpnZQFCpoxejf8No_OD2y9eyDZ07vO9" });
      let team = m.guild.roles.cache.get("1225465164824969323")
      let count = 0;
      team.members.forEach((member) => {
        message.channel.sendTyping();
        let mem = m.guild.members.cache.get(member.id);
        webhook.send({
          content: `<@${mem.id}>`,
          username: mem.user.username,
          avatarURL: mem.user.avatarURL(),
        })
        message.channel.send(line)
        count++;
      })
      message.channel.send("**Done , Team count is :** " + count)
    }
  })

  // { +Tbc } //

    client.on('message', async message => {
      if (message.content.startsWith(prefix + 'tbc')) {
        
      if (!owner.includes(message.author.id)) {
          return message.channel.send(`You Don't Have Owner & Ship`);
      }
        const args = message.content
          .split(" ")
          .slice(1)
          .join(" ");
        const role = message.mentions.roles.first();

        if (!role) {
          return message.reply('**Please Mention a Role**');
        }
        if (!args) {
          return message.reply('**Please Enter Your Message**');
        }

        let sentCount = 0;

        let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

        members.forEach((member, index) => {
          setTimeout(() => {
            member.send({ content: args })
              .then(() => {
                console.log(`Sent to ${member.user.username}`);
                message.channel.send(`**Sent to <@${member.user.id}> **`);
              })
              .catch(err => {
                console.error(`**Couldn't send to ${member.user.tag} ❌**`);
                message.channel.send(`**Couldn't send to <@${member.user.id}>**`);
              })
              .finally(() => {
                sentCount++;
                if (index === members.size - 1) {
                  // Send a final message after sending to all members
                  message.channel.send(`**Done sending your message to ${sentCount} members**`);
                }
              });
          }, index * 5000); // Send to each member with a delay of 5 seconds
        });
      }
    });


  // { Auto Offers } //

   client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.channel.id == "1196841544397897810"){
      const anchannel = client.channels.cache.get("1206354256370864138")
      let args = message.content.split(' ').slice(0).join(' ')

  let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

      let embed = new MessageEmbed()
      .setColor(color) 

      let attach = message.attachments.first();

  if (attach) {
     embed.setImage(attach.proxyURL)     
  } 
      anchannel.send(`**> __${test}__
<a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021><a:Line:1196842571939451021>

> • <a:right:1192067903453933639> __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}> <a:red_blinking:1202748637990354954>  

> •  <a:right:1192067903453933639> __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ : <#1206354259575054378>   <a:red_blinking:1202748637990354954>  

> • <a:right:1192067903453933639> __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1179867908772466729>   <a:red_blinking:1202748637990354954>**`).then(mes => setTimeout(() => {
          mes.delete()
        }, 43200000))

      message.reply("**<:logo_1701:1120365671583326289> | 𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 <a:red_blinking:1202748637990354954>**")
       anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
          pho.delete()
        }, 43200000))  
      anchannel.send(lineof).then(lin => setTimeout(() => {
          lin.delete()
        }, 43200000)) 

    }
  })

  // { +Clear } //

  client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + 'clear')
  ) {
      const args = message.content.split(' ')
      let amount = Number(args[1]) || 100

      const permission = message.member.permissions.has("MANAGE_MESSAGES");
      const me = message.guild.me.permissions.has("MANAGE_MESSAGES");
      if(!permission) return message.reply(":x: **You don't have permission to use this command**")
      if(!me) return message.reply("**:rolling_eyes: - I couldn't clear this channel. Please check my permissions.**")

      args[1] = args[1] ? parseInt(args[1]) : 100;        
      if(isNaN(args[1])) return message.reply({ content: `🙄 **Please provide valid number**` }).catch((err) => {
        console.log(err.message)
      });

      if (amount > 100) return message.reply(":rolling_eyes: **You can't delete more than __100__ messages**`").cache((err) => {
        console.log(err.message)
      });

      if (amount < 1) return message.reply(':rolling_eyes: **You need to delete at least __1__ messages**').catch((err) => {
        console.log(err.message)
      });

      message.delete().catch((err) => {
        console.log(err.message)
      });

      let messages = await message.channel.messages.fetch({ limit: amount  });
      messages = messages.filter(m => Date.now() - (new Date(m.createdTimestamp)).getTime() <= (14 * 24 * 60 * 60000));

      message.channel.bulkDelete(messages).then(() => {
        message.channel.send({content :`\`\`\`js
  ${messages.size} messages have been deleted.\`\`\``}).then((msg) => {
          setTimeout(() => {
            msg.delete().catch((err) => {
              console.log(err.message)
            })
          }, 5000);
        }).catch((err) => {
           console.log(err.message)
           })
              }).catch(err => console.log(err.message));
            } 
          });






  // { +Wf } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `${prefix}wf`) {
      EgyptTeam.delete()
      EgyptTeam.channel.send(`\`\`\`
  \`Mention : 
  Number : 
  Photo Role : \`
  \`\`\``)
    }
  })

  // { +At } //

  

  // { $close } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `$close`) {
      
      EgyptTeam.channel.send(`$transcript`)
    }
  })

  // { $close } //

  

  // { $delete } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `$delete`) {
      
      EgyptTeam.channel.send(`$transcript`)
    }
  })

  // { تاج } //

  client.on('messageCreate', message => {
    if (message.content.startsWith('tag')) {
      return message.reply(`𝐒𝐭𝐫𝐨𝐧𝐠𝐒丶`)
    }
  });

  // { لوجو } //

  client.on('messageCreate', message => {
    if (message.content.startsWith('لوznsnnsbsbsbdbceجو')) {
      return message.reply(`https://cdn.discordapp.com/attachments/1211388872781602927/1213135498516627497/92c6e51a7eb6f746.png?ex=65f45f79&is=65e1ea79&hm=65ff59341442273c6e74a4ba3b364366885f382e58341eb16ca93439e93d65e8&`)
    }
  });

  // { Are you sure you would like to close this ticket? } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `Are you sure you would like to close this ticket?`) {
      
      EgyptTeam.channel.send(`$transcript`)
    }
  })

  // { تحويل+ } //

  
  // { logo } //

  client.on('messageCreate', message => {
    if (message.content.startsWith('ldddnnddbbogo')) {
      return message.reply(`https://cdn.discordapp.com/attachmenzdbdbdbbdts/1211388872781602927/1213135498516627497/92c6e51a7eb6f746.png?ex=65f45f79&is=65e1ea79&hm=65ff59341442273c6e74a4ba3b364366885f382e58341eb16ca93439e93d65e8&`)
    }
  });

  // { Auto Line } //

  client.on('messageCreate' , async(message) => {
    if(message.author.bot) return;
    let auto = ["1225600278712156240","1225465430508830760","1225465407431901265","1211388992193560587","1206354246304268349","1206354256370864138"]
    if(auto.includes(message.channel.id)) {
      message.channel.send({embeds:[
        new MessageEmbed()
        .setColor(color)
        .setImage(line)
      ]})
    }
  })

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '+delete-closed') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('closed-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Closed Tickets**');
  }
});

// ⚚・─━━━❲❲ Delete Normal Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '+delete-tickets') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('ticket-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Normal Tickets**');
  }
});

// ⚚・─━━━❲❲ Delete By User Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '+bt') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('by-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All By User Tickets**');
  }
});
// ⚚・─━━━❲❲ Delete Need Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '+nt') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('need-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Need Tickets**');
  }
});

// ⚚・─━━━❲❲ Delete Sell Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '+st') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('sell-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Sell Tickets**');
  }
});


client.on('channelCreate', async (message) => {
  if (message.parentId != applycategory) return;
  setTimeout(() => {
    message.send({
      components: [
        new MessageActionRow()
          .addComponents([
            new MessageButton()
              .setLabel("Ù…ØµØ±ÙŠ")
              .setStyle("PRIMARY")
              .setCustomId("hh"),
            new MessageButton()
              .setLabel("English")
              .setStyle("PRIMARY")
              .setCustomId("jj"),
          ]),
      ],
    });
  }, 2000);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'hh') {
    // ØªÙ… Ø§Ø®ØªÙŠØ§Ø± "Ù…ØµØ±ÙŠ"
    interaction.reply({
      content: 'ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø¨Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©:',
      components: [],
    });

    const user = interaction.user;
    var msg1, msg2, msg3, msg4, msg5;

    await interaction.channel.send(`Ø§Ø³Ù…ÙƒØŸ`).then(async (message) => {
      await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
          msg1 = collected.first().content;
          collected.first().delete();
          return message.edit(`Ø¹Ù…Ø±ÙƒØŸ`);
        })
        .then(async (message) => {
          await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
            .then(collected => {
              msg2 = collected.first().content;
              collected.first().delete();
              return message.edit(`Ù…ØªÙ‰ Ø¯Ø®Ù„Øª Ø§Ù„Ø¯Ø³ÙƒÙˆØ±Ø¯ØŸ`);
            })
            .then(async (message) => {
              await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  msg3 = collected.first().content;
                  collected.first().delete();
                  return message.edit(`ÙƒÙ… Ø³Ø§Ø¹Ø© Ø¨ØªØªÙØ§Ø¹Ù„ Ø¨Ù„ÙŠÙˆÙ…ØŸ`);
                })
                .then(async (message) => {
                  await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
                    .then(collected => {
                      msg4 = collected.first().content;
                      collected.first().delete();
                      return message.edit(`Ø¨ Ø§ÙŠØ´ Ø±Ø§Ø­ ØªÙÙŠØ¯Ù†Ø§ØŸ`);
                    })
                    .then(async (message) => {
                      await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
                        .then(collected => {
                          msg5 = collected.first().content;
                          collected.first().delete();
                          var em = new Discord.MessageEmbed()
                            .setDescription(`**Name:** ${msg1}\n**Age:** ${msg2}\n**Discord Join Date:** ${msg3}\n**Interaction Duration:** ${msg4}\n**Benefit:** ${msg5}`)
                            .setThumbnail(user.avatarURL({ dynamic: true }))
                            .setFooter(`Apply By: ${user.id}`, interaction.guild.iconURL({ dynamic: true }))
                            .setAuthor(user.tag, user.avatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setColor('#0075ff')
                          interaction.channel.send({ content: `<@${user.id}>`, embeds: [em] });
                        });
                    });
                });
            });
        });
    });
  } else if (interaction.customId === 'jj') {
    // ØªÙ… Ø§Ø®ØªÙŠØ§Ø± "English"
    interaction.reply({
      content: 'Please answer the questions in English:',
      components: [],
    });

    const user = interaction.user;
    var msg1, msg2, msg3, msg4, msg5;

    await interaction.channel.send(`What's your name?`).then(async (message) => {
      await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
          msg1 = collected.first().content;
          collected.first().delete();
          return message.edit(`How old are you?`);
        })
        .then(async (message) => {
          await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
            .then(collected => {
              msg2 = collected.first().content;
              collected.first().delete();
              return message.edit(`When did you join Discord?`);
            })
            .then(async (message) => {
              await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  msg3 = collected.first().content;
                  collected.first().delete();
                  return message.edit(`How many hours do you interact per day?`);
                })
                .then(async (message) => {
                  await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
                    .then(collected => {
                      msg4 = collected.first().content;
                      collected.first().delete();
                      return message.edit(`How will you benefit us?`);
                    })
                    .then(async (message) => {
                      await message.channel.awaitMessages({ filter: m => m.author.id === user.id, max: 1, time: 90000, errors: ['time'] })
                        .then(collected => {
                          msg5 = collected.first().content;
                          collected.first().delete();
                          var em = new Discord.MessageEmbed()
                            .setDescription(`**Name:** ${msg1}\n**Age:** ${msg2}\n**Discord Join Date:** ${msg3}\n**Interaction Duration:** ${msg4}\n**Benefit:** ${msg5}`)
                            .setThumbnail(user.avatarURL({ dynamic: true }))
                            .setFooter(`Apply By: ${user.id}`, interaction.guild.iconURL({ dynamic: true }))
                            .setAuthor(user.tag, user.avatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setColor('#0075ff')
                          interaction.channel.send({ content: `<@${user.id}>`, embeds: [em] });
                        });
                    });
                });
            });
        });
    });
  }
});

client.login(process.env.tok)