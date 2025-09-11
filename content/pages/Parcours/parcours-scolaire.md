Title: Parcours scolaire
# Mon parcours {.center .wow .animated .zoomIn}
<Voici mon parcours ci-dessous:>
        <div class="experience" id="experience">
            <div class="container">
                <div class="timeline">
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">2025 </div>
                            <h2>Stage développement d'application</h2>
                            <h4>Sismani, (6 semaines)</h4>
                            <p>
                                Savigny Le Temple
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">2024 - En cours</div>
                            <h2>BTS Services Informatiques aux organisations, option SLAM</h2>
                            <h4>Lycée Léonard De Vinci </h4>
                            <p>
                                Melun
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">2023 </div>
                            <h2>Stage développement web</h2>
                            <h4>Création d'un site dynamique pour une association, <br>(3 semaines) </br> </h4>
                            <p>
                                Savigny Le Temple
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">2022 - 2023</div>
                            <h2>Baccalauréat général</h2>
                            <h4>Lycée Pierre Mendes France</h4>
                            <p>
                                Savigny Le Temple 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<style>
    .center {
  text-align: center;
}
.experience {
    position: relative;
    padding: 45px 0 15px 0;
}
.experience .timeline {
    position: relative;
    width: 100%;
}
.experience .timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: #54647eff;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}
.experience .timeline .timeline-item {
    position: relative;
    background: inherit;
    width: 50%;
    margin-bottom: 30px;
}
.experience .timeline .timeline-item.left {
    left: 0;
    padding-right: 30px;
}
.experience .timeline .timeline-item.right {
    left: 50%;
    padding-left: 30px;
}
.experience .timeline .timeline-item::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 48px;
    right: -8px;
    background: #ffffff;
    border: 2px solid #54647eff;
    border-radius: 16px;
    z-index: 1;
}
.experience .timeline .timeline-item.right::after {
    left: -8px;
}
.experience .timeline .timeline-item::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 46px;
  right: 10px;
  z-index: 1;
  border: 10px solid;
  border-color: transparent transparent transparent #dddddd;
}
.experience .timeline .timeline-item.right::before {
  left: 10px;
  border-color: transparent #dddddd transparent transparent;
}
.experience .timeline .timeline-date {
    position: absolute;
    width: 100%;
    top: 44px;
    font-size: 16px;
    font-weight: 600;
    color: #54647eff;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
}
.experience .timeline .timeline-item.left .timeline-date {
    text-align: left;
    left: calc(100% + 55px);
}
.experience .timeline .timeline-item.right .timeline-date {
    text-align: right;
    right: calc(100% + 55px);
}
.experience .timeline .timeline-text {
    padding: 30px;
    background: #ffffff;
    position: relative;
    border-right: 5px solid #dddddd;
    box-shadow: 0 0 60px rgba(0, 0, 0, .08);
}
.experience .timeline .timeline-item.right .timeline-text {
    border-right: none;
    border-left: 5px solid #dddddd;
}
.experience .timeline .timeline-text h2 {
    margin: 0 0 5px 0;
    font-size: 22px;
    font-weight: 600;
}
.experience .timeline .timeline-text h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
}
.experience .timeline .timeline-text p {
    margin: 0;
    font-size: 16px;
}
@media (max-width: 767.98px) {
    .experience .timeline::after {
        left: 8px;
    }
    .experience .timeline .timeline-item {
        width: 100%;
        padding-left: 38px;
    }
    .experience .timeline .timeline-item.left {
        padding-right: 0;
    }
    .experience .timeline .timeline-item.right {
        left: 0%;
        padding-left: 38px;
    }
    .experience .timeline .timeline-item.left::after, 
    .experience .timeline .timeline-item.right::after {
        left: 0;
    }
    .experience .timeline .timeline-item.left::before,
    .experience .timeline .timeline-item.right::before {
        left: 18px;
        border-color: transparent #dddddd transparent transparent;
    }
    .experience .timeline .timeline-item.left .timeline-date,
    .experience .timeline .timeline-item.right .timeline-date {
        position: relative;
        top: 0;
        right: auto;
        left: 0;
        text-align: left;
        margin-bottom: 10px;
    }
    .experience .timeline .timeline-item.left .timeline-text,
    .experience .timeline .timeline-item.right .timeline-text {
        border-right: none;
        border-left: 5px solid #dddddd;
    }
}

</style>