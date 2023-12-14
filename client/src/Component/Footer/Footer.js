import "./Footer.css"
import { Link } from 'react-router-dom'
import showToast from 'crunchy-toast'
import MapImg from "../../views/Home/img/ICON/google-maps.png"
import GmailImg from "../../views/Home/img/ICON/gmail (1).png"
import ContactImg from "../../views/Home/img/ICON/telephone-call.png"


function footerContact()
{
   showToast('Thanku For Contacting Us🙏','success', 3000);
}
function Footer()
{
  
  return(

    <>

<section id="footer">

<div className="container">

  <div className="row">

    <div className="col-md-4 footer-box">
      <p><b>Quick Links</b></p>
      
        <h5>
          <Link to="/" className="footer-quick-link">Home</Link>
        </h5>
   
   
       <h5>
        <Link to="/WomensWear" className="footer-quick-link">WomensWear</Link>
        </h5>
    

   
        <h5> 
          <Link to="/MensWear"  className="footer-quick-link">MensWear</Link>
        </h5>
    

    
      <h5> 
        <Link to="/KidsWear" className="footer-quick-link">KidsWear</Link>
      </h5> 

      <h5> 
        <Link to="/Login" className="footer-quick-link">Login</Link>
      </h5> 

      <h5> 
        <Link to="/Signup" className="footer-quick-link">signup</Link>
      </h5> 
 

    
    </div>

    <div className="col-md-4 footer-box">
      <p><b>Address</b></p>
      <p>
        <img src={MapImg} className="direction" alt=""/>
         Trade Centre,Banglore</p>
      <p>
        <img src={ContactImg}  className="direction" alt=""/>
         +9110020210210</p>
      <p>
        <img src={GmailImg}  className="direction" alt=""/> Clothing56@gmail.com</p>
    </div>

    

    <div className="col-md-4 footer-box">
       <div className="Faq-text">
       <p><b>Contact</b></p>
       </div>
      
      <input type="email" placeholder="Enter email" className="form-control"/>
      <input type="text" className="form-control" placeholder="Any question"  />
      <button type="button" className="btn btn-primary" id="submit-btn"onClick={footerContact}>Submit</button>
    </div>
  </div>


  <hr/>
  
</div>
</section>

    
    </>
  )
  
}

export default Footer
          