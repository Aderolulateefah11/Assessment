import ProductImage from "../Images/ProductImage.png"
import Arrow from "../Images/Arrow.png"
import Ecosystem from "../Images/Ecosystem.png"
import Target from "../Images/Target.png"
import Lock from "../Images/Lock.png"
import Notifications from "../Images/Notifications.png"
import styles from "./Launch.module.css"
import pyramid1 from "../Images/pyramid1.png"
import torus1 from "../Images/torus1.png"


export default function Launch(){
    return (
        <div className={styles.bigcontainer}>
            <div className={styles.content}>
             <div className={styles.context}>
               <button className={styles.boost}>Boost your productivity</button>
               <h1 className={styles.h1}>A more effective way</h1>
               <h1 className={styles.hh1}> to track  progress</h1> 
            
               <p>Effortlessnessly turn your ideas into a fully functional,</p>
               <p>responsive,no-code SaaS website in just minutes with</p>
               <p>the set of free components for Farmer</p>
         </div>
           
            <div>
           </div>
         <div className={styles.allContent}>
            <div className={styles.ProductImage}>
             <img src={ProductImage} alt=""/>
           </div>
             <div className={styles.pyramid}>
                <img src={pyramid1} alt="pyramid" />
             </div>
             <div className={styles.torus}>
                <img src={torus1} alt="torus" />
             </div>
           <div>
            <footer>
                <div className={styles.footer}>
                <div className={styles.Ecosystem}>
                    <img src={Ecosystem} alt="" />
                    <h3>Integration ecosystem</h3>
                    <p>Track your progress and motivate</p>
                    <p>your efforts everyday</p>
                    <button >Learn more</button>
                    <div>
                    <img className={styles.arrow} src={Arrow}  alt="Arrow"/> 
                    </div>
                </div>
                <div className={styles.Target}>
                <img src={Target} alt="" />
                    <h3>Goal setting and tracking</h3>
                    <p>Set and track goals with </p>
                    <p>manageable task breakdowns.</p>
                    <div>
                    <button >Learn more</button>
                    <div>
                    <img className={styles.arrows} src={Arrow}  alt="Arrow"/>
                    </div>
                    </div>
                </div>
                <div className={styles.Lock}>
                <img src={Lock} alt="Lock" />
                    <h3>Secure data encryption</h3>
                    <p>Ensure your data's safety with top</p>
                    <p>-tier encryption.</p>
                    <button>Learn more </button>
                    <div><img className={styles.arrow} src={Arrow}  alt="Arrow"/></div>
                </div>
                <div className={styles.Notifications}>
                <img src={Notifications} alt="Notifications" />
                    <h3>Customizable notifications</h3>
                    <p>Get alerts on tasks and deadlines</p>
                    <p> that matter most.</p>
                    <div>
                    <button>Learn more </button> 
                    <div>
                    <img className={styles.arrow} src={Arrow}  alt="Arrow"/>
                    </div>
                    
                    </div>
                   
                </div>
                </div>
              
            </footer>
           </div>
           </div>
            </div>
        </div>
    )
}