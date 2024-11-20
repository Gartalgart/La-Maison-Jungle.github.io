import React, {useState} from "react";

function Login({ onClose }){
    const [isConnectActive, toggleConnect] = useState(true);
    const handlSubmit = (event) => {
        event.preventDefault();
    }
    return(
        <div className="loginPage">
            <div className="container">
                <div className={`signIn ${isConnectActive ? 'active' : ''}`}>
                    <h2>Se connecter</h2>
                    <form onSubmit={handlSubmit}>
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Mot de passe" />
                        <button type="submit" className="connectButton" onClick={onClose}>
                            Connexion
                            </button>
                        <p>Tu n'as pas de compte ?
                            <button className="toggleButton"
                                onClick={() => toggleConnect(false)}> 
                                Inscrit toi !
                            </button>
                        </p>
                    </form>
                    <button className="close-button" onClick={onClose}>Fermer</button>
                </div>
                <div className={`signUp ${!isConnectActive ? 'active' : ''}`}>
                    <h2>S'inscrire</h2>
                    <form onSubmit={handlSubmit}>
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Mot de passe" />
                        <input type="password" name="password" placeholder="Confirmation mot de passe" />
                        <button type="submit" className="connectButton" onClick={() => toggleConnect(true)}>
                            Connexion
                        </button>
                        <p>Tu as déjà un compte ? 
                            <button className="toggleButton"
                                onClick={() => toggleConnect(true)}> 
                                Connecte toi !
                            </button>
                        </p>
                    </form>
                    <button className="close-button" onClick={onClose}>Fermer</button>
                </div>
                
            </div>
        </div>
    );
}

export default Login