const dotenv = require('dotenv').config()


const {Client, IntentsBitField} = require('discord.js')
const client= new Client({
    intents: [
       IntentsBitField.Flags.Guilds,
       IntentsBitField.Flags.GuildMessages,
       IntentsBitField.Flags.MessageContent,
       
    ]
})

client.on('ready', ()=> {
    console.log(`The bot is Running as ${client.user.tag}`)
})

client.on('messageCreate', (message)=> {
    if(message.content === 'hey'){
        message.reply("Hello")
    }
})




client.login(process.env.TOKEN)