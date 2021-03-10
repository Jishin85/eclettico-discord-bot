require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const prefix = process.env.PREFIX;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  //const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const regex = new RegExp('"[^"]+"|[\\S]+', 'g');
  const args = [];
  msg.content.slice(prefix.length).trim().match(regex).forEach(element => {
	  if (!element) return;
	  return args.push(element.replace(/"/g, ''));
  });

  const commandName = args.shift().toLowerCase();
  console.info(`Called command: ${commandName}`);
  if(args.length > 0) console.info(args);

  if (!bot.commands.has(commandName)) return;

  const command = bot.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.args && !args.length) {
	  return msg.reply(command.description);
  }

  try {
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
