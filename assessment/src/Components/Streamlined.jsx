

import styles from "./Streamlined.module.css"
import cubehelix from "../Images/cubehelix.png"
import helix from "../Images/helix.png"





export default function VisualImage(){
    return (
        <div>
        <div className={styles.contentss}>
            <div className={styles.firstcontent}>
              <button className={styles.buttonneed}>Everything you need</button>
             <h1>Streamlined for easy</h1>
             <h1 className={styles.management}>management</h1>
             <p>Enjoy customized lists,team work tools,and smart </p>
             <p>tracking all in one place.Set tasks,get reminders,and</p>
             <p>see your progress simply and quickly</p>
            </div>
           <div className={styles.helixcontainer}>
            
           <div className={styles.cubehelix}>
                <img src={cubehelix}  alt="cubehelix"/>
                <h2>Integration ecosystem</h2>
                <p>Enhance your productivity by connecting with </p>
                <p>your favorite tools,keeping all your</p>
                <p>essentials in one place</p>
            </div>
            <div className={styles.helix}>
                <img src={helix} alt="helix" />
                <h2>Goal setting and tracking</h2>
                <p>Define and track your goals,breaking down</p>
                <p>objectives into acheivable tasks to keep your</p>
                <p>targets in sight</p>
            </div>
           </div>
           
        </div>
           
           
        </div>
    )
}