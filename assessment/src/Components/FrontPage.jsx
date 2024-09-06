import cylinder  from "../Images/cylinder.png"
import Visualss  from "../Images/Visualss.png"
import halftorus from "../Images/halftorus.png"
import Arrow from "../Images/Arrow.png"

import styles from "./frontPage.module.css"



export default  function FrontPage() {
    return (
        < div className={styles.allcontainer}>

        
       <div className={styles.firstcontainer}>
          <div className={styles.cylinder}>
             <img  src={cylinder} alt=""/>
          </div>
          
            <div  className={styles.versions}>
             <button >version 2.0 is here</button>
           </div>
           <div>
             <h1 className={styles.pathway}>Pathway to</h1>
             <h1 className={styles.productivity}>productivity</h1>
             <p p className={styles.paragraph}>celebrate the joy of accomplishment with an </p>
             <p className={styles.paragraph}>app designed to track your progress,motivate </p>
             <p className={styles.paragraph}>your efforts, and celebrate your sucesses.</p>
           </div>
           <div>
            <button className={styles.freepara}> <a className={styles.free} href="free">Get for free</a></button>
                <a className={styles.learn} href="learn">Learn more 
                <img src={Arrow} className={styles.arrows} alt="Arrow"/></a>
             </div>
       </div>
       <div className={styles.secondcontainer}>
         <div className={styles.Visualss}>
           <img src={Visualss} alt="" />
          </div>  
           <div className={styles.halftorus}>
              <img src={halftorus} alt="halftorus" />
            </div> 
       </div> 
        </div>
        
    ) 
}
   
