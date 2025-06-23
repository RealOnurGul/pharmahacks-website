import React, { useState, useEffect, useRef } from 'react';
import '../styles/Event2025.css';

// Team member data with real testimonials
const executives = [
    {
        name: "Carine Zbibo",
        position: "President",
        img: "images/members/2024_members/Carine.png",
        field: "BSc. Pharmacology and Therapeutics (U3)",
        testimonial: "Serving as President of PharmaHacks was a deeply enriching experience. It allowed me to lead the club's strategic direction and growth while ensuring alignment with its mission and goals. I oversaw all executive committee operations, facilitated the smooth execution of events and initiatives, and represented the club externally by securing valuable partnerships and sponsorships."
    },
    {
        name: "Ozhan Dehghani",
        position: "VP Machine Learning",
        img: "images/members/2024_members/Ozhan.png",
        field: "M1 NeuroAI",
        testimonial: "Great experience working with the team to create challenging machine learning problems in the pharmaceutical domain."
    },
    {
        name: "Onur Gul",
        position: "VP Web Development",
        img: "images/members/2024_members/Onur_Gul.png",
        field: "Mathematics and Computer Science",
        testimonial: "Pharmahacks was an amazing experience! I genuinely enjoyed collaborating with such talented individuals. It was inspiring to see everyone dive into their machine learning projects. Working on the website was rewarding, and I'm already looking forward to next year's event."
    },
    {
        name: "Tracy Wang",
        position: "VP Logistics",
        img: "images/members/2024_members/Tracy.png",
        field: "U2 Neuroscience",
        testimonial: "It was wonderful to see the entire hackathon come together from start to finish. Throughout the year, I encountered several challenges, learned a lot of new things, and worked with many lovely people. Overall, I had a very rewarding experience."
    },
    {
        name: "Kathleen Brown",
        position: "Co-VP Communications",
        img: "images/members/2024_members/Kathleen.jpg",
        field: "U3 Anatomy & Cell Biology",
        testimonial: "Being a member of the PharmaHacks 2025 team has truly been an incredible experience. As Co-Vice President of Communications, I was responsible for designing and promoting commercial content that was effective in capturing the attention of diverse audiences, whilst also strengthening PharmaHacks' visibility and impact."
    },
    {
        name: "Cindy Li",
        position: "Co-VP Communications",
        img: "images/members/2024_members/Cindy.png",
        field: "U1 Neuroscience",
        testimonial: "This was my second year as a part of PharmaHacks and I had a great time throughout the year organizing the hackathon. I really enjoyed working with a team of amazing people and learned a lot from all of them!"
    },
    {
        name: "Zhi Jun Liu",
        position: "VP Logistics",
        img: "images/members/2024_members/Zhi.png",
        field: "Pre-Med 2029",
        testimonial: "I love the team dynamics, its been very fun and welcoming."
    },
    {
        name: "Lisa Kawwas",
        position: "Communications Coordinator",
        img: "images/members/2024_members/Lisa.png",
        field: "Pharmacology U1",
        testimonial: "PharmaHacks 2025 was a wonderful experience that enabled me to collaborate with all the members of the team to make this hackathon run smoothly. It was interesting to be a part of the behind the scenes and to watch the participants working on their amazing projects."
    },
    {
        name: "Aymen Boustani",
        position: "Machine Learning Coordinator",
        img: "images/members/2024_members/Aymen.png",
        field: "Mechanical Engineering graduate",
        testimonial: "Great! Got to work on top-notch biotechnological challenges within a great team. Since it's a life-science related hackathon, solving these challenges can help the ongoing research and have a positive impact on millions of lives; this is my favourite part about PharmaHacks!"
    },
    {
        name: "Leila Daoud",
        position: "ML & Sponsorship Liaison",
        img: "images/members/2024_members/Leila.png",
        field: "Mechanical engineering U0",
        testimonial: "It was amazing to work with such a smart and passionate team! Seeing our event come to life was very inspiring!"
    },
    {
        name: "Marie Pyun",
        position: "Sponsorship Coordinator",
        img: "images/members/2024_members/Marie.png",
        field: "Bio and Math U1",
        testimonial: "Being part of PharmaHacks 2025 was a great experience! As a sponsorship coordinator, I played an important role in securing financial support by reaching out to various organizations and pitching our event. The event was a huge success, the team was amazing, and it was incredibly rewarding to see our efforts come to life."
    },
    {
        name: "Tanjin Sultana",
        position: "Logistics Coordinator",
        img: "images/members/2024_members/Tanjin.jpg",
        field: "Bioengineering U2",
        testimonial: "I loved it, I got to learn from the cool people around me and be inspired to keep making tech fun and enjoyable for everyone including myself:)"
    },
    {
        name: "Dev Patel",
        position: "Machine Learning Coordinator",
        img: "images/members/2024_members/Dev.png",
        field: "Bsc. Computer Science",
        testimonial: "It was very informative experience for me I got to the learn applications of ML in genomics and enhancing drugs. It was interesting to learn about the different approaches that the participants used which I did not thought when I was building the models for the challenges."
    }
];

