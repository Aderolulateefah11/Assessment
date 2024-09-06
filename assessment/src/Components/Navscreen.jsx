
import styles from"./Nav.module.css"
import Arrow from "../Images/Arrow.png"
import Logo from "../Images/Logo.png"
import Icon1 from "../Images/Icons1.png"

export default function Navscreen(){
    return (
    <div className={styles.Barss}>
            <div className={styles.Bar}>
                <p className={styles.webkit}>This page is included in a free SaaS Website Kit. <a className={styles.kitlink}>
                View the complete Kit <img className={styles.kitimg} src={Arrow} /></a></p>
            </div>
            <div className={styles.context}>
               <div className={styles.logo}>
                  <img src={Logo}  alt=""/>
                </div>
                <div>
                 <header className={styles.header}>
                     <nav  className={styles.nav}>
                       <img className={styles.Icon1}  src={Icon1} alt="icon" />
                       <ul className={styles.navlist}>
                        <li className={styles.list}>
                           <a href="Navscreen">about</a>
                        </li>
                       <li className={styles.list}>
                          <a href="Features" >features</a>
                        </li>
                       <li className={styles.list}>
                          <a href="Customers">Customers</a>
                       </li>
                      <li className={styles.list}>
                          <a href="Updates">Updates</a>
                      </li>
                      <li className={styles.list}>
                         <a href="help">Help</a>
                      </li>
                      <button className={styles.help} >
                         <a  className={styles.helplink} href="free">Get for free</a>
                      </button>
                     
                 </ul>
                  </nav> 
                  </header> 
                 </div>
            </div> 
            
    </div>
    )
}