import styles from "./page.module.css";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./comp/Nav/page";
import Home from "./comp/Home/page";


export default function Page() {
  return (
    
    <div className={styles.container}>

<Home/>


      </div>
  );
}
