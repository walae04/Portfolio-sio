Title: Stage SIO1
<h1 class="center wow animated zoomIn">Stage BTS SIO 1ère année
<img src="../theme/logo/logo_sismani.png" alt="Logo" class="logo">
</h1>
<section class="stage-section wow animated fadeInUp" data-wow-delay="0.2s">
    <p>
        Dans le cadre de ma formation en BTS SIO SLAM, j’ai effectué un stage de 6 semaines visant 
        à me confronter à des situations professionnelles réelles. Ce stage m’a permis de mettre en pratique 
        mes connaissances en développement web, bases de données et documentation technique, et d’acquérir de nouvelles compétences, notamment en JavaScript.
    </p>
    <h2>Présentation de l’entreprise</h2>
    <p>
        L’entreprise <strong>SISMANI</strong> est spécialisée dans le développement de solutions logicielles innovantes. 
        Elle est actuellement en phase de finalisation d’un progiciel nommé <strong>Wonka</strong>, dédié à la gestion de projets.
    </p>
    <!-- Section en deux colonnes -->
    <div class="two-columns">
        <div class="column">
            <h2 class="text-start">Missions réalisées</h2>
            <ul>
                <li>Tests fonctionnels de l’application Wonka</li>
                <li>Création d’un tableau de suivi des tests</li>
                <li>Rédaction de la documentation fonctionnelle</li>
                <li>Apprentissage et utilisation du langage JavaScript</li>
                <li>Développement de pages d’aide et section "Assistance"</li>
                <li>Insertion de données dans la base MySQL via phpMyAdmin</li>
            </ul>
        </div>
        <div class="column">
            <h2 class="text-start">Compétences acquises</h2>
            <ul>
                <li>Développement web : HTML, CSS, JS, PHP, HTML.twig</li>
                <li>Rédaction de documentation technique</li>
                <li>Tests fonctionnels et suivi qualité</li>
                <li>Gestion de bases de données via phpMyAdmin</li>
                <li>Travail en autonomie, rigueur et organisation</li>
            </ul>
        </div>
    </div>
    <h2>Bilan personnel</h2>
    <p>
        Ce stage a été très formateur et m’a permis de mieux comprendre le métier de développeur. 
        L’ambiance de travail et l’encadrement m’ont motivée à poursuivre dans le développement d’applications web.
    </p>
    <div class="center">
        <a href="../theme/pdf/rapport.pdf" class="btn-download">
            Télécharger le rapport complet
        </a>
    </div>
</section>

<style>
.center { text-align: center; }

.stage-section {
    background-color: #f9f9f9;
    padding: 20px;
    margin: 20px 0;
    border-left: 5px solid #54647e;
    border-right: 5px solid #54647e;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.stage-section h2 {
    color: #54647e;
    margin-top: 0;
    text-align: center;
}

/* Flex pour deux colonnes */
.two-columns {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px 0;
}

.column {
    flex: 1;
    min-width: 250px; /* Pour rester responsive */
}
.btn-download {
    display: inline-block;
    padding: 10px 20px;
    background-color: #54647e;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn-download:hover {
    background-color: #54647e;
}
</style>
