module.exports = (message) => {

    let str = message.content.replace('?','')
    const array = str.split(' ')
    //console.log(`${array[0]} + ${array[1]}`, str.substring(0,3))
    if (str.substring(0,4) === 'novo') { //If the message contained the command
        message.guild.channels.create(array[1], { //Create a channel
            type: 'text', //Make sure the channel is a text channel
            permissionOverwrites: [{ //Set permission overwrites
                id: message.guild.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            }]
        });
        
        message.channel.send(`O canal ${array[1]} foi criado.`); //Let the user know that the channel was created
        
        message
    }
}