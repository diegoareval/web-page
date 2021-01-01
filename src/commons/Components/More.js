import React from 'react'
import styles from "./css/more.module.css";

const More = ({onClick, title = "Conocer mas"}) => {
     const knowMore = () =>{
         if(onClick){
            onClick()
         }
     }
    return (
    <button onClick={knowMore} className={styles.knowMore}>{title}</button>
    )
}

export default More
