const formation = [
  {
    title: "Comptabilité Générale",
    description:
      "Initiez-vous aux fondamentaux de la comptabilité : bilan, journal, grand livre, comptes de gestion, et principes comptables. Cette formation vous permettra de comprendre la logique de la comptabilité d'entreprise.",
    date: "2025-04-12",
    image: "public/img/IMG-20250417-WA0040.jpg",
    alt: "Comptabilité Générale"
  },
  {
    title: "Pratique de la Paie",
    description:
      "Apprenez à établir un bulletin de paie, calculer les charges sociales, remplir les déclarations (DSN), et gérer les obligations sociales liées au contrat de travail.",
    date: "2025-04-18",
    image: "public/img/IMG-20250417-WA0090.jpg",
    alt: "Pratique de la Paie"
  },
  {
    title: "Fiscalité des Entreprises",
    description:
      "Explorez les principaux impôts (TVA, IR, IS, BIC, BNC), apprenez à faire les déclarations fiscales et maîtrisez la gestion des obligations fiscales d’une entreprise.",
    date: "2025-05-05",
    image: "public/img/IMG-20250417-WA0032.jpg",
    alt: "Fiscalité des Entreprises"
  },
  {
    title: "Management des Ressources Humaines",
    description:
      "Formez-vous à la gestion du personnel : recrutement, évaluation, formation, gestion des conflits, droit du travail et pilotage des carrières.",
    date: "2025-05-25",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    alt: "Ressources Humaines"
  },
  {
    title: "Informatique de Gestion",
    description:
      "Utilisez des logiciels comme Sage, Excel ou Ciel pour gérer la comptabilité, la facturation, les stocks et la paie. Formation pratique axée sur l’outil.",
    date: "2025-06-01",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Informatique de Gestion"
  },
  {
    title: "Entrepreneuriat et Création d’Entreprise",
    description:
      "Développez votre projet d’entreprise, apprenez à faire un business plan, identifier votre marché, comprendre les statuts juridiques et les démarches de création.",
    date: "2025-06-10",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    alt: "Entrepreneuriat"
  },
  {
    title: "Secrétariat et Bureautique",
    description:
      "Maîtrisez le pack Office (Word, Excel, PowerPoint), les techniques de saisie, la gestion administrative, le classement et la communication professionnelle.",
    date: "2025-06-18",
    image: "public/img/IMG-20250417-WA0098.jpg",
    alt: "Secrétariat Bureautique"
  },
  {
    title: "Comptabilité Approfondie",
    description:
      "Perfectionnez vos compétences avec l’analyse financière, la comptabilité des sociétés, les opérations de fin d’exercice et les normes OHADA.",
    date: "2025-06-25",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    alt: "Comptabilité Approfondie"
  },
  {
    title: "Comptabilité Analytique",
    description:
      "Découvrez les coûts complets, les centres d’analyse, la méthode ABC et les outils d’aide à la décision pour piloter la performance d’une entreprise.",
    date: "2025-07-05",
    image: "public/img/IMG-20250417-WA0088.jpg",
    alt: "Comptabilité Analytique"
  },
  {
    title: "Audit Comptable et Financier",
    description:
      "Apprenez les techniques d’audit, l’analyse des risques, les procédures de contrôle interne et la rédaction des rapports d’audit financiers.",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    alt: "Audit Financier"
  },
  {
    title: "Gestion de Trésorerie",
    description:
      "Maîtrisez la gestion des flux de trésorerie, le prévisionnel de trésorerie, les placements et le financement à court terme.",
    date: "2025-07-20",
    image: "public/img/IMG-20250417-WA0099.jpg",
    alt: "Gestion de Trésorerie"
  },
  {
    title: "Contrôle de Gestion",
    description:
      "Initiez-vous aux outils du contrôle de gestion : budgets, tableaux de bord, indicateurs de performance et analyse des écarts.",
    date: "2025-07-30",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    alt: "Contrôle de Gestion"
  }
];

