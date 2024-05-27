import { users } from '../data/users';
import { messages } from '../data/messages';
import { v4 as uuidv4 } from 'uuid';

export function updateChats(chats) {

    const chatsList = [...chats];

    const sender = users[generateRandomNumber()];

    const message = messages[generateRandomNumber()];

    const index = chatsList.findIndex(chat => chat.user_id === sender.user_id);

    if (index === -1) {

        chatsList.push(mapChatStructure(sender, message));
    } else {

        const { message_content, is_read, attachment_url, emoji_reaction } = message;

        chatsList[index].messages = [

            ...chatsList[index].messages,

            {
                message_id: uuidv4(),
                sender_id: sender.user_id,
                message_content,
                is_read,
                attachment_url,
                emoji_reaction,
                timestamp: new Date().toISOString()
            }]
    }

    console.log('chatsList :>> ', chatsList);

    return chatsList;
}

function mapChatStructure(sender, message) {

    const { message_content, is_read, attachment_url, emoji_reaction } = message;

    return {
        ...sender,
        messages: [
            {
                message_id: uuidv4(),
                sender_id: sender.user_id,
                message_content,
                is_read,
                attachment_url,
                emoji_reaction,
                timestamp: new Date().toISOString()
            }
        ]
    };
}

function generateRandomNumber() {
    return Math.floor(Math.random() * users.length);
}

export const timmer = 5000;
