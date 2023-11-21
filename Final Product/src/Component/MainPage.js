import React from "react";
import "./MainPage.css";
import img1  from "../Assets/Images/Chairman--Ashwani-Kumarjpg-dd7c5c19a853db9e6e0e8b9fab4bad65.jpg";
import img2  from "../Assets/Images/MSjpg-3d0873c01fc24f067d483021570f13c5.jpg"
import satymev from "../Assets/Images/satymev.png";
import img10  from "../Assets/Images/2ac5127bf0b5975f414662fdd29298b6.jpg"
import img11  from "../Assets/Images/484fb69cfce8ac6171815667868624c1.jpg"
import img12  from "../Assets/Images/safe_disposal_waste_image.jpeg"
import img13  from "../Assets/Images/waste.jpg"
import img14  from "../Assets/Images/modi.jpeg"
import img15  from "../Assets/Images/img1.jpg"
import img16  from "../Assets/Images/bg1.jpg"
import img17  from "../Assets/Images/indi.jpg"
import img18  from "../Assets/Images/grp.webp"


const MainPage = () => {
  return (
    <>
      <div className="mains">
        <div className="frames">
          <img src={img1}/>
          <p>
            Prime Minister Shri Narendra Modi exhorted people to fulfill Mahatma
            Gandhi's vision of Clean India. The 'Swachh Bharat Abhiyan' is a
            massive mass movement that seeks to create a Clean India.
            Cleanliness was very close to Mahatma Gandhi's heart. A clean India
            is the best tribute we can pay to Bapu when we celebrate his 150th
            birth anniversary in 2019. Mahatma Gandhi devoted his life so that
            India attains 'Swarajya'. Now the time has come to devote ourselves
            towards 'Swachchhata' (cleanliness) of our motherland. The campaign
            was officially launched on 2 October 2014 at Rajghat, New Delhi by
            Prime Minister Narendra Modi. It is India's largest cleanliness
            drive to date with three million government employees and students
            from all parts of India participating in 4,043 cities, towns, and
            rural communities Municipal Corporation Manesar has taken number of
            steps to clean the city. Automatic sweeping machines are hired to
            clean the sector roads and number of sweeping team are constituted
            to clean the inner roads. Door to Door waste collection tender work
            is under process through which the waste will be collected from door
            step.
          </p>
          <img src={img2}/>
        </div>
        <div className="Swachh-pledge">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" href="#collapse1">
                <i className="bx bx-user"></i>
                <span className="links_name"> VIDEO INSTRUCTIONS </span>
              </a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <p>
              
              1. Before uploading the video please check the type of your video
              <br />
              mp4 <br /> mpeg3 <br />
              2. video should be between 50-80kb
              <br />
              3. Ensure proper lighting
              <br />
              4. Choose the right background
              <br />
              5. Maintain eye contact
              <br />
              6. Ensure high quality audio
              <br />
              7. Dress appropriately
              <br />
              8. Follow the ground rules for participant interaction
              <br />
            </p>
          </div>
        </div>

        <div className="Pledge-to-segregate">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" href="#collapse2">
                <i className="bx bx-cart-alt"></i>
                <span className="links_name">DO'S AND DON'Ts</span>
              </a>
            </h4>
          </div>
          <div id="collapse2" className="panel-collapse collapse">
            <p>
              
              1. Don’t forget to mute yourself if you are not speaking
              <br />
              2. Don't be late or appear unprepared
              <br />
              3. Don't wait until the last minute to test your technology
              <br />
              4.Don't Leave Technology Testing Till The Last Minute 5. Don't
              include more than two people in the video
            </p>
          </div>
        </div>
        <div className="school_nav">
          <nav>
            <div className="total1">
              8,096 <br />
              SCHOOLS
            </div>
            <div className="total2">
              2,917,646 <br />
              STUDENTS
            </div>
            <div className="total3">
              <span className="links_name">
               1253,55 have Already <br />
                UPLOADED THE VIDEO
              </span>
            </div>
          </nav>
        </div>

        <div className="products" id="products">
          <h1>Swachh Abhiyan</h1>
          <div className="box">
            <div className="card">
              <div className="image">
                <img src={img10}/>
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img11} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img12} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img13} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img14} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img15} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img16} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={img17} />
              </div>

              <div className="products_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <h3>location:</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
