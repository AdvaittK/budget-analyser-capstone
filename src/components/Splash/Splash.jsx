

import React from "react";
import logo1 from "../../assets/logo2.png"; // Import the logo from the correct path
import logo2 from "../../assets/smartspend.png"


const SplashScreen = ({ onEnter }) => {
    return (
        <div style={styles.container}>
            <img src={logo1} alt="Budget Analyser Logo" style={styles.logo} className="animate-logo"/>
            <img src={logo2} className= "animate-text"  alt="Smart Spend Logo" style={styles.secondaryLogo} />
            {/* <h1 style={styles.title} className="animate-text">Budget Analyser</h1> */}
            <p style={styles.subtitle} className="animate-text">A Project by Advait, Amey, Niyati, and Nishita</p>
            <p style={styles.description} className="animate-text">Smart Financial Management Tool</p>
            <button style={styles.button} className= "animate-text"onClick={onEnter}>Start Budgeting!</button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fff5e1",
        color: "#FF6F00",
        fontFamily: "BomberEscort",  
        textAlign: "center",
    },
    logo: {
        width: "200px",
        height: "auto",
        marginBottom: "1rem",
    },
    secondaryLogo: {
            width: "auto",  
            height: "4rem",  
            marginBottom: "0.3rem", 
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
    },
    subtitle: {
        fontSize: "1rem",
        marginBottom: "0.3rem",
        fontWeight: "bold",
        fontStyle:"italic",
    },
    description: {
        fontSize: "0.8rem",
        fontStyle: "italic",
    },
    button: {
        marginTop: "1rem",
        padding: "10px 20px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#FF6F00",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
    },
};

export default SplashScreen;
