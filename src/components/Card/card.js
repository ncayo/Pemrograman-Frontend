import styles from "./card.module.css";
import data from "../../utils/constants/indonesia";
import React from "react";

function Card() {
  const { indonesia } = data;
  const konfirmasi = indonesia.find((unit) => unit.status === "Positif").total;
  const sembuh = indonesia.find((unit) => unit.status === "Sembuh").total;
  const mati = indonesia.find((unit) => unit.status === "Meninggal").total;

  return (
    <div className={styles.container}>
      <div className={styles.judul}>
        <h1 className={styles.judul__card}>Indonesia</h1>
        <p className={styles.judul__description}>
          Data Covid Berdasarkan Indonesia
        </p>
      </div>
      <br />

      <div className={styles.induk}>
        <div className={styles.card1}>
          <div>
            <h3 className={styles.card1__title}>Confirmed</h3>
            <h1 className={styles.card1__hasil}>{konfirmasi}</h1>
          </div>
        </div>

        <div className={styles.card2}>
          <div>
            <h3 className={styles.card2__title}>Recovered</h3>
            <h1 className={styles.card2__hasil}>{sembuh}</h1>
          </div>
        </div>

        <div className={styles.card3}>
          <div>
            <h3 className={styles.card3__title}>Dead</h3>
            <h1 className={styles.card3__hasil}>{mati}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;