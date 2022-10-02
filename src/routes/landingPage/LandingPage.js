import React from 'react'
import logoImage from '../../assets/mainLogo.png'
import styles from './LandingPage.module.css'
import { useNavigate } from "react-router-dom"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"

const LandingPage = () => {

  let navigate = useNavigate();

  const googleLogin = () => {
    console.log('clicked')
    let provider = new GoogleAuthProvider();

    signInWithPopup(getAuth(), provider)
      .then(() => {
        console.log("LOGGED IN")
        navigate("/home");
      })
      .catch((error) => {
        console.log("ERROR", error)
      })
  }

  return ( 
    <div className={styles.landingComponent}>
      <div className={styles.imageContainer}>
        <img className={styles.logo} src={logoImage} alt="mainLogo"/>
        <div className={styles.textContainer}>
          <h1>Explora por la pagina o<br/>ingresa con google para mas opciones</h1>
        </div>
      </div>

      <div className={styles.loginContainer}>
        <button className={styles.loginButton} onClick={() => googleLogin()}>
          Ingresa con Google
        </button>
      </div>
    </div>
   );
}
 
export default LandingPage;