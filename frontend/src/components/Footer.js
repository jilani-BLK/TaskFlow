import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.footerText}>© 2024 TaskFlow. Tous droits réservés.</p>
        </footer>
    );
};

const styles = {
    footer: {
        height: '60px',
        backgroundColor: '#007bff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid #fff',
    },
    footerText: {
        margin: 0,
        color: '#fff',
        fontSize: '0.9rem',
    },
};

export default Footer;