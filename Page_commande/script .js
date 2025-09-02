// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.toggle-menu');
//     const nav = document.querySelector('nav');

//     menuToggle.addEventListener('click', function() {
//         nav.classList.toggle('active');
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const mainSections = document.querySelectorAll('.command-description .descrip-command');
//     const searchInput = document.getElementById('searchInput');
//     const quickCommandsSection = document.querySelector('.quick-commands');
//     const commandCards = document.querySelectorAll('.quick-commands .command-card');

//     // Masque les sections de descriptions détaillées par défaut
//     mainSections.forEach(section => {
//         section.style.display = 'none';
//     });
    
//     // Affiche la section de commandes rapides par défaut
//     if (quickCommandsSection) {
//         quickCommandsSection.style.display = 'block';
//     }

//     // Fonction pour filtrer les cartes de commandes
//     const filterCards = () => {
//         const searchTerm = searchInput.value.toLowerCase();
        
//         commandCards.forEach(card => {
//             const commandName = card.querySelector('h2').textContent.toLowerCase();
//             const commandDescription = card.querySelector('p').textContent.toLowerCase();

//             // Affiche la carte si le terme de recherche est dans le titre ou la description
//             if (commandName.includes(searchTerm) || commandDescription.includes(searchTerm)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     };

//     // Écouteur d'événements pour le champ de recherche
//     searchInput.addEventListener('input', () => {
//         // Affiche la section des commandes rapides et masque les autres
//         mainSections.forEach(section => section.style.display = 'none');
//         quickCommandsSection.style.display = 'block';
//         filterCards();
//     });

//     // Optionnel : Gérer les clics sur les liens de la barre latérale si vous les conservez
//     const navLinks = document.querySelectorAll('.nav-list a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
            
//             // Masque toutes les sections sauf la cible
//             mainSections.forEach(section => section.style.display = 'none');
//             quickCommandsSection.style.display = 'none';
            
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 targetSection.style.display = 'block';
//             }
//         });
//     });
// });