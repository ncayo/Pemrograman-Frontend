import styles from "./AddMovieForm.module.css"

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <section className={styles.AddMovie}>
                <div className={styles.AddMovie__left}>
                    <img className={styles.AddMovie_img}src="https://picsum.photos/600/400" alt="placeholder"></img>
                </div>
                <div className={styles.AddMovie__right}>
                    <h2 className={styles.title1}>Add Movie</h2>
                    <form>
                        <div className={styles.labeltitle}>
                            <label className={styles.labeltitle}>Title</label><br/>
                            <input type="text" id="text" name="text" className={styles.inputtitle}></input>
                        </div>
                        <div>
                            <label htmlFor="year" className={styles.labelyear}>Year</label>
                            <input type="text" id="text" name="text" className={styles.inputyear}></input>
                        </div>
                        <br/>
                        <button className={styles.button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;