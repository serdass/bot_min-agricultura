const { ActivityHandler, MessageFactory } = require('botbuilder');

class MainDialog extends ActivityHandler {
    constructor() {
        super();

        // Evento cuando el usuario envía un mensaje
        this.onMessage(async (context, next) => {
            const userMessage = context.activity.text;

            // Responder con un mensaje de confirmación
            await context.sendActivity(`Recibí tu mensaje: "${userMessage}"`);
            await next();
        });

        // Evento cuando se agrega el bot a una conversación
        this.onMembersAdded(async (context, next) => {
            const welcomeText = '¡Bienvenido al bot del Ministerio de Agricultura Dime en qué puedo ayudarte.';
            await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
            await next();
        });
    }
}

module.exports.MainDialog = MainDialog;