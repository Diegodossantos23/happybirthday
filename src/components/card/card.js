import style from "./card.style.module.css";
import image from '../../assets/she-and-me.jpeg'

export default function Card() {
  return (
    <div className={style.container}>
      <img className={style.we} src={image}/>
    </div>
  );
}
