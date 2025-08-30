// Contenu des tutoriels pour chaque commande
const tutorials = {
    init: {
        title: "Initialiser un dépôt Git (Init)",
        image: "images/git-init.png",
        explanation: `
            <h3>Comment initialiser un dépôt Git dans VS Code :</h3>
            <ol>
                <li>Ouvrez votre dossier de projet dans VS Code.</li>
                <li>Cliquez sur l'icône "Contrôle de code source" dans la barre latérale gauche (icône avec des branches).</li>
                <li>Vous verrez un bouton "Initialiser le dépôt" - cliquez dessus.</li>
                <li>VS Code initialisera automatiquement un nouveau dépôt Git dans votre dossier.</li>
                <li>Un fichier .gitignore sera créé automatiquement selon votre type de projet.</li>
            </ol>
            <p><strong style="color: var(--primary-color);">🛑 Note :</strong> Une fois initialisé, vous verrez apparaître un badge avec le nombre de changements sur l'icône du contrôle de code source.</p>
        `
    },
    add: {
        title: "Ajouter des fichiers (Stage)",
        image: "images/git-init.png",
        explanation: `
            <h3>Comment ajouter des fichiers au suivi Git dans VS Code :</h3>
            <ol>
                <li>Dans l'onglet "Contrôle de code source", vous verrez la liste des fichiers modifiés.</li>
                <li>Pour ajouter un fichier individuel :
                    <ul>
                        <li>Survolez le fichier et cliquez sur le '+' à côté du nom</li>
                        <li>Ou faites un clic droit et choisissez "Stage Changes"</li>
                    </ul>
                </li>
                <li>Pour ajouter tous les fichiers :
                    <ul>
                        <li>Cliquez sur le '+' en haut de la liste des changements</li>
                        <li>Ou utilisez le menu contextuel "Stage All Changes"</li>
                    </ul>
                </li>
                <li>Les fichiers stagés apparaîtront dans la section "Staged Changes".</li>
            </ol>
            <p><strong>Astuce :</strong> Vous pouvez aussi désélectionner des fichiers en cliquant sur le '-' à côté du fichier stagé.</p>
        `
    },
    commit: {
        title: "Créer un commit",
        image: "images/git-commit.png",
        explanation: `
            <h3>Comment créer un commit dans VS Code :</h3>
            <ol>
                <li>Une fois vos fichiers stagés, regardez en haut de l'onglet "Contrôle de code source".</li>
                <li>Vous verrez une zone de texte avec le message "Message (press Ctrl+Enter to commit)".</li>
                <li>Saisissez votre message de commit en respectant les conventions :
                    <ul>
                        <li>Première ligne : résumé court (50 caractères max)</li>
                        <li>Ligne vide</li>
                        <li>Description détaillée si nécessaire</li>
                    </ul>
                </li>
                <li>Pour valider le commit :
                    <ul>
                        <li>Cliquez sur la coche ✓ au-dessus du message</li>
                        <li>Ou utilisez Ctrl+Enter (Cmd+Enter sur Mac)</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Conseil :</strong> Faites des commits atomiques qui concernent une seule fonctionnalité ou correction.</p>
        `
    },
    branch: {
        title: "Gérer les branches",
        image: "images/git-branch.png",
        explanation: `
            <h3>Comment gérer les branches dans VS Code :</h3>
            <ol>
                <li>En bas à gauche de VS Code, vous verrez le nom de votre branche actuelle.</li>
                <li>Pour créer une nouvelle branche :
                    <ul>
                        <li>Cliquez sur le nom de la branche en bas</li>
                        <li>Choisissez "Create new branch..."</li>
                        <li>Entrez le nom de la nouvelle branche</li>
                    </ul>
                </li>
                <li>Pour changer de branche :
                    <ul>
                        <li>Cliquez sur le nom de la branche en bas</li>
                        <li>Sélectionnez la branche désirée dans la liste</li>
                    </ul>
                </li>
                <li>Pour voir l'historique des branches :
                    <ul>
                        <li>Ouvrez la palette de commandes (Ctrl+Shift+P)</li>
                        <li>Tapez "Git: View Branch History"</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Astuce :</strong> Utilisez des noms de branches descriptifs comme "feature/login" ou "fix/bug-123".</p>
        `
    },
    merge: {
        title: "Fusionner les branches (Merge)",
        image: "images/git-merge.png",
        explanation: `
            <h3>Comment fusionner des branches dans VS Code :</h3>
            <ol>
                <li>Assurez-vous d'être sur la branche de destination (généralement main).</li>
                <li>Pour fusionner une branche :
                    <ul>
                        <li>Ouvrez la palette de commandes (Ctrl+Shift+P)</li>
                        <li>Tapez "Git: Merge Branch..."</li>
                        <li>Sélectionnez la branche à fusionner</li>
                    </ul>
                </li>
                <li>En cas de conflits :
                    <ul>
                        <li>VS Code affichera les fichiers en conflit</li>
                        <li>Cliquez sur un fichier pour voir les différences</li>
                        <li>Choisissez "Accept Current", "Accept Incoming", ou modifiez manuellement</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Important :</strong> Faites toujours un commit ou un stash de vos changements avant de fusionner.</p>
        `
    },
    push: {
        title: "Envoyer les modifications (Push)",
        image: "images/git-push.png",
        explanation: `
            <h3>Comment pousser vos modifications vers GitHub dans VS Code :</h3>
            <ol>
                <li>Vérifiez que tous vos changements sont commités.</li>
                <li>Pour pousser les modifications :
                    <ul>
                        <li>Cliquez sur l'icône de synchronisation en bas à gauche</li>
                        <li>Ou utilisez les boutons "Push" dans l'onglet "Contrôle de code source"</li>
                    </ul>
                </li>
                <li>Si c'est votre premier push :
                    <ul>
                        <li>VS Code vous demandera de vous connecter à GitHub</li>
                        <li>Suivez les instructions pour l'authentification</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Note :</strong> L'icône de synchronisation affiche aussi le nombre de commits à pousser/tirer.</p>
        `
    },
    pull: {
        title: "Récupérer les modifications (Pull)",
        image: "images/git-pull.png",
        explanation: `
            <h3>Comment récupérer les modifications depuis GitHub dans VS Code :</h3>
            <ol>
                <li>Pour récupérer les dernières modifications :
                    <ul>
                        <li>Cliquez sur l'icône de synchronisation en bas</li>
                        <li>Ou utilisez le bouton "Pull" dans l'onglet "Contrôle de code source"</li>
                    </ul>
                </li>
                <li>VS Code récupérera automatiquement les changements.</li>
                <li>En cas de conflits :
                    <ul>
                        <li>VS Code les affichera dans l'éditeur</li>
                        <li>Résolvez-les comme lors d'un merge</li>
                    </ul>
                </li>
                <li>Pour voir ce qui va être récupéré :
                    <ul>
                        <li>Utilisez "Git: Pull..." dans la palette de commandes</li>
                        <li>Choisissez "Preview" pour voir les changements</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Conseil :</strong> Faites régulièrement des pulls pour rester à jour avec votre équipe.</p>
        `
    }
};

