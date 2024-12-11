import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Faire une requête vers le backend
        axios.get('/')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la connexion au backend :', error);
                setMessage('Erreur de connexion au backend');
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Bienvenue sur TaskFlow</h1>
            <p>{message}</p>
        </div>
    );
};

export default Home;