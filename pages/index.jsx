import styles from "../styles/Home.module.css";
import { useState } from "react";
const index = () => {
  //=========> url api
  const [text, setText] = useState(null);
  const url = "https://api.adviceslip.com/advice";
  const handleClick = async () => {
    // fetch url
    const res = await fetch(url);
    // get data
    const data = await res.json();
    // if get slip ok if not get slip get advice or || not any one repons text' no advice for you '
    setText(data?.slip?.advice || "no advice for you !");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.headding}>Random Advice</h1>
      {/*  onclick event  */}
      <button onClick={handleClick} className={styles.btn}>
        Get one
      </button>
      <p className={styles.text}>{text && text}</p>
    </div>
  );
};

export default index;
