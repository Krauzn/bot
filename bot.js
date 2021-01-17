const Discord = require("discord.js") 
const client = new Discord.Client() 
const config = require("./config.json") 
const Ytdl = require('ytdl-core')



client.on("ready", () => {
  console.log(`Bot foi iniciado, QUACK!!!.`); 
  let activities = [
        `Vaquinha pra comprar um trabequin!!! chama ;v#9999}`,
        `AS 00:00 O HORARIO OFICIAL DO OLEO DE MACACO}`,
        `Vou Apresentar A Akame Pra minha mãe`,
        `EM BUSCA DO SHEIP PERFEITO`,

  ],
  i = 0;
  setInterval(() => client.user.setActivity(`{${activities[i++ %
  activities.length]}`, {
        type: "PLAYING"
  }), 8000); //WATCHING, LISTENING, PLAYING, STREAMING
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;
    
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("ta mile?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
  
});

client.login(config.token);

client.on('message', message => {
    let responseObject = {
        "oi" : "ola",
      "gado" : "Morte aos gados",
    "Nightcore" : "Já passei a roula",
    "Já passei a roula" : "Aql safada",
    "mp" : "comi sua tia",
    "gostosa" : "sua tia aquela gostosa",
    "Rafael" : "Aquele Gadão?",
    "fds" : "Yeah, Fouda-se",
    "delicia" : "eu sei que sou não precisa falar",
    "vsfd" : "ain ta bravinha",
    "biscoito" : "bolacha",
    "bolacha" : "biscoito e meu pau",
    "loli" : "*Oppai*",
    "yamete" : "KUDASAIIII",
    "pato?" : "https://cdn.discordapp.com/attachments/711310741931819022/715819578294403103/8d5068b41063cf97dbf961894e4ac2868ba6465ab8f7504449a4a8b8e1a6de44_1.mp4",
    "trava" : "vou travar seu zap",
    "link" : "discord.gg/p3KVDcU",
    "twitch" : "https://www.twitch.tv/krauzl",
    "invite" : "discordapp.com/oauth2/authorize?=&client_id=731982929257037854&scope=bot&permissions=8",
    "nude" : "Gostou da minha pika que eu te mandei no privado?",
    "viado" : "seu pai",
    "kkkk" : "ta rindo de que palhaço?",
    "corre kaue" : "https://media.discordapp.net/attachments/558339623441661993/652626509877739550/unknown.png?width=666&height=501",
    "calma rafael" : "https://cdn.discordapp.com/attachments/558339623441661993/745049506751447210/VID-20200817-WA0024.mp4",
    "traveco" : "https://cdn.discordapp.com/attachments/703096439286530068/743265676579438662/video0.mp4",
    "tetao" : "https://cdn.discordapp.com/attachments/558339623441661993/743807346500960256/558188763380_status_49eb0bd161384ef7b22e4c33a71be6b7.jpg",
    "tanque" : "https://cdn.discordapp.com/attachments/711643717341282324/743484837972803614/Arthur_saia_do_tanque.mp4",
    "duque" : "https://ifunny.co/fun/00sn1G9w6?s=u",
     "Duque" : "https://ifunny.co/fun/00sn1G9w6?s=u",
    "Bom dia" : "BOM DIA",
    "bom dia" : "BOM DIA",
    "cartão" : "https://cdn.discordapp.com/attachments/745083354948436128/756292598116646993/images.png",
    "preto" : "https://cdn.discordapp.com/attachments/745083354948436128/756292731713617930/images.png",
    "Preto" : "https://cdn.discordapp.com/attachments/745083354948436128/756292731713617930/images.png",
    "Boa noite" : "https://i.pinimg.com/originals/64/d1/c2/64d1c2aaf87be87ca21d9869e6dfb3f6.jpg",
    "boa noite" : "https://i.pinimg.com/originals/64/d1/c2/64d1c2aaf87be87ca21d9869e6dfb3f6.jpg",
    "carente" : "https://cdn.discordapp.com/attachments/558339623441661993/756203975237435533/WhatsApp_Video_2020-09-17_at_14.21.53.mp4",
    "babaca" : "o dylan? babaca d+",
    "?" : '"?" oq loko?',
    "boa tarde" : "BOM DIA",
    "DOUBLE KILL" : "https://cdn.discordapp.com/attachments/745083354948436128/759868786714214450/unknown.png",
    "Boa tarde" : "BOM DIA",
    "oia o dragao" : "AAAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    "chega" : "fraco",
    "não" : "sim",
    "pai ta on" : "pai ta desonline",
    "top" : "top sou eu, ela no maximo e bonitinha",
    "apetitosa" : "se liga no pé preto da novinha",
    "se liga no pé preto da novinha" : "https://cdn.discordapp.com/attachments/745083354948436128/756293327414100045/images.png",
      "isa" : "MENSAGEM NÃO DETECTADA",
    "maldade" : "maldade e me deixar de pau duro e dps não deixar eu te comer... isso sim e maldade",
    "me conta uma historia" : "era uma vez 4 patinhos que foram para tras de uma montanha...",
    "e oque aconteceu?" : "eles comeram sua tia",
    "to doente" : "ih eu que matei o corona na bicada",
    "krauz?" : "krauz better knight <3",
    "meia noite" : "o horário nacional do óleo de macaco",
    "meu pato" : "meu pato o krl",
    "bora jogar minecraft" : "Mata galinha!!!",
    "block" : "apresenta a clyde-chann, pra essa merda ",
    "lol" : "league of legends?",
    "league of legends?" : "jogo de viado",
    "jogo de viado" : "vai jogar pedra em mendigo que e melhor...",
    "pato violento" : "To com o trabuquin na mão e um parafal no prato!!!",
    "ta rindo de que palhaço?" : "Cola na favela pra tu ver cê não e bicada parça",
    "oque e um parafal" : "uma pamonha",
    "gabriel" : "gado",
    "raquel" : "Hm, O cara bate uma pra porno guiado kkkkkkkkkkk",
    "Raquel" : "punhetinha guiada kkkkk",
    "%h" : '%j" pra entrar na call,  "%p" (dps o link da musica) pra tocar a musica, "%l" pra sair.',
    "passim kaue" : "https://br.ifunny.co/video/8hUOpEvv7",
    "nofap" : "https://cdn.discordapp.com/attachments/743491800274173965/750746436701782066/unknown.png",
    "yami" : "Meu vovô",
    "Pato domina" : "https://cdn.discordapp.com/attachments/745083354948436128/756310507845189722/tFntGugbxPwEIh1a.mp4",
    "pato domina" : "https://cdn.discordapp.com/attachments/745083354948436128/756310507845189722/tFntGugbxPwEIh1a.mp4",
    "Yami" : "Meu vovô",
    "feijão" : "https://cdn.discordapp.com/attachments/745083354948436128/756309924442538044/o4YXn37izqhQ2lpz.mp4",
    "Kaue" : "Maluco e esquizofrênico",
    "Pedro": "Channel não e Chennel",
    'Ban' : 'Da "Ban" na minha pika porque usaram muito "ctrl+v" pra fazer ela',
    'ban' : 'Da "Ban" na minha pika porque usaram muito "ctrl+v" pra fazer ela',
    "cofap":"sa merda não existe parça...",
    "Marcelo" : "Hmm, Macaco Preto",
    "Alessandro" : "O cara é um Knuckles modificado",
    "oi" : "https://cdn.discordapp.com/attachments/745083354948436128/756290812626599976/images.png",
    "Bom dia familia" : "Hm",
    "pervertido" : "https://br.ifunny.co/fun/bLsjyqyy7?s=cl",
    "bom dia familia" : "Hm",
    "Vetrox" : "Conhecido como Perigoso",
    "Pokemon" : "https://cdn.discordapp.com/attachments/716502009930449006/731283333925044286/VID-20190729-WA0249.mp4",
    "vetrox" : "Comedor de veia",
    "aleatorio" : "https://media.discordapp.net/attachments/657332439101997108/758420599776215060/monkey4.gif",
    "https://media.discordapp.net/attachments/657332439101997108/758420599776215060/monkey4.gif" : "Hmm, Macaco dirigindo um barco",
    "https://br.ifunny.co/video/8hUOpEvv7" : "Kaue ensinando  os fundamentos do passinho (SÓ MANDELÃO)",


    };
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
});

        
client.on('message', (msg) => {
    // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
    if (msg.content === 'quack' && msg.member.voice.channel && !msg.author.bot){
          msg.member.voice.channel.join().then(connection => {
                // onde era "playFile" virou "play" apenas.
                const dispatcher = connection.play('Sounds/quack.mp3');
               dispatcher.setVolume(0.5);
              
          });
    }
});


client.on('message', (msg) => {
      if (msg.content === 'moderador' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  const dispatcher = connection.play('Sounds/moderador.mp3');                          
            });
      }
  });

client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'Bandolero' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Bandolero.mp3');
                  // o evento 'end' se tornou 'finish'.
                
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'pervertido' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/pervertido.mp3');
                  // o evento 'end' se tornou 'finish'.
            });
      }
  });


client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'Ahoy' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/ahoy.mp3');
                  dispatcher.setVolume(2);
                  // o evento 'end' se tornou 'finish'.
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'Onii-chan' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Onii-chan.mp3');
                  // o evento 'end' se tornou 'finish'.
                  dispatcher.setVolume(2);
            });
      }
  });


  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'salve firma' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/salvepra_firma.mp3');
                  // o evento 'end' se tornou 'finish'.
                  dispatcher.setVolume(2);
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'pra dar sorte' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/pradarsorte.mp3');
                  // o evento 'end' se tornou 'finish'.
                  dispatcher.setVolume(2);
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'cavuda' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/cavucada.mp3');
                  // o evento 'end' se tornou 'finish'.
                  dispatcher.setVolume(2);
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'bota vai' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/bota.mp3');
                  dispatcher.setVolume(2);
                 
            });
      }
  });


  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'Nyaa' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Nyaa.mp3');
                  // o evento 'end' se tornou 'finish'.
                
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'vizinha' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/vizinha.mp3');
                    dispatcher.setVolume(2);
                 
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'catucadão' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/catuca.mp3');
                  // o evento 'end' se tornou 'finish'.
                 
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'senpai' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/senpai.mp3');
                  // o evento 'end' se tornou 'finish'.
                 
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'tuturu' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/tuturu.mp3');
                  // o evento 'end' se tornou 'finish'.
                
            });
      }
  });
  
 
  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'mya' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/mya.mp3');
                  // o evento 'end' se tornou 'finish'.
                
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'uhuu' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/mainuhu.mp3');
                  // o evento 'end' se tornou 'finish'.
                
            });
      }
  });

 

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'Nii' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/nii.mp3');
                  // o evento 'end' se tornou 'finish'.
              
            });
      }
  });