export default function Event2025() {
    // For the image carousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    // For the testimonials carousel
    const [activePage, setActivePage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const itemsPerPage = windowWidth <= 1200 ? 1 : 3; // Show 1 on tablets/mobile, 3 on desktop
    const totalPages = Math.ceil(executives.length / itemsPerPage);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Refs for the parallax effect
    const videoRef = useRef(null);
    const galleryRef = useRef(null);
    const testimonialRef = useRef(null);
    
    // Use the images directly from the event2025 folder
    const [eventImages, setEventImages] = useState([]);
    
    // Fetch the images from the event2025 folder when component mounts
    useEffect(() => {
        // Define the actual image names from the event2025 folder
        const fetchedImages = [
            "images/event2025/pharma_1.jpg",
            "images/event2025/pharma_2.jpg",
            "images/event2025/pharma_3.jpg",
            "images/event2025/pharma_4.jpg",
            "images/event2025/pharma_5.jpg",
            "images/event2025/pharma_6.jpg",
            "images/event2025/pharma_7.jpg",
            "images/event2025/pharma_8.jpg",
            "images/event2025/pharma_9.jpg",
            "images/event2025/pharma_10.jpg",
        ];
        setEventImages(fetchedImages);
    }, []);
    
    // Auto-rotate images
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % eventImages.length);
            }, 7500); // Increased to 7.5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, eventImages.length]);
    
    // Parallax effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const scrollPosition = window.scrollY;
                videoRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
            if (galleryRef.current) {
                const scrollPosition = window.scrollY;
                galleryRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            }
            if (testimonialRef.current) {
                const scrollPosition = window.scrollY;
                testimonialRef.current.style.transform = `translateY(${scrollPosition * 0.08}px)`;
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Track window resize for responsive design
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Handle manual navigation for images
    const nextImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % eventImages.length);
        // Restart auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };
    
    const prevImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + eventImages.length) % eventImages.length);
        // Restart auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };
    
    // Handle manual navigation for testimonials
    const nextTestimonialPage = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActivePage(prevPage => (prevPage + 1) % totalPages);
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };
    
    const prevTestimonialPage = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActivePage(prevPage => (prevPage - 1 + totalPages) % totalPages);
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };
    
    // For smooth scrolling
    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    // Create grouped testimonial pages
    const testimonialPages = [];
    for (let i = 0; i < executives.length; i += itemsPerPage) {
        testimonialPages.push(executives.slice(i, i + itemsPerPage));
    }
    
    return (
        <div className="event2025-container">
            {/* Animated background elements */}
            <div className="event2025-background">
                <div className="animated-blob blob1"></div>
                <div className="animated-blob blob2"></div>
                <div className="animated-blob blob3"></div>
                <div className="animated-ring ring1"></div>
                <div className="animated-ring ring2"></div>
                <div className="sparkle sparkle1"></div>
                <div className="sparkle sparkle2"></div>
                <div className="sparkle sparkle3"></div>
                <div className="sparkle sparkle4"></div>
                <div className="sparkle sparkle5"></div>
            </div>
            
            {/* Event header */}
            <div className="event2025-header">
                <img src="images/welcome/pharma2025.png" alt="PharmaHacks 2025" className="event2025-logo" />
                <h2 className="event2025-title">Innovate • Collaborate • Transform</h2>
                <div className="event-date-badge">March 15-16, 2025</div>
                
                <div className="quick-nav-buttons">
                    <button onClick={() => scrollToSection(videoRef)} className="quick-nav-button">Watch</button>
                    <button onClick={() => scrollToSection(galleryRef)} className="quick-nav-button">Gallery</button>
                    <button onClick={() => scrollToSection(testimonialRef)} className="quick-nav-button">Testimonials</button>
                </div>
            </div>
            
            {/* Video section */}
            <section className="event2025-video-section" ref={videoRef}>
                <div className="section-container">
                    <h2 className="section-title">PharmaHacks 2025 Highlights</h2>
                    <div className="video-container">
                        <video controls className="event2025-video">
                            <source src="videos/pharma_video.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            
            {/* Gallery section */}
            <section className="event2025-gallery-section" ref={galleryRef}>
                <div className="section-container">
                    <h2 className="section-title">Event Gallery</h2>
                    <div className="gallery-container">
                        <button className="gallery-nav gallery-prev" onClick={prevImage}>❮</button>
                        <div className="gallery-wrapper">
                            {eventImages.map((image, index) => (
                                <div 
                                    key={index} 
                                    className={`gallery-item ${index === currentImageIndex ? 'active' : ''}`}
                                    style={{transform: `translateX(${(index - currentImageIndex) * 100}%)`}}
                                >
                                    <img src={image} alt={`Event 2025 - ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="gallery-nav gallery-next" onClick={nextImage}>❯</button>
                        <div className="gallery-dots">
                            {eventImages.map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentImageIndex(index);
                                        setTimeout(() => setIsAutoPlaying(true), 10000);
                                    }}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Testimonials section - Updated with horizontal slider */}
            <section className="event2025-testimonials-section" ref={testimonialRef}>
                <div className="section-container">
                    <h2 className="section-title">Team Testimonials</h2>
                    <div className={`testimonials-multi-container ${windowWidth <= 1200 ? 'testimonials-mobile-single' : ''}`}>
                        <button className="testimonial-nav testimonial-prev" onClick={prevTestimonialPage}>❮</button>
                        <div className="testimonials-slider">
                            <div 
                                className="testimonials-track" 
                                style={{ transform: `translateX(-${activePage * 100}%)` }}
                            >
                                {testimonialPages.map((page, pageIndex) => (
                                    <div key={pageIndex} className="testimonials-page">
                                        {page.map((executive, index) => (
                                            <div key={index} className="testimonial-card">
                                                <div className="testimonial-image">
                                                    <img src={executive.img} alt={executive.name} />
                                                </div>
                                                <div className="testimonial-content">
                                                    <h3>{executive.name}</h3>
                                                    <h4>{executive.position}</h4>
                                                    <p className="testimonial-field">{executive.field}</p>
                                                    <div className="testimonial-quote-container">
                                                        <p className="testimonial-quote">"{executive.testimonial}"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="testimonial-nav testimonial-next" onClick={nextTestimonialPage}>❯</button>
                    </div>
                    <div className="testimonial-dots">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <span 
                                key={index} 
                                className={`testimonial-dot ${index === activePage ? 'active' : ''}`}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setActivePage(index);
                                        setTimeout(() => {
                                            setIsAnimating(false);
                                        }, 500);
                                    }
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 