import React from 'react'
import { FormattedMessage } from 'react-intl';
import styles from "./css/more.module.css";

const More = ({onClick}) => {
     const knowMore = () =>{
         if(onClick){
            onClick()
         }
     }
    return (
    <button onClick={knowMore} className={styles.knowMore}><FormattedMessage id="know" /></button>
    )
}

export default More
