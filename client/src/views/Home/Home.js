import React from 'react'
import "./Home.css"
// import Card from '../../Component/Card/Card'
import Navbar from '../../Component/Navbar/Navbar'
import Img1 from "./img/carsoulimg.jpg"
import Img2 from "./img/carsoulimg2.webp"
import Img3 from "./img/carsoulimg3.jpg"
import Img4 from "./img/carsoulimg4.jpg"
import Img5 from "./img/carsoulimg5.jpg"
import womenImg  from "./img/women1.webp"
import womenImg2 from "./img/women2.webp"
import womenImg3 from "./img/women3.jpg"
import { Link } from 'react-router-dom'
import MenImg from "./img/mens1.jpg"
import MenImg2 from "./img/mens2.jpg"
import MenImg3 from "./img/mens3.jpg"
import kidsImg from "./img/kids1.jpg"
import kidsImg2 from "./img/kids2.jpg"
import kidsImg3 from "./img/kids3.jpg"
import winterImg from "./img/winter1.jpg"
import winterImg2 from "./img/winter2.webp"
import winterImg3 from "./img/winter3.jpeg"
import Footer from "../../Component/Footer/Footer"
import GitImg from "./img/ICON/github-sign.png"
import GmailImg from "./img/ICON/gmail (1).png"
import GoogleImg from "./img/ICON/google-maps.png"
import InstaImg from "./img/ICON/instagram (3).png"

   

function Home() {
  return (
    <>
       <Navbar/>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={Img1} class="d-block w-100" alt=''/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={Img2}class="d-block w-100" alt=''/>
                    </div>
                    <div class="carousel-item">
                    <img src={Img3} class="d-block w-100" alt=''/>
                    </div>
                    <div class="carousel-item">
                    <img src={Img4} class="d-block w-100" alt=''/>
                    </div>
                    <div class="carousel-item">
                    <img src={Img5} class="d-block w-100" alt=''/>
                    </div>
                    
                
                    
                    
                    

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

        </div>

        

                <div className='Brand-Head'>
                  <h1>Womens Collection</h1>
                
                </div>
         
                 
                  <br/>
                
               <div className=" text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={womenImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Onepiece</h5>
                                <p class="card-text">Custom Women Fashion Clothing, Size: S-XXL</p>
                                <p className="card-text">From ₹999</p>
                            </div>

                            <div class="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={womenImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Women Gown Dark Blue, Grey Dress</h5>
                                <p class="card-text">2.5k Resolution | Dholiwal Fashion </p>
                                <p class="card-text">From ₹3,999 </p>

                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div className="card" index="width: 18rem;">
                            <img src={womenImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">TIOR</h5>
                                <p className="card-text">V-Neck Fit & Flare Dress</p>
                                <p className="card-text">From ₹14,499</p>
                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                     </div>

              </div>
           </div>
          
                    <Link to="/WomensWear" className="btn41-43 btn-42">
                        View 
                    </Link>
                    <br/>

           <div className='Brand-Head'>
                  <h1>Mens Collection
                  </h1>
                </div>

                 
                  <br/>
             <div className="container text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={MenImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Two Button Suit Jacket</h5>
                                <p class="card-text">Black  Suit Jacket, Regular Fit</p>
                                <p className="card-text">From ₹1,999</p>
                            </div>

                            <div class="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={MenImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Formal Pants Shirt Combinations</h5>
                                <p class="card-text">Mens Attractive Outfits </p>
                                <p class="card-text">From ₹2999 </p>

                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div className="card" index="width: 18rem;">
                            <img src={MenImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">5 Coolest Street Ready Outfits For Men</h5>
                                <p className="card-text">5k Resolution</p>
                                <p className="card-text">From ₹1999</p>
                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                     </div>

              </div>
           </div>
               <br/>

        <Link to="/MensWear" className="btn41-43 btn-42">
                 View 
        </Link>

        <br/>

        <div className='Brand-Head'>
                  <h1>Kids Collection</h1>
                </div>

                 
                  <br/>
             <div className="container text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={kidsImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">kids Custom Wholesale Big Kids Wear </h5>
                               <p className="card-text">From ₹999</p>
                            </div>

                            <div class="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={kidsImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">kids clothes</h5>
                                <p class="card-text">From ₹999 </p>

                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div className="card" index="width: 18rem;">
                            <img src={kidsImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Kids Dress(Boys)</h5>
                                <p className="card-text">From ₹1999/5 sets</p>
                            
                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                     </div>

              </div>
           </div>
               <br/>

        <Link to="/KidsWear" className="btn41-43 btn-42">
                 View 
        </Link>



        <br/>

<div className='Brand-Head'>
          <h1>Winters Collection</h1>
        </div>

         
          <br/>
     <div className="container text-center">

        <div className="row">
            <div className="col">
                
                <div class="card" index="width: 18rem;">
                    <img src={winterImg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">12 Warm Winter Outfits That Are Still Chic </h5>
                        <p class="card-text">38% off</p>
                        <p className="card-text">From ₹5,999</p>
                    </div>

                    <div class="card-body">
                       
                    </div>
                </div>

            </div>

            <div className="col">
                
            <div class="card" index="width: 18rem;">
                    <img src={winterImg2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">XGeorgette Brown Winter Clothes For Men, Casual Wear, Plain</h5>
                        <p class="card-text">35% off </p>

                        <p class="card-text">From ₹790</p>

                    </div>

                    <div className="card-body">
                       
                    </div>
                </div>

            </div>

            <div className="col">

            <div className="card" index="width: 18rem;">
                    <img src={winterImg3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 className="card-title">Winter Wear For Womens: Style Like A Fashionista And Stay Warm In Cold</h5>
                        <p class="card-text">33% off</p>

                        <p className="card-text">From ₹1,999</p>
                    
                    </div>

                    <div className="card-body">
                       
                    </div>
                </div>

             </div>

      </div>
   </div>
       <br/>

        <Link to="/" className="btn41-43 btn-42">
         View 
        </Link>

        <br/>

        <section id="social-media">

          <div class="container text-center">
            <p>FIND US ON SOCIAL MEDIA</p>
    
            <div class="social-icons">


              <a href="a"><img src={GmailImg} alt=''/></a>
              <a href="https://github.com/hemantgaikwad13/ICP5_Final_Project"><img src={GitImg} alt=''/></a>
              <a href="a">
            <img src={InstaImg} alt=''/></a>
              <a href="https://blog.hubspot.com/marketing/google-logo-history"><img src={GoogleImg} alt=''/></a>
              

              

            </div>
          </div>
         </section>
         

         
             <Footer/>

 </>
  )
}
export default Home