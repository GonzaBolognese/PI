import { Link } from "react-router-dom";
import style from '../css/homeCard.module.scss';



export default function BreedCard({id, img, name, weightMin, weightMax, temperament}){

    return(
        <div className={style.card}>
            <div className={style.cardHeader}>
                <img src={img} alt="img not found" />
                <Link to={`/home/${id}`} className={style.link}>
                <h5 className={style.span}>Name: {name}</h5>
                </Link>
                <div className={style.cardBody}>
                <h6>Weight: </h6>
                <p> Min: {weightMin}/kg - Max: {weightMax}/kg</p>
                
                <h6>Temperament:</h6><p> {temperament}</p>
                </div>
            </div>
        </div>
    )
}