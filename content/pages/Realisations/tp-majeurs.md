Title: TP majeurs
<h1 class="center wow animated zoomIn">Mes projets</h1>
<div class="portfolio" id="portfolio">
    <div class="container">
        <div class="portfolio-container" style="display:flex; gap:30px; justify-content:center; flex-wrap: wrap;">
            <!-- Projet 1 : Geoworld -->
            <div class="portfolio-item wow fadeInUp" data-wow-delay="0s" style="flex: 0 0 48%; display:flex; justify-content:center;">
                <div class="portfolio-wrap">
                    <div class="portfolio-img">
                        <img src="../theme/logo/world-logo.png" alt="Geoworld">
                    </div>
                    <div class="portfolio-text">
                        <h3>Geoworld</h3>
                        <a href="https://github.com/walae04/geoworld-02042025" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
            <!-- Projet 2 : MovieDb -->
            <div class="portfolio-item wow fadeInUp" data-wow-delay="0.2s" style="flex: 0 0 48%; display:flex; justify-content:center;">
                <div class="portfolio-wrap">
                    <div class="portfolio-img">
                        <img src="../theme/logo/movie1.png" alt="MovieDb">
                    </div>
                    <div class="portfolio-text">
                        <h3>MovieDb</h3>
                        <a href="https://github.com/walae04/projet-ap" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- CSS -->
<style>
.center { text-align: center; }
h1.center {
    text-align: center;
    margin-bottom: 40px; 
}

.portfolio-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.portfolio-item {
    display: flex;
    justify-content: center;
}

.portfolio-wrap {
    width: 100%;
    max-width: 350px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.portfolio-wrap:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.portfolio-img {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #eee;
}

.portfolio-img img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.portfolio-text {
    padding: 15px 10px;
}

.portfolio-text h3 {
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #54647e;
}

.portfolio-text a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 18px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    background-color: #54647e;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.2s;
}

.portfolio-text a:hover {
    background-color: #3d4659;
}

/* Responsive */
@media(max-width: 768px){
    .portfolio-wrap { max-width: 90%; }
}
</style>
