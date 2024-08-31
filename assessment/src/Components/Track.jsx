import Tick from "../Images/Tick.png"
import Icons from "../Images/Icons.png"
import styles from "./Track.module.css"



export default function Track(){
    return(
        <div>
            <div className={styles.bigcontainer}>
                <div className={styles.boostcontainer}>
                    <button className={styles.boostbutton}>Boost your produvtivity</button>
                    <h1>A more effective way</h1>
                    <h1 className={styles.track}>to track progress</h1>
                    <p>Effortlessly turn your ideas into a fully fuctional,</p>
                    <p>responsive,no-code SaaS website in just minutes with</p>
                    <p>the set free Components for framer</p>
                </div>
                <div className={styles.alldiv}>
                <div className={styles.firstdiv}>
                    <p>free</p>
                    <h1>$0</h1>
                    <p className={styles.monthly}>/monthly</p>
                    <button className={styles.Sign}>Get started for free</button>
                    <p><img className={styles.Tick} src={Tick} alt="Tick"/>Up to 5 project members</p>
                    <p><img className={styles.Tick} src={Tick} alt="Tick"/>Unlimited tasks and projects</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>2GB storage</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Integrations</p>
                    <p><img className={styles.Tick} src={Tick} alt="Tick"/>Basic support</p>

                </div>
                <div className={styles.seconddiv}>
                <p>Pro</p>
                <button className={styles.buttonpopular}>Most popular</button>
                    <h1>$9</h1>
                    <p className={styles.monthly}>/monthly</p>
                    <button className={styles.sign}>Sign up now</button>
                    <p><img className={styles.Tick} src={Icons} alt="Tick"/>Up to 50 project members</p>
                    <p><img className={styles.Tick} src={Icons} alt="Tick"/>Unlimited tasks and projects</p>
                    <p><img className={styles.Tick}src={Icons} alt="Tick"/>50GB storage</p>
                    <p><img className={styles.Tick} src={Icons} alt="Tick"/>Integrations</p>
                    <p><img className={styles.Tick} src={Icons} alt="Tick"/>Priority support</p>
                    <p><img className={styles.Tick} src={Icons} alt="Tick"/>Advanced support</p>
                    <p><img className={styles.Tick}src={Icons} alt="Tick"/>Export support</p>
                </div>
                <div className={styles.thirddiv}>
                <p>Business</p>
                    <h1>$19</h1>
                    <p  className={styles.month}>/monthly</p>
                    <button className={styles.Sign}>Sign up now</button>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Up to 5 project members</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Unlimited tasks and projects</p>
                    <p><img className={styles.Tick} src={Tick} alt="Tick"/>200GB storage</p>
                    <p><img className={styles.Tick} src={Tick} alt="Tick"/>Integrations</p>
                    <p><img className={styles.Tick} src={Tick} alt="Tick"/>Dedicated account manager</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Custom fields</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Advanced analytics</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Export capabilities</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>API access</p>
                    <p><img className={styles.Tick}src={Tick} alt="Tick"/>Advanced security features</p>
                </div>
                </div>
            </div>
        </div>
    )
}