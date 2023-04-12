import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css"
import Alert from "../Alert/Alert";
// import Error from "../Error/Error";

// Menangkap props
function AddMovieForm(props){ 
const {movies, setMovies} = props; 

const [title, setTitle] = useState(""); 
const [date, setDate] = useState(""); 
const [poster, setPoster] = useState(""); 
const [type, setType] = useState(""); 

  // Membuat state error 
  const [isTitleError, setIsTitleError] = useState(false); 
  const [isDateError, setIsDateError] = useState(false); 
  const [isPosterError, setIsPosterError] = useState(false); 
  const [isTypeError, setIsTypeError] = useState(false); 
   
   
  function handleInputChange(e){ 
  setTitle(e.target.value) 
} 
  function handleInputDate(e){ 
  setDate(e.target.value) 
  } 
  function handleInputPoster(e){ 
  setPoster(e.target.value) 
  } 
  function handleInputType(e){ 
  setType(e.target.value) 
  } 
   
function handleSubmit(e){ 
  // supaya data yang disubmit tidak ter refresh 
  e.preventDefault(); 
   
  // Mengecek kondisi benar atau salah oada input form 
  if(title === ""){ 
  setIsTitleError(true); 
  } 
  else if (date === ""){ 
  setIsDateError(true); 
  } 
  else if (poster === ""){ 
  setIsPosterError(true); 
  } 
  else if (type === ""){ 
  setIsTypeError(true); 
  } 
  // jika tidak error langsung di push data movi yang baru nya 
  else{ 
  const movie = { 
  id : nanoid(), 
  title :title, 
  year : date, 
  type : type, 
  poster : poster, 
  }; 
  // console.log(newMovie); 
  setMovies([...movies, movie]); 
   
  // set errornya jadi false, maka akan dikirim data diatas yang berhasil 
    setIsTitleError(false); 
    setIsDateError(false); 
    setIsPosterError(false); 
    setIsTypeError(false);
  } 
  } 
    return(
        <div className={styles.container}>
            <section className={styles.AddMovie}>
                <div className={styles.AddMovie__left}>
                    <img className={styles.AddMovie_img}src="https://picsum.photos/600/400" alt="placeholder"></img>
                </div>
                <div className={styles.AddMovie__right}>
                    <h2 className={styles.title1}>Add Movie</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div className={styles.labeltitle}>
                            <label className={styles.labeltitle}>Title</label><br/>
                            <input type="text" id="text" name="text" className={styles.inputtitle} value={title} onChange={handleInputChange}/>
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <label htmlFor="year" className={styles.labelyear}>Year</label>
                            <input type="text" id="text" name="text" className={styles.inputyear} value={date} onChange={handleInputDate}/>
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className="{style.poster}">
                          <label For="poster">Link</label> <br/>
                          <input type="url" id="poster" name="poster" className="{style.input__poster}" value={poster} onChange={handleInputPoster} />
                          {isPosterError && <Alert>Link Wajib Diisi</Alert>}
                          <select name="type" id="type" className={styles.type} value={type} onChange={handleInputType}>
                            <option value="action">Action</option>
                            <option value="horor">Horor</option>
                            <option value="comedy">Comedy</option>
                            <option value="romance">Romance</option>
                          </select>
                          {isTypeError && <Alert>Type Wajib Diisi</Alert>}
                        </div>
                        <br/>
                        <button type="submit" className={styles.button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;