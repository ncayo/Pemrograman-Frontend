import styles from "./Provinsi.module.css";
import DataProv from "../Dataprovinsi";
import { nanoid } from "nanoid";

function Provinsi(props) {
  const { dt_provinsi } = props;
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.judul}>Provinsi</h2>
        <p className={styles.judul__description}>
          Data Covid Berdasarkan Provinsi
        </p>
      </div>

      <div className={styles.tabel__container}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>

            </tr>
          </thead>
          <tbody>
            {dt_provinsi.provinces.map(function (province, i) {
              return (
                <DataProv key={nanoid()} nomer={++i} dt_provinsi={province} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Provinsi;