const modal = document.getElementById('tutorialModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('commandScreenshot');
const modalExplanation = document.getElementById('commandExplanation');
const closeButton = document.querySelector('.close-button');

// Gestionnaires d'événements pour les cartes de commandes
document.querySelectorAll('.command-card').forEach(card => {
    const command = card.dataset.command;
    card.querySelector('.learn-more').addEventListener('click', () => {
        showTutorial(command);
    });
});

// Fermeture de la modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Affichage du tutoriel
function showTutorial(command) {
    const tutorial = tutorials[command];
    if (tutorial) {
        modalTitle.textContent = tutorial.title;
        modalImage.style.display = 'block'; // Réaffiche l'image à chaque ouverture
        // Supprime le message d'erreur précédent s'il existe
        const prevError = modalImage.parentNode.querySelector('.image-error');
        if (prevError) prevError.remove();
        modalImage.src = tutorial.image;
        modalImage.alt = `Capture d'écran ${tutorial.title}`;
        modalExplanation.innerHTML = tutorial.explanation;
        modal.style.display = 'block';
    }
}

// Gestion des images manquantes
modalImage.addEventListener('error', () => {
    modalImage.style.display = 'none';
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('image-error');
    errorMessage.textContent = "Image en cours de chargement...";
    modalImage.parentNode.insertBefore(errorMessage, modalImage);
});
