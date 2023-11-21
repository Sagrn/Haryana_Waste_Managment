import React from 'react'
import "./TypesOfUserStyle.css";
import img1 from '../../Assets/Images/WORKER.webp'
import img2 from '../../Assets/Images/GROUP.jpg'
import img3 from '../../Assets/Images/emp.png'
import img4 from '../../Assets/Images/STUDENT.avif'
import img5 from '../../Assets/Images/FARMER.jpg'
import img6 from '../../Assets/Images/HOUSEWIFE.jpg'

const TypesOfUser = () => {
  return (
    <div>
         <div className="head">
                <h1>USER TYPES</h1>
            </div>
            <section>
                <div className="row">
                    {/* Worker */}
                    <div className="column">
                        <div className="card">
                            <div className="box">
                                <img src={img1} width="300px" height="300px" alt="Worker" />
                            </div>
                            <h3>WORKER</h3>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Learn More</button>
                                <div className="dropdown-content">
                                    <a href="C:\Users\AMAN\Desktop\project\farmers.pdf" download="farmers.pdf">download PDF</a>
                                    <a href="#">Watch Video</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={img2} width="300px" height="300px" alt="GROUP" />
                            </div>
                            <h3>GROUP</h3>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Learn More</button>
                                <div className="dropdown-content">
                                    <a href="C:\Users\AMAN\Desktop\project\farmers.pdf" download="farmers.pdf">download PDF</a>
                                    <a href="#">Watch Video</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={img3} width="300px" height="300px" alt="EMPLOY" />
                            </div>
                            <h3>EMPLOY</h3>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Learn More</button>
                                <div className="dropdown-content">
                                    <a href="C:\Users\AMAN\Desktop\project\farmers.pdf" download="farmers.pdf">download PDF</a>
                                    <a href="#">Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Other user types */}
                    {/* ... Repeat the same structure for other user types */}
                    
                    
                </div>
                <div className="row">
                    {/* Worker */}
                    <div className="column">
                        <div className="card">
                            <div className="box">
                                <img src={img4} width="300px" height="300px" alt="STUDENT" />
                            </div>
                            <h3>STUDENT</h3>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Learn More</button>
                                <div className="dropdown-content">
                                    <a href="C:\Users\AMAN\Desktop\project\farmers.pdf" download="farmers.pdf">download PDF</a>
                                    <a href="#">Watch Video</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={img6} width="300px" height="300px" alt="HOUSEWIFE" />
                            </div>
                            <h3>HOUSEWIFE</h3>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Learn More</button>
                                <div className="dropdown-content">
                                    <a href="C:\Users\AMAN\Desktop\project\farmers.pdf" download="farmers.pdf">download PDF</a>
                                    <a href="#">Watch Video</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src={img5} width="300px" height="300px" alt="FARMER" />
                            </div>
                            <h3>FARMER</h3>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Learn More</button>
                                <div className="dropdown-content">
                                    <a href="C:\Users\AMAN\Desktop\project\farmers.pdf" download="farmers.pdf">download PDF</a>
                                    <a href="#">Watch Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Other user types */}
                    {/* ... Repeat the same structure for other user types */}
                    
                    
                </div>
            </section>
    </div>
  )
}

export default TypesOfUser