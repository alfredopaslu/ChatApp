import { users } from '../data/users';
import { messages } from '../data/messages';

export function updateChats(chats) {

    const chatsList = [...chats];

    const sender = users[generateRandomNumber()];

    const message = messages[generateRandomNumber()];

    const index = chatsList.findIndex(chat => chat.user_id === sender);

    if (index === -1) {

        chatsList.unshift(mapChatStructure(sender, message));
    }

    else {

        const { message_id, message_content, is_read, attachment_url, emoji_reaction } = message;

        chatsList[index].messages.push(
            {
                message_id,
                sender_id: sender.user_id,
                message_content,
                is_read,
                attachment_url,
                emoji_reaction,
                timestamp: new Date().toISOString()
            }
        );
    }

    return chatsList;
}

function mapChatStructure(sender, message) {

    const { message_id, message_content, is_read, attachment_url, emoji_reaction } = message;

    return {
        ...sender,
        messages: [
            {
                message_id,
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
