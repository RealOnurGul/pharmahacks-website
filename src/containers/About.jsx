import React from 'react';
import '../styles/About.css';
import BlobCell from '../components/BlobCell';
import Story from '../components/Story';

export default class About extends React.Component{
    render(){return(
        <div className="about-container" id="about">
            <div className="a-backdrop">
               
            </div>
            <div className="a-intro">
                <BlobCell />
                <div className="a-title">
                    <span>What is</span><br/>
                    <span>Pharmahacks</span>
                </div>
                <div className="a-details">
                {/* PharmaHacks is a hackathon focused on tackling life science problems with computer science solutions. Being the only AI &#38; bioinformatics focused hackathon in Montreal, a biotech hub, we offer a unique reach to the biotech leaders of tomorrow. */}
                "PharmaHacks McGill is a McGill University affiliated non-profit organization. "PharmaHacks" is an annual life-science-themed hackathon focusing on tackling problems in the biotechnology and pharmaceutical industry. We offer university- and graduate-level talents across Canada the opportunity to develop computer programs that solve biopharmaceutical-, AI- and bioinformatics-focused challenges. We work with our sponsors to expand their talent database and to connect with passionate industry-ready students."
                </div>
            </div>
            <span className="a-stories-title">Past Testimonials</span>
            
            <div className="a-stories">
                <Story img="images/about/img3.png" text= "The challenges were all very relevant to the current challenges in the industry and required a combination of different set of skills to solve."/>
                <Story img="images/about/img1.png" text="PharmaHacks brings together the next generation of curious bright minds to solve challenges in the pharmaceutical industry using data science. It was inspiring to see the hundreds of students using data-driven approaches and what they can build in such a short time."/>
                <Story img="images/about/img2.png" text="I liked that we were given freedom of interpretation of the data." />
                <Story img="images/about/img4.png" text="I liked how we were solving real world problems." />
                
                {/* ---- old design ----
                <svg viewBox="0 0 396 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="image1_clip" >
                        <path d="M140.677 89.6625C190.407 58.0161 190.891 22.2487 247.386 5.41466C302.266 -10.9384 354.521 10.4774 383.551 59.8247C409.058 103.181 389.113 139.292 378.87 188.537C366.271 249.104 366.86 299.461 315.273 333.63C258.345 371.338 202.237 353.432 140.677 323.879C65.8342 287.95 -37.4473 218.828 13.6797 153.433C50.1577 106.776 90.7056 121.462 140.677 89.6625Z" fill="#C4C4C4"/>
                    </clipPath>
                    <image xlinkHref="/images/about/img1.png" className="b-background" clipPath="url(#image1_clip)"></image>
                </svg>
                <svg viewBox="0 0 609 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="image2_clip">
                        <path d="M609 257.855C609 196.034 596.019 105.05 553.985 49.6441C511.952 -5.76224 405.08 17.5229 306.729 7.06871L304.944 6.87904C211.076 -3.10128 136.407 -11.0403 66.8895 49.6441C-37.9824 141.191 -14.6475 316.326 102.742 393.163C198.751 456.007 290.646 409.916 401.304 374.5C490.694 345.892 609 319.677 609 257.855Z" fill="#C4C4C4"/>
                    </clipPath>
                    <image xlinkHref="/images/about/img2.png" className="b-background" clipPath="url(#image2_clip)"></image>
                </svg>
                <svg viewBox="0 0 564 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="image3_clip">
                    <path d="M21.7328 167.967C47.3476 108.423 86.5154 77.5853 156.229 45.5643C265.86 -4.7913 393.214 -24.7692 482.639 45.5643C534.113 86.0497 538.733 125.61 547.92 181.973C559.378 252.259 591.85 329.085 510.167 361.009C449.76 384.619 407.006 341.377 339.49 337.869C229.768 332.167 142.898 416.495 59.4862 361.009C-15.2099 311.321 -9.38704 240.307 21.7328 167.967Z" fill="#C4C4C4"/>
                    </clipPath>
                    <image xlinkHref="/images/about/img3.png" className="b-background" clipPath="url(#image3_clip)"></image>
                </svg>
                <svg viewBox="0 0 405 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="image4_clip">
                    <path d="M24.4778 223.076C34.1773 136.405 -1.91107 63.3902 80.7129 24.7049C175.308 -19.5856 275.761 -4.15561 346.815 69.6398C403.48 128.491 416.125 190.721 396.093 268.011C375.228 348.52 327.983 396.56 245.94 425.831C156.167 457.859 90.0459 458.624 24.4779 392.404C-26.4461 340.973 16.6383 293.127 24.4778 223.076Z" fill="#C4C4C4"/>
                    </clipPath>
                    <image xlinkHref="/images/about/img4.png" className="b-background" clipPath="url(#image4_clip)"></image>
                </svg>  */}
            </div>
        </div>
    )}
}