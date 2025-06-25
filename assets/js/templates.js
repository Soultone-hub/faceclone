// assets/js/templates.js

function createPostHTML(post) {
    // On ajoute des `data-` attributs pour pouvoir identifier sur quel post on clique.
    // On ajoute aussi un conteneur pour les futurs commentaires.
    return `
        <article class="post-card" id="post-${post.id}" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
            <header style="display: flex; align-items: center; gap: 10px;">
                <img src="${post.author_avatar}" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%;">
                <strong>${post.author_name}</strong>
            </header>
            <p>${post.description}</p>
            ${post.image ? `<img src="${post.image}" alt="Image du post" style="max-width: 100%;">` : ''}
            <footer class="post-actions">
                <button class="like-btn" data-post-id="${post.id}">
                    <span class="icon">👍</span> J'aime
                </button>
                <button class="comment-btn" data-post-id="${post.id}">
                    <span>💬</span> Commenter
                </button>
            </footer>
            <div class="comments-section" id="comments-for-${post.id}" style="display: none; margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">
                <div class="comments-list">
                    <!-- Les commentaires existants seront chargés ici -->
                    <p><em>Aucun commentaire pour l'instant.</em></p>
                </div>
                <div class="comment-form" style="display: flex; margin-top: 10px;">
                    <input type="text" placeholder="Écrivez un commentaire..." style="flex-grow: 1;">
                    <button class="add-comment-btn" data-post-id="${post.id}">Envoyer</button>
                </div>
            </div>
        </article>
    `;
}

// Nouveau template pour un seul commentaire
function createCommentHTML(comment) {
    return `
        <div class="comment" style="display: flex; gap: 5px; margin-bottom: 5px;">
            <strong style="font-size: 0.9em;">${comment.author}:</strong>
            <p style="font-size: 0.9em; margin: 0;">${comment.text}</p>
        </div>
    `;
}

// Nouveau template pour une carte utilisateur
function createUserCardHTML(user, type = 'user') {
    let buttons = '';
    
    // On affiche des boutons différents selon le contexte
    if (type === 'request') {
        buttons = `
            <button class="accept-friend-btn" data-user-id="${user.id}">Accepter</button>
            <button class="refuse-friend-btn" data-user-id="${user.id}">Refuser</button>
        `;
    } else if (type === 'user') {
        buttons = `<button class="add-friend-btn" data-user-id="${user.id}">Ajouter en ami</button>`;
    }

    return `
        <div class="user-card" id="user-card-${user.id}" style="display: flex; align-items: center; justify-content: space-between; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${user.avatar}" alt="Avatar de ${user.name}" style="width: 60px; height: 60px; border-radius: 50%;">
                <strong>${user.name}</strong>
            </div>
            <div class="user-card-actions">
                ${buttons}
            </div>
        </div>
    `;
}
// assets/js/templates.js

// ... (fonctions existantes)

// Template pour un élément de la liste des conversations (sidebar)
function createConversationItemHTML(convo) {
    return `
        <div class="conversation-item" data-conv-id="${convo.id}" data-user-name="${convo.userName}" data-user-avatar="${convo.userAvatar}" style="display: flex; align-items: center; padding: 10px; gap: 10px; cursor: pointer;">
            <img src="${convo.userAvatar}" alt="${convo.userName}" style="width: 50px; height: 50px; border-radius: 50%;">
            <div>
                <strong>${convo.userName}</strong>
                <p style="margin: 0; color: #666; font-size: 0.9em;">${convo.lastMessage}</p>
            </div>
        </div>
    `;
}

// Template pour un message dans une conversation
function createMessageHTML(message) {
    // On aligne à droite si c'est notre message, à gauche sinon
    const messageClass = message.isMe ? 'sent' : 'received';
    const alignStyle = message.isMe ? 'align-self: flex-end; background-color: #0084ff; color: white;' : 'align-self: flex-start; background-color: #e4e6eb;';
    
    return `
        <div class="message ${messageClass}" style="max-width: 60%; padding: 8px 12px; border-radius: 18px; margin-bottom: 5px; ${alignStyle}">
            <p style="margin: 0;">${message.text}</p>
        </div>
    `;
}

