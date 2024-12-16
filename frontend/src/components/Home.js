import React, { useState } from "react";
import "./styles/Home.css";

const Home = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Merci pour votre inscription, ${email} !`);
        setEmail("");
    };

    return (
        <div className="home">
            {/* Fond en couleur et vagues */}
            <div className="background-section">
                <div className="wave-container">
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>

                {/* Contenu principal */}
                <div className="inner-content">
                    <div className="text-content">
                        <h1>Bienvenue sur TaskFlow</h1>
                        <p>
                            Simplifiez votre gestion de projets avec une interface moderne et des outils puissants.
                            Créez, organisez et collaborez efficacement grâce à TaskFlow.
                        </p>
                        <ul>
                            <li>✔ Collaboration simplifiée en temps réel</li>
                            <li>✔ Tableaux interactifs et personnalisables</li>
                            <li>✔ Outils gratuits pour débuter rapidement</li>
                        </ul>

                        <form className="signup-form" onSubmit={handleSubmit}>
                            <div className="signup-wrapper">
                                <input
                                    type="email"
                                    placeholder="Entrez votre adresse email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit">Inscrivez-vous gratuitement !</button>
                            </div>
                        </form>
                    </div>
                    <div className="image-container">
                        <img
                            src="/images/gens-affaires-travaillant-icone-plate-du-projet_1262-18770-removebg.png"
                            alt="Illustration gestion des tâches"
                            className="image"
                        />
                    </div>
                </div>
            </div>

            {/* Section des outils */}
            <div className="tools-section">
                <h2>Explorez nos outils puissants</h2>
                <p className="tools-intro">
                    Découvrez une suite d’outils flexibles pour gérer vos tâches, collaborer avec vos équipes, et suivre vos projets en temps réel.
                </p>

                <div className="tools-grid">
                    <div className="tool">
                        <img src="/images/task-management.png" alt="Gestion des tâches" className="tool-icon" />
                        <h3>Gestion des tâches</h3>
                        <p>Organisez, assignez et suivez vos tâches avec une clarté totale.</p>
                    </div>
                    <div className="tool">
                        <img src="/images/team-collaboration.png" alt="Collaboration d'équipe" className="tool-icon" />
                        <h3>Collaboration d'équipe</h3>
                        <p>Travaillez en temps réel avec votre équipe pour maximiser la productivité.</p>
                    </div>
                    <div className="tool">
                        <img src="/images/analytics.png" alt="Rapports analytiques" className="tool-icon" />
                        <h3>Rapports analytiques</h3>
                        <p>Obtenez des insights détaillés pour prendre des décisions éclairées.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;