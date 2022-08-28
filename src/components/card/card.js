import style from "./card.style.module.css";
import we from '/home/diego/documents/birthday/happybirthday/src/assets/she-and-me.jpeg'

export default function Card() {
  return (
    <div className={style.container}>
      <img className={style.we} src={we}/>
    </div>
  );
}
