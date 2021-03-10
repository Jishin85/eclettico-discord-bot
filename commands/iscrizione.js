module.exports = {
  name: 'iscrizione',
  description: 'Iscriviti utilizzando !iscrizione \"<nome>\" <attacco> <difesa> <velocità> <si/no>',
  args: true,
  execute(msg, args) {
    if (args.length != 5) {
	return msg.reply('Mancano dei parametri o il nome non è fra virgolette, ricontrolla che il comando sia scritto correttamente.'
		+ '\nUtilizzo : !iscrizione \"<nome>\" <attacco> <difesa> <velocità> <si/no>');
    }
    if (args[0].length < 3){
	return msg.reply('Il nome deve essere più lungo di 3 caratteri');
    }
    if (isNaN(args[1]) && isNaN(args[2]) && isNaN(args[3])){
	return msg.reply('I valori di attacco, difesa e velocità devono essere dei numeri');
    }
    if (args[4] != 'si' && args[4] != 'no'){
	return msg.reply('Conferma se vuoi partecipare al colosseo (PvP) scrivendo solamente si o no');
    }
    if (parseInt(args[1]) + parseInt(args[2]) + parseInt(args[3]) != 6){
	return msg.reply('La somma dei valori di attacco, difesa e velocità deve risultare pari a 6 ');
    }
    if (args[1] < 1 || args[2] < 1 || args[3] < 1){
	return msg.reply('Attacco, difesa e velocità devono essere sempre avere come minimo 1 punto');
    }	      
    msg.reply('Iscritto!');
  },
};
