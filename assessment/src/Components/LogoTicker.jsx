import LogoTicks from "../Images/LogoTicks.png"
import styles from "./LogoTicker.module.css"
export default function LogoTicker(){
    return (
        <div>
           <div className={styles.LogoTicker}>
              <img src={LogoTicks}  alt="logo"/> 
                </div> 
        </div>
    )
}
