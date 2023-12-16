import React from 'react'
import "./WomensWear.css";
import Image from './WomensWear images/poster-1.jpg';
import Img1 from './WomensWear images/Top-1.jpg';
import Img2 from './WomensWear images/Top-2.jpg';
import Img3 from './WomensWear images/Top-3.jpg';
import Img4 from './WomensWear images/Top-4.jpg';
import Img5 from './WomensWear images/T-shirt.jpg';
import Img6 from './WomensWear images/T-shirt2.jpg';
import Img7 from './WomensWear images/T-shirt3.jpg';
import Img8 from './WomensWear images/T-shirt4.jpg';
import Img9 from './WomensWear images/Jeans1.jpg';
import Img10 from './WomensWear images/Jeans2.jpg';
import Img11 from './WomensWear images/Jeans3.webp';
import Img12 from './WomensWear images/Jeans4.webp';
import Img13 from './WomensWear images/Jeans5.jpg';
import Img14 from './WomensWear images/Jeans6.jpg';
import Img15 from './WomensWear images/Jeans7.jpg';
import Img16 from './WomensWear images/Jeans8.jpg';
import Img17 from './WomensWear images/western1.jpg';
import Img18 from './WomensWear images/western2.jpg';
import Img19 from './WomensWear images/western3.jpg';
import Img20 from './WomensWear images/western4.webp';
import Img21 from './WomensWear images/lahenga.jpg';
import Img22 from './WomensWear images/kurti1.jpg';
import Img23 from './WomensWear images/kurti2.jpg';
import Img24 from './WomensWear images/kurti3.jpg';


function WomensWear() {
  return (
    <div>
      <div>
      <img src={Image} className="poster-img" alt='' />
      <button className="btn">Shop now</button>
      </div>
      <h1 className="Heading"><u>Top's & T-Shirt</u></h1>

      <section>
      <div className="Container">
        <div className="cont">
         <img src={Img1} alt='' />
         <div className="Text">
         <span>Product1</span><br></br>
         <span>Rs.500</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img2} alt='' />
        <div className="Text">
         <span>Product2</span><br></br>
         <span>Rs.400</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img3} alt='' />
        <div className="Text">
         <span>Product3</span><br></br>
         <span>Rs.700</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img4} alt='' />
        <div className="Text">
         <span>Product4</span><br></br>
         <span>Rs.800</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
       </div>
       </div>

       <div className="Container">
        <div className="cont">
         <img src={Img5} alt='' />
         <div className="Text">
         <span>Product5</span><br></br>
         <span>Rs.300</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img6} alt='' />
        <div className="Text">
         <span>Product6</span><br></br>
         <span>Rs.450</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img7} alt='' />
        <div className="Text">
         <span>Product7</span><br></br>
         <span>Rs.350</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img8} alt='' />
        <div className="Text">
         <span>Product8</span><br></br>
         <span>Rs.299</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
       </div>
       </div>
      </section>

      <h1 className="Heading"><u>jeans</u></h1>

      <section>
      <div className="Container">
        <div className="cont">
         <img src={Img9} alt='' />
         <div className="Text">
         <span>Ankle Length</span><br></br>
         <span>Rs.700</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img10} alt='' />
        <div className="Text">
         <span> Mom fit jeans</span><br></br>
         <span>Rs.800</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img11} alt='' />
        <div className="Text">
         <span>Slim fit</span><br></br>
         <span>Rs.700</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img12} alt='' />
        <div className="Text">
         <span>Skinny jeans</span><br></br>
         <span>Rs.800</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
       </div>
       </div>

       <div className="Container">
        <div className="cont">
         <img src={Img13} alt=''/>
         <div className="Text">
         <span>Bootcut</span><br></br>
         <span>Rs.600</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img14} alt='' />
        <div className="Text">
         <span>Straight fit</span><br></br>
         <span>Rs.800</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img15} alt='' />
        <div className="Text">
         <span>Jogger's</span><br></br>
         <span>Rs.350</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img16} alt='' />
        <div className="Text">
         <span>mom jeans</span><br></br>
         <span>Rs.400</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
       </div>
       </div>
      </section>
      
      <h1 className="Heading"><u>Western And Traditional dresses</u></h1>

      <section>
      <div className="Container">
        <div className="cont">
         <img src={Img17} alt='' />
         <div className="Text">
         <span>Bodycon Maxi dress</span><br></br>
         <span>Rs.400</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img18} alt='' />
        <div className="Text">
         <span>Plated Bodycon Dress</span><br></br>
         <span>Rs.500</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img19} alt='' />
        <div className="Text">
         <span>A-line dress</span><br></br>
         <span>Rs.600</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img20} alt='' />
        <div className="Text">
         <span>Split Bodycon dress</span><br></br>
         <span>Rs.12,00</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
       </div>
       </div>


       <div className="Container">
        <div className="cont">
         <img src={Img21} alt='' />
         <div className="Text">
         <span>Lahenga Choli</span><br></br>
         <span>Rs.2,890</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img22} alt='' />
        <div className="Text">
         <span> GoSriKi Women Kurta<br></br> With Dupatta</span><br></br>
         <span>Rs.800</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img23} alt='' />
        <div className="Text">
         <span>A-line Kurta</span><br></br>
         <span>Rs.900</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
        </div>

        <div className="cont">
        <img src={Img24} alt='' />
        <div className="Text">
         <span>Embroidery Long Kurti </span><br></br>
         <span>Rs.1000</span><br></br><br></br>
         <a href="/buy/:id" className="button">Buy</a>
         </div>
       </div>
       </div>
      </section>

   </div>
  )
}

export default WomensWear

