
import emojistar from "../Images/emojistar.png"
import helix2 from "../Images/helix2.png"
import Arrow from "../Images/Arrow.png"
import styles  from "./Signup.module.css"


export default function Signup(){
    return <div>
           <div className={styles.lastcontent}>
                <div className={styles.context}>
                  <h1 className={styles.sign}>Sign up for free today</h1>
                  <p>Celebrate the joy of accomplishment with an app designed</p>
                  <p>to track your pogress and motivate your efforts</p>
                  <div className={styles.learnarrow}>
                  <button className={styles.free}>Get for free</button>
                  <button className={styles.learn}>Learn more <img  className={styles.arrow}src={Arrow} alt="" /></button>
                </div>
                <div className={styles.emojistar}>
                        <img src={emojistar} alt={emojistar} />
                    </div>
                    <div className={styles.helix2}>
                        <img src={helix2} alt={helix2} />
                    </div>
                </div>
            </div>
                
    </div>
}