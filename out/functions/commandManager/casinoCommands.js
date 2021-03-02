"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = __importStar(require("discord.js"));
class CasinoCommand {
    constructor(accountManager) {
        this.accountManager = accountManager;
    }
    doubleOrNothing(message, value) {
        const user = this.accountManager.findAccount(message.author.id);
        const messageBot = new Discord.MessageEmbed()
            .setColor('#F7960A')
            .setTitle('Double OR Nothing')
            .setThumbnail('https://i.ibb.co/TgzRW2y/IMG-20201124-121326.jpg');
        //.addField('Inline field title', 'Some value here', true)
        if (user) {
            if (user.cash >= value) {
                const reply = new Discord.MessageEmbed()
                    .setColor('#006300')
                    .setTitle('Double or NOTHING')
                    .setTimestamp();
                if (reply) {
                    messageBot.addField("WIN", "Nice one ! You doubled your bet ! and got " + value + "$. You have " + user.cash + "$", true);
                }
                else {
                    messageBot.addField("LOST", "Unlucky... you lost your bet of " + value + "$. You have " + user.cash + "$", true);
                }
            }
            else {
                messageBot.addField("ERROR", "You don't have enough money BOI. Your current wallet : " + user.cash + "$");
            }
        }
        else {
            messageBot.addField("SEXE", "You don't have any account, Create one with §createAccount")
                .setColor('#CB0202');
        }
        message.channel.send(messageBot);
    }
}
exports.default = CasinoCommand;
