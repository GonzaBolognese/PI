import React from "react";
import { Link } from "react-router-dom";
import imgDogs from "../img/DosPerrosTontosModificado.png";
import title from "../img/WelcometheDogs... modif.png";
import enter from "../img/Enter modificado.png"
import style from "../css/landing.module.scss";

export default function LandingPage() {

    return (
        <div className={style.fondo}>
            <div className={style.glass}>
            <h1 className={style.welcome}>API DOGS</h1>
                <Link to={'/home'}>
                <button className={style.button}>Press Start</button>
                </Link>
            </div>
        </div>
    )
}