import Ellipse9 from "../Images/Ellipse9.png"
import Ellipse8 from "../Images/Ellipse8.png"
import Ellipse6 from "../Images/Ellipse6.png"
import Ellipse1 from "../Images/Ellipse1.png"
import Ellipse3 from "../Images/Ellipse3.png"
import Ellipse5 from "../Images/Ellipse5.png"
import Ellipse11 from "../Images/Ellipse11.png"
import Ellipse2 from "../Images/Ellipse2.png"
import Ellipse4 from "../Images/Ellipse4.png"
import Arrow from "../Images/Arrow.png"
import styles from "./Testimonials.module.css"
import emojistar from "../Images/emojistar.png"
import helix2 from "../Images/helix2.png"


export default function Testimonials(){
    return (
        <div className={styles.container}>
            <div className={styles.Testimonialsbutton}>
                <button className={styles.Testimonialsbuttons}>Testimonials</button>
                <h1>What our users say</h1>
            </div>
            <div className={styles.allcontent}>
                <div className={styles.firstcontent}>
                    <div className={styles.first}>
                        <p>As a seasoned designer always</p>
                        <p>on the lookout for innovative</p>
                        <p>tools,Framer.con instantly</p>
                        <p>grabbed my attention</p>
                        <img src={Ellipse9} alt="Ellipse9" />
                        <p>Alex Rivera</p>
                        <p>@jamietechguru00</p>
                    </div>
                    <div className={styles.second}>
                        <p>I was amazed at how quickly we</p>
                        <p>were able to integrate this app</p>
                        <p>into our work flow</p>
                        <img src={Ellipse8} alt="Ellipse8" />
                        <p>Casey Jordan</p>
                        <p>@Caseyj</p>
                    </div>
                    <div className={styles.third}>
                        <p>Adopting this app for our team</p>
                        <p>has streamlined our project</p>
                        <p>management and improved</p>
                        <p>communication across the</p>
                        <p>board</p>
                        <img src={Ellipse6} alt="Ellipse6" />
                        <p> Jordan Petals</p>
                        <p>@jpetaldesign</p>
                    </div>
                </div>
                <div className={styles.secondcontent}>
                   <div className={styles.first}>
                        <p>Our team productivity has</p>
                        <p>skyrocketed since we started</p>
                        <p>usig this tools</p>
                        <img src={Ellipse1} alt="Ellipse1" />
                        <p> Josh Smith</p>
                        <p>@jjsmith</p>
                      </div>
                      
                      <div className={styles.second}>
                        <p> Planning and executing events</p>
                        <p>has never been easier.This app</p>
                        <p>helps me keep track of all the</p>
                        <p>moving parts,ensuring nothin</p>
                        <p>splits through the cracks</p>
                        <img src={Ellipse3} alt="Ellipse3" />
                        <p>Taylor Kim</p>
                        <p>@taylorkimm</p>
                    </div>
                    
                    <div className={styles.third}>
                        <p>With this app,we can easily</p>
                        <p>assign tasks,track progress,and</p>
                        <p>manage documents all in one</p>
                        <p>place</p>
                        <img src={Ellipse5} alt="Ellipse5" />
                        <p>Sam Dawson</p>
                        <p>@dawsontechtips</p>
                    </div>    
                </div>

                <div className={styles.thirdcontent}>
                <div className={styles.first}>
                        <p>This app has completely</p>
                        <p>transformed how I manage my</p>
                        <p>projects and deadlines</p>
                        <img src={Ellipse11} alt="Ellipse11" />
                        <p>Morgan Lee</p>
                        <p>@morganleewhiz</p>
                    </div> 
                    <div className={styles.second}>
                        <p>The customizability and</p>
                        <p>integration capabilities of this</p>
                        <p>app are top-notch</p>
                        <img src={Ellipse2} alt="Ellipse2" />
                        <p>Riley Smith</p>
                        <p>@rileysmith1</p>
                    </div> 
                    <div className={styles.third}>
                        <p>Its user-friendly interface and</p>
                        <p>robust features support our</p>
                        <p>diverse needs</p>
                        <img src={Ellipse4} alt="Ellipse4" />
                        <p>Casey Harper</p>
                        <p>@casey09</p>
                    </div>    
                </div>
            </div>
            <div className={styles.lastcontent}>
                <div className={styles.context}>
                <h1>Sign up for free today</h1>
                <p>Celebrate the joy of accomplishment with an app designed</p>
                <p>to track your pogress and motivate your efforts</p>
                <div className={styles.learnarrow}>
                <button className={styles.free}>Get for free</button>
               <button className={styles.learn}>Learn more <img  className={styles.arrow}src={Arrow} alt="" /></button>
                </div>
                </div>
                
                
                <div>
                    <div className={styles.emojistar}>
                        <img src={emojistar} alt={emojistar} />
                    </div>
                    <div className={styles.helix2}>
                        <img src={helix2} alt={helix2} />
                    </div>
                </div>
            </div>
        </div>
    )
}