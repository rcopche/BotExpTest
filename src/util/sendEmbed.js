const {MessageEmbed} = require('discord.js')

module.exports = {

    sendEmbed(message){

        //let emoji = member.guild.emojis.cache.find(emoji => emoji.name === '');
        var respInicial = "Olá, sou uma plataforma que ajuda você testar software. " +
			  "Posso te dar dicas de teste e também falar sobre estratégias e critérios para testar software. "+
              "Essas sugestões, poderão gerar oportunidades para que você encontre "+
			  "falhas em aplicativos móveis durante as etapas de teste exploratório.\n"+
              "Toda vez que precisar interagir comigo, você deve digitar o prefixo **?** "+ 
              "antes do texto, para que eu possa tentar ajudá-lo de alguma forma. \n"+
              "Para entender como você deve proceder no Teste Exploratório digite **?manual**. \n\n"+              
              "**Vamos tentar?**\n\n"
              //"Caso queira criar um canal digite **?novocanal nomedocanal**.\n"+
              //"Ao finalizar sua sessão de teste gostariamos que responde-se algumas questões. Para isso digite **?form**.\n\n"+
			//   "**Para sugestões** é só digitar, **?Bluetooth, ?Conexão de rede, ?Swipe, ?Geral, ?Redes sociais, ?Sdcard, ?Gps**.\n" +
            //   "Caso prefira varias sugestões sobre algum dos temas acima use os identificadores:" +
			//   "\n **?1** - Para Conexão de redes;"+ 
			//   "\n **?2** - Para Testes em geral;"+
			//   "\n **?3** - Para Geolocalização - GPS;"+
			//   "\n **?4** - Para Bluetooth;"+
			//   "\n **?5** - Para Scroll;"+
			//   "\n **?6** - Para Câmera;"+

            //   "\n\n **Para conhecer estratégias e critérios de teste de software escolha:**" +
            //   "\n    **- Estratégias** "+
            //   "\n **?7** - Exploratory Smoke Testing"+
            //   "\n **?8** - Garbage Collectors Tour "+
            //   "\n **?9** - User Interface Exploration"+
            //   "\n **?10** - Back Alley Tour"+
            //   "\n **?11** - Bad Neighbourhood Tour" +
            //   "\n **?12** - Tour Bus Strategy"+
            //   "\n **?13** - Crime Spree Tour "+
            //   "\n    **- Critérios** "+
            //   "\n **?14** - Particionamento de Classe de Equivalência"+
            //   "\n **?15** - Análise de Valor Limite"

              

			
        const exampleEmbed = new MessageEmbed()
        .setColor('#800080')
        .setTitle('Bem vindo ao chabot de auxílio ao Teste Exploratório.')
        .setURL('https://drive.google.com/file/d/1LZTyA1zXkz8Ygd-3zO0eOIFKh7jTDQzq/view?usp=sharing')
        .setAuthor('BotExpTest', 'https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif', 'https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif')
        .setDescription(respInicial)
        .setThumbnail('https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif')
        // .addFields(
        //     { name: 'Regular field title', value: 'Some value here' },
        //     { name: '\u200B', value: 'teste' },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        //     { name: 'Inline field title', value: 'Some value here', inline: true },
        // )
        // .addField('Inline field title', 'Some value here', true)
        // .setImage('https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif')
        .setTimestamp()
        //.setFooter('Podemos começar?', 'https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif');
    
        message.channel.send({ embeds: [exampleEmbed] });
    }
    
}