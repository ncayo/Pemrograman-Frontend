import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css"
import Alert from "../Alert/Alert";

// Menangkap props
function AddMovieForm(props){ 
const {movies, setMovies} = props; 

// membuat state object
const [formData, setFormData]= useState({
  title:"",
  date:"",
  poster:"",
  type:"",
});

const [ isSalah, setIsSalah ] = useState({
  title:"",
  date:"",
  poster:"",
  type:"",
});


// membuat function handleChange
function handleChange(e){
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });

  setIsSalah({
    ...isSalah,
    [name]: value,
  });
}   
  const { title, date, poster, type } = formData;  

function validate(){
  const error = {};

  if(title === ""){ 
    error.title = true;
    } 
  if (date === ""){ 
    error.date = true;
    } 
  if (poster === ""){ 
    error.poster = true;
    } 
  if (type === ""){ 
    error.type = true;
    }

  setIsSalah(error);
  if(Object.keys(error).length > 0 ){
    return false;
  }
  return true;
}

function addMovie(){
  const movie = { 
    id : nanoid(), 
    title :title, 
    year : date, 
    type : type, 
    poster : poster, 
    }; 
    // console.log(newMovie); 
    setMovies([...movies, movie]); 
}

function handleSubmit(e){ 
  // supaya data yang disubmit tidak ter refresh 
  e.preventDefault(); 

  validate() && addMovie()
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
                            <input type="text" id="text" name="title" className={styles.inputtitle} value={title} onChange={handleChange}/>
                            {isSalah.title ? (<Alert>Title Wajib Diisi</Alert>) : ""}
                        </div>
                        <div>
                            <label htmlFor="year" className={styles.labelyear}>Year</label>
                            <input type="text" id="text" name="date" className={styles.inputyear} value={date} onChange={handleChange}/>
                            {isSalah.date ? (<Alert>Date Wajib Diisi</Alert>) : ""}
                        </div>
                        <div className="{style.poster}">
                          <label For="poster">Link</label> <br/>
                          <input type="url" id="poster" name="poster" className="{style.input__poster}" value={poster} onChange={handleChange} />
                          {isSalah.poster ? (<Alert>Link Wajib Diisi</Alert>) : ""}

                          <select name="type" id="type" className={styles.type} value={type} onChange={handleChange}>
                            <option value="action">Action</option>
                            <option value="horor">Horor</option>
                            <option value="comedy">Comedy</option>
                            <option value="romance">Romance</option>
                          </select>
                          {isSalah.type ? ( <Alert>Type Wajib Diisi</Alert>) : "" }
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