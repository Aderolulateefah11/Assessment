
import PropertyX from "../Images/PropertyX.png"
import PropertyInstagram from "../Images/PropertyInstagram.png"
import PropertyPinterest from "../Images/PropertyPinterest.png"
import PropertyLinkedIn from "../Images/PropertyLinkedIn.png"
import PropertyTikTok from "../Images/PropertyTikTok.png"
import PropertyYoutube from "../Images/PropertyYoutube.png"
import Default from "../Images/Default.png"
import styles from "./Footer.module.css"
export default function Footer(){
    return (
       <div>
            
            <footer >
            <div className={styles.bigcontainer}>
                <div className={styles.container}>
                    <div className={styles.divfirst}>
                      <img className={styles.Default} src={Default} alt="Default" />
                      <div className={styles.paragraph}>
                        <p>Effortlessly turn your ideas into a </p>
                         <p>fully functional,responsive,no-</p>
                          <p>code SaaSwebsite.</p>
                      </div>
                      <div className={styles.images}>
                        <img src={PropertyX} alt="X" />
                        <img src={PropertyInstagram} alt="instagram" />
                        <img src={PropertyPinterest} alt="pinterest" />
                        <img src={PropertyLinkedIn} alt="linkedln" />
                        <img src={PropertyTikTok} alt="TikTok" />
                        <img src={PropertyYoutube} alt="Youtube" />
                       </div>
                    
                    </div>
                 <div className={styles.divsecond}>
                    <div className={styles.features} >
                      <ul >
                      <h1>Product</h1>
                        <li><a className={styles.list} href="">Features</a></li>
                        <li><a className={styles.list}href="">integration</a></li>
                        <li><a className={styles.list} href="">Updates</a></li>
                        <li><a className={styles.list}href="">FAQ</a></li>
                        <li ><a className={styles.list} href="">Pricing</a></li>
                      </ul>
                    </div> 
                    <div className={styles.about}>
                        
                      <ul>
                      <h1>Company</h1>
                        <li><a className={styles.list}href="">About</a></li>
                        <li><a className={styles.list}href="">Blog</a></li>
                        <li><a className={styles.list}href="">Careers</a></li>
                        <li><a className={styles.list}href="">Manifesto</a></li>
                        <li><a className={styles.list}href="">Press</a></li>
                        <li><a className={styles.list}href="">Contact</a></li>
                      </ul>
                    </div> 
                    <div className={styles.examples}>
                     
                      <ul>
                      <h1>Resources</h1>
                        <li><a className={styles.list}href="">Examples</a></li>
                        <li><a className={styles.list}href="">Community</a></li>
                        <li><a className={styles.list}href="">Guides</a></li>
                        <li><a className={styles.list}href="">Docs</a></li>
                      </ul>
                    </div> 
                     <div className={styles.privacy}>
                        
                         <ul>
                         <h1>Legal</h1>
                          <li><a className={styles.list}href="">Privacy</a></li>
                          <li><a className={styles.list}href="">Terms</a></li>
                          <li><a className={styles.list}href="">Security</a></li>
                        </ul>
                    </div>  
                 </div>
                </div>
                </div>
            </footer>  
        </div>
    )
}