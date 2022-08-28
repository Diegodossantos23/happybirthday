import Card from "./components/card/card";
import style from "./app.style.module.css";
import Message from "./components/message/message";

export default function App() {
  return (
    <div className={style.container}>
<iframe autoplay="autoplay" width="200" height="200" src="https://www.youtube.com/embed/qG5tlV4j0VU" title="Matheus & Kauan ft. Anitta | Ao Vivo E A Cores | Lyric Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Card/>
      <Message/>
    </div>
  );
}