client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'yametee' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/yametee.mp3');
                  // o evento 'end' se tornou 'finish'.
                 
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'poi' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Poi.mp3');
                  // o evento 'end' se tornou 'finish'.
                  dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
            
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'nepu' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/nepu.mp3');
                  // o evento 'end' se tornou 'finish'.
              
            });
      }
  });



  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'aya' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/aya.mp3');
                  // o evento 'end' se tornou 'finish'.
              
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'gemedin' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/gemidin.mp3');
                  // o evento 'end' se tornou 'finish'.
              
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'hentai' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Hentai.mp3');
                  // o evento 'end' se tornou 'finish'.
              
            });
      }
  });

 
  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'everybodys' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Everybodys.mp3');
                  // o evento 'end' se tornou 'finish'.
           
            });
      }
  });

  client.on('message', (msg) => {
      // onde era "msg.member.voiceChannel" virou "msg.member.voice.channel".
      if (msg.content === 'Kyaa' && msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
                  // onde era "playFile" virou "play" apenas.
                  const dispatcher = connection.play('Sounds/Kyaa.mp3');
                  // o evento 'end' se tornou 'finish'.
                  dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
            });
      }
  });

client.login(config.token);
    

let connection;

client.on('message', async (msg) => {

      // !j = Bot se junta ao canal de voz
      if (msg.content === '%j'){
            if (msg.member.voice.channel){ 

            
                  connection = await msg.member.voice.channel.join();

                  estouPronto = true;
            } else {
                  msg.channel.send('Entra na poha do Canal de Voz Primeiro Diabo.');
            }
      }

      // !l = Bot sai do canal de voz
      else if (msg.content === '%l'){
            if (msg.member.voice.channel){ 
                  msg.member.voice.channel.leave();
                  estouPronto = false;
            } else {
                  msg.channel.send('Entra na poha do Canal de Voz Primeiro Diabo.');
            }
      }

      // !play [link] = Bot toca músicas
      else if (msg.content.startsWith('%p')){
            if (estouPronto){
                  let oQueTocar = msg.content.replace('%p', '');
                  if (Ytdl.validateURL(oQueTocar)){
                        // Usamos a referência ao join(); aqui, para então dar play em algo.
                        connection.play(Ytdl(oQueTocar)); // e agora temos play() no lugar de playStream()
                  } else {
                        msg.channel.send('Vai toma no seu cu, Manda Um link valido poha!')
                  }
            }
      }
});

client.on('message', async message => {
      if (message.content.startsWith('%Roleta')){
          numeroaleatorio = Math.floor(Math.random() * (6 - 1) + 1);
          if (numeroaleatorio == 2){
              message.reply("Morreu! Seu Preto");
          }
          else{
              message.reply("Sobreviveu");
          }
      }

  }
)


client.login(config.token);