function Card_affichez() {
  const carouselContainer = document.querySelector(".carousel-inner");
  carouselContainer.innerHTML = "";

  const formationsPerSlide = 6; // Deux lignes de trois colonnes
  for (let i = 0; i < formation.length; i += formationsPerSlide) {
    const slideFormations = formation.slice(i, i + formationsPerSlide);
    const isActive = i === 0 ? "active" : "";

    const slideHTML = `
            <div class="carousel-item ${isActive}">
                <div class="row mb-4"> <!-- Première ligne -->
                    ${slideFormations
                      .slice(0, 3) // Première ligne : trois cartes
                      .map(
                        formation => `
                            <div class="col-md-4">
                                <div class="card mb-3">
                                    <img
                                        src="${formation.image}"
                                        class="card-img-top"
                                        alt="${formation.alt}"
                                        style="height: 150px; object-fit: cover;"/>
                                    
                                    <div class="card-body">
                                        <h6 class="card-title"><strong>${formation.title}</strong></h6> <!-- Titre plus petit -->
                                        <p class="card-text" style="font-size: 0.9rem;">${formation.description}</p>
                                        <button 
                                            class="btn btn-primary btn-sm openModalButton" 
                                            data-title="${formation.title}" 
                                            data-description="${formation.description}" 
                                            data-date="${formation.date}">
                                            En savoir plus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `
                      )
                      .join("")}
                </div>
                <div class="row mt-3"> <!-- Deuxième ligne avec espacement -->
                    ${slideFormations
                      .slice(3, 6) // Deuxième ligne : trois cartes
                      .map(
                        formation => `
                            <div class="col-md-4">
                                <div class="card mb-3"> <!-- Suppression de la hauteur fixe -->
                                    <img
                                        src="${formation.image}"
                                        class="card-img-top"
                                        alt="${formation.alt}"
                                        style="height: 150px; object-fit: cover;"/>
                                    
                                    <div class="card-body">
                                        <h6 class="card-title"><strong>${formation.title}</strong></h6> <!-- Titre plus petit -->
                                        <p class="card-text" style="font-size: 0.9rem;">${formation.description}</p>
                                        <button 
                                            class="btn btn-primary btn-sm openModalButton" 
                                            data-title="${formation.title}" 
                                            data-description="${formation.description}" 
                                            data-date="${formation.date}"
                                        >
                                            En savoir plus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `
                      )
                      .join("")}
                </div>
            </div>
        `;
    carouselContainer.innerHTML += slideHTML;
  }

  document.querySelectorAll(".openModalButton").forEach(button => {
    button.addEventListener("click", () => {
      const information = {
        title: button.dataset.title,
        description: button.dataset.description,
        date: button.dataset.date
      };
      informationDetails(information);
    });
  });
}

function informationDetails(information) {
  const modal = document.querySelector("#infoModal") || createModal();
  modal.querySelector(".modal-title").textContent = information.title;
  modal.querySelector(".modal-body").innerHTML = `
    <p><strong>Description:</strong> ${information.description}</p>
    <p><strong>Date:</strong> ${information.date}</p>
  `;

  const bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();
}

function createModal() {
  const modalHTML = `
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title" id="infoModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-column align-items-center">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Image" class="mb-3 rounded-circle" id="modal-image" style="width: 150px; height: 150px; object-fit: cover;">
              <div id="modal-content">
                <!-- Contenu dynamique ajouté ici -->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button type="button" class="btn btn-primary">Action supplémentaire</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Gérer le focus correctement
  const modalElement = document.querySelector("#infoModal");
  modalElement.addEventListener("shown.bs.modal", () => {
    modalElement.querySelector(".btn-secondary").focus(); // Met le focus sur le bouton "Fermer"
  });

  return modalElement;
}

document.addEventListener("DOMContentLoaded", Card_affichez);
