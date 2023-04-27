import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AddFormCovid from "../components/CovidForm/CovidForm";
import Card from "../components/Card/card";
import data from "../utils/constants/provinces";
import Provinsi from "../components/Provinsi/Provinsi";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

function Main() {
  const [dt_provinsi, setDataProvinsi] = useState(data);
  return (
    <main>
      <Hero />
      <Card />
      <Provinsi dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
      <AddFormCovid dt_provinsi = {dt_provinsi} setDataProvinsi={setDataProvinsi}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer/>
    </>
  );
}

export default Home;
