// assets/js/api.js

// Ce fichier centralisera tous les appels `fetch` vers votre backend PHP.
// Pour l'instant, nous simulons les appels.

const FAKE_DELAY = 500; // Simule la latence du réseau

async function apiLogin(email, password) {
    console.log(`API: Tentative de connexion pour ${email}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            // Dans le vrai projet, vous feriez un fetch() vers 'api/auth/login.php'
            if (email === "test@test.com" && password === "password") {
                console.log("API: Connexion réussie.");
                resolve({ success: true, token: "un_super_token_secret_12345" });
            } else {
                console.log("API: Échec de la connexion.");
                resolve({ success: false, message: "Email ou mot de passe incorrect." });
            }
        }, FAKE_DELAY);
    });
}

async function apiFetchPosts() {
    console.log("API: Récupération des articles...");
    return new Promise(resolve => {
        setTimeout(() => {
            // Simule une réponse de votre API PHP
            const fakePosts = [
                { id: 1, author_name: "Alice", author_avatar: "https://i.pravatar.cc/50?u=1", description: "Super journée à la plage ! ☀️", image: "https://picsum.photos/400/200?random=1" },
                { id: 2, author_name: "Bob", author_avatar: "https://i.pravatar.cc/50?u=2", description: "Mon nouveau projet de code avance bien.", image: null },
                { id: 3, author_name: "Charlie", author_avatar: "https://i.pravatar.cc/50?u=3", description: "Qui veut aller au cinéma ce soir ?", image: "https://picsum.photos/400/200?random=2" },
            ];
            console.log("API: Articles reçus.");
            resolve({ success: true, posts: fakePosts });
        }, FAKE_DELAY);
    });
}

const FAKE_USER_DATA = {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "test@test.com",
    avatar: "https://i.pravatar.cc/160",
    banner: "https://picsum.photos/800/250",
    friendsCount: 128
};

const FAKE_USER_POSTS = [
    { id: 10, author_name: "John Doe", author_avatar: "https://i.pravatar.cc/50", description: "Je viens de mettre à jour mon profil !", image: null },
    { id: 11, author_name: "John Doe", author_avatar: "https://i.pravatar.cc/50", description: "Retour sur un super projet de la semaine dernière.", image: "https://picsum.photos/400/200?random=10" }
];

async function apiFetchUserProfile() {
    console.log("API: Récupération du profil de l'utilisateur...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("API: Profil reçu.");
            resolve({ success: true, user: FAKE_USER_DATA });
        }, 300); // Délai plus court
    });
}

async function apiFetchPostsForUser(userId) {
    console.log(`API: Récupération des articles pour l'utilisateur #${userId}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("API: Articles de l'utilisateur reçus.");
            resolve({ success: true, posts: FAKE_USER_POSTS });
        }, 500);
    });
}

// assets/js/api.js

// ... (fonctions et données existantes)

const FAKE_FRIEND_REQUESTS = [
    { id: 2, name: "Alice Martin", avatar: "https://i.pravatar.cc/60?u=2" },
    { id: 3, name: "Charlie Durand", avatar: "https://i.pravatar.cc/60?u=3" }
];

const FAKE_ALL_USERS = [
    { id: 2, name: "Alice Martin", avatar: "https://i.pravatar.cc/60?u=2" },
    { id: 3, name: "Charlie Durand", avatar: "https://i.pravatar.cc/60?u=3" },
    { id: 4, name: "David Bernard", avatar: "https://i.pravatar.cc/60?u=4" },
    { id: 5, name: "Eva Petit", avatar: "https://i.pravatar.cc/60?u=5" }
];

async function apiFetchFriendRequests() {
    console.log("API: Récupération des demandes d'amis...");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true, requests: FAKE_FRIEND_REQUESTS });
        }, 400);
    });
}

async function apiFetchAllUsers() {
    console.log("API: Récupération de tous les utilisateurs...");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true, users: FAKE_ALL_USERS });
        }, 600);
    });
}

// assets/js/api.js

// ... (fonctions et données existantes)

const FAKE_CONVERSATIONS = [
    { id: 1, userId: 2, userName: "Alice Martin", userAvatar: "https://i.pravatar.cc/50?u=2", lastMessage: "Ok, ça marche pour moi !" },
    { id: 2, userId: 4, userName: "David Bernard", userAvatar: "https://i.pravatar.cc/50?u=4", lastMessage: "Tu as vu le dernier épisode ?" }
];

const FAKE_MESSAGES = {
    "1": [ // Messages pour la conversation avec l'ID 1 (Alice)
        { text: "Salut ! Comment ça va ?", isMe: false },
        { text: "Hey, ça va bien et toi ?", isMe: true },
        { text: "Super ! Dispo pour le projet demain ?", isMe: false },
        { text: "Ok, ça marche pour moi !", isMe: false }
    ],
    "2": [ // Messages pour la conversation avec l'ID 2 (David)
        { text: "Tu as vu le dernier épisode ?", isMe: false }
    ]
};

async function apiFetchConversations() {
    console.log("API: Récupération des conversations...");
    return new Promise(resolve => {
        setTimeout(() => resolve({ success: true, conversations: FAKE_CONVERSATIONS }), 300);
    });
}

async function apiFetchMessagesForConversation(conversationId) {
    console.log(`API: Récupération des messages pour la conv #${conversationId}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            const messages = FAKE_MESSAGES[conversationId] || [];
            resolve({ success: true, messages: messages });
        }, 500);
    });
}

// assets/js/api.js

// ... (fonctions existantes)

const FAKE_REPLIES = [
    "Salut !",
    "Haha, je suis d'accord.",
    "Non, je ne pense pas.",
    "Peut-être...",
    "Je te redis ça plus tard.",
    "D'accord.",
    "Vu."
];

// Simule la réception d'un nouveau message
async function apiGetNewMessage(fromUserName) {
    console.log(`API: Vérification de nouveaux messages de ${fromUserName}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            // Une chance sur trois de recevoir un message pour rendre ça plus réaliste
            if (Math.random() < 0.33) {
                const randomReply = FAKE_REPLIES[Math.floor(Math.random() * FAKE_REPLIES.length)];
                console.log(`API: Nouveau message reçu !`);
                resolve({ success: true, message: { text: randomReply, isMe: false } });
            } else {
                // Pas de nouveau message cette fois
                resolve({ success: false });
            }
        }, 1000); // Simule une latence réseau de 1s
    });
}

