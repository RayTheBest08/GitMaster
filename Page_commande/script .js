// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-list a');
//     const sections = document.querySelectorAll('.command-description .descrip-command');

//     // Fonction pour masquer toutes les sections
//     const hideAllSections = () => {
//         sections.forEach(section => {
//             section.style.display = 'none';
//         });
//     };

//     // Fonction pour afficher une section spécifique
//     const showSection = (sectionId) => {
//         hideAllSections(); // Masque toutes les sections
//         const targetSection = document.getElementById(sectionId);
//         if (targetSection) {
//             targetSection.style.display = 'block'; // Affiche la section cible
//         }
//     };

//     // Au chargement de la page, masquer toutes les sections sauf la première (ou celle par défaut)
//     hideAllSections();
//     // Afficher la première section par défaut au chargement
//     if (sections.length > 0) {
//         sections[0].style.display = 'block';
//     }


//     // Ajouter un écouteur d'événements à chaque lien de navigation
//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault(); // Empêche le comportement de lien par défaut (rechargement/défilement)

//             // Récupère l'ID de la section à afficher à partir du href du lien
//             const targetId = link.getAttribute('href').substring(1); // Retire le '#'
//             showSection(targetId);
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const mainSections = document.querySelectorAll('.command-description .descrip-command');
    const searchInput = document.getElementById('searchInput');
    const quickCommandsSection = document.querySelector('.quick-commands');
    const commandCards = document.querySelectorAll('.quick-commands .command-card');

    // Masque les sections de descriptions détaillées par défaut
    mainSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Affiche la section de commandes rapides par défaut
    if (quickCommandsSection) {
        quickCommandsSection.style.display = 'block';
    }

    // Fonction pour filtrer les cartes de commandes
    const filterCards = () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        commandCards.forEach(card => {
            const commandName = card.querySelector('h2').textContent.toLowerCase();
            const commandDescription = card.querySelector('p').textContent.toLowerCase();

            // Affiche la carte si le terme de recherche est dans le titre ou la description
            if (commandName.includes(searchTerm) || commandDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Écouteur d'événements pour le champ de recherche
    searchInput.addEventListener('input', () => {
        // Affiche la section des commandes rapides et masque les autres
        mainSections.forEach(section => section.style.display = 'none');
        quickCommandsSection.style.display = 'block';
        filterCards();
    });

    // Optionnel : Gérer les clics sur les liens de la barre latérale si vous les conservez
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Masque toutes les sections sauf la cible
            mainSections.forEach(section => section.style.display = 'none');
            quickCommandsSection.style.display = 'none';
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});