import React, {useState, useEffect} from 'react';
import '../styles/Highlight.css'; 
const committees = {
    president: {
        name: "Faye Nikolettos",
        position: "President",
        img: "images/members/Faye.png",
        bio: "Directed an interdisciplinary team of undergraduate and graduate students, spearheaded collaborations with the D3 Innovation Hub, and created valuable marketing opportunities for local businesses. Can comfortably say she had the best team!",
        field: "BSc. Neuroscience"
    },
    webDevelopment: [
        {
            name: "Efe Ertugrul",
            position: "VP Web Development",
            img: "images/members/Efe2.png",
            bio: "Enhanced the website's functionality by resolving key bugs, enriching the content for improved information delivery, and provided essential technical support to students.",
            field: "B.A. Computer Science"
        }
    ],
    machineLearning: [
        {
            name: "Yohaï-Eliel Berreby",
            position: "VP Machine Learning",
            img: "images/members/Yohai2.png",
            bio: "As VP of Machine Learning, I led the Machine Learning Committee, orchestrating the development of challenges, including the neural decoding challenge, and the production of participant and jury handbooks. Throughout the event, I offered conceptual and technical support to contestants, briefed academic jury members, and contributed as a jury member myself.",
            field: "Ph.D. Physiology"
        },
        {
            name: "Sabrina Du",
            position: "Machine Learning and Sponsorships Liaison",
            img: "images/members/Sabrina.png",
            bio: "In preparation for PharmaHacks 2024, I collaborated with the ML team to design machine learning challenges, secured sponsorships, and facilitated communication between sponsors like WolframAlpha and our team, ensuring our challenges reflected sponsor values. Throughout the hackathon, I served as a liaison between participants and the VP of Machine Learning, offering guidance and support to students. Contributing to the success of PharmaHacks 2024 was a rewarding experience.",
            field: "BSc. Neuroscience"
        },
        {
            name: "Amir Rajabi Vajargah",
            position: "Machine Learning",
            img: "images/members/Amir.png",
            bio: "Developed the genomics challenge for the hackathon, provided mentorship to two undergraduate students on the ML team, and actively supported participants by answering their questions throughout the event",
            field: "Msc Human Genetics"
        },
        {
            name : "Chinmay Desai",
            position : "Machine Learning",
            bio : "I played an integral role in developing the PharmaHacks challenges, thoroughly engaging with the latest scientific research in relevant fields to ensure our topics were cutting-edge. I also contributed to setting the judging criteria and was actively involved in crafting the participant handbook, which provided comprehensive guidance and information to competitors. This dedication aimed to foster a well-organized, competitive, and educational environment for all participants.",
            field : "BSc. CompSci & Biology"
        }
    ],
    sponsorship: [
        {
            name: "Goktug Bender",
            position: "VP Sponsorship",
            img : "images/members/Goktug.png",
            bio : "As VP Sponsorship for PharmaHacks, I led fundraising efforts, securing over $2750 by engaging McGill University departments and faculties. I guided a dedicated sponsorship committee, ensuring unified resource acquisition, and successfully negotiated a coffee sponsorship to enhance the participant experience.",
            field: "BA. Psychology"
        },
        {
            name: "Celine Sakkal",
            position: "Sponsorship",
            img : "images/members/Celine.png",
            bio: "As a member of the sponsorship committee, I played a key role in securing financial support for our hackathon by pitching the event to a wide range of organizations. Through effective negotiation, we successfully garnered the backing of 15 sponsors, including research institutions and multinational companies.",
            field : "BSc Computer Science"

        }

    ],
    logistics : [
        {
            name : "Alexia Botezatu",
            position : "VP Logistics",
            img : "images/members/Alexia.png",
            bio : "As the VP logistics, I had the opportunity to oversee a team of dedicated members. Charged with delegating tasks, I assigned tasks to team members according to their skills and interest. As VP logistics, I was involved in communicating with participating parties, problem solving, research, merchandise design, placing orders and scheduling. I also had the chance to organise a fundraiser before the event in order to raise funds and awareness of our organization.",
            field : "B.A. History & Anthropology"
        },
        {
            name : "Debbie Fitopoulos",
            position : "Logistics",
            img : "images/members/Debbie.png",
            bio : "As part of the Logistics Team for PharmaHacks, alongside my esteemed colleagues Tracy and Alexia (VP), we focused on enhancing the hackathon experience through meticulous attention to detail. Our responsibilities included catering, venue setup, and decorations, as well as providing memorable keepsakes for attendees. Our collective efforts ensured an optimal environment that contributed significantly to the success of the event. I am proud to have played a role in what was acclaimed as the most successful PharmaHacks to date, amplifying the exceptional work of the entire team and participants.",
            field : "BASc Biology & Anthropology"
        },

    {
        name : "Tracy Wang",
        position : "Logistics",
        img : "images/members/Tracy.png",
        bio : "My primary responsibilities included procuring essential materials necessary for the smooth execution of the hackathon. During the event, I was pivotal in managing participant sign-in, ensuring a seamless registration process for all attendees. Additionally, I played a crucial role in organizing and conducting prize raffles, and I actively participated in the post-event cleanup, contributing to the overall organization and success of the event.",
        field : "BSc. Neuroscience"
    },
    ],
    communications : [
        {
            name : "Carine Zbibo",
            position : "VP Communications",
            img : "images/members/Carine2.png",
            bio : "As Vice President of the Communications Team, I focused on expanding outreach by actively advertising across various platforms and engaging directly with professors, judges, and audiences to boost interest and participation. Our efforts in bridging connections between the team and external stakeholders were vital for fostering collaboration and enthusiasm. Seeing our work's positive impact on participants and professors has been incredibly motivating and drives us to continue striving for excellence.",
            field : "BSc. Pharmacology and Therapeutics"
        },
        {
            name : "Cindy Li",
            position : "Communications",
            img : "images/members/Cindy.png",
            bio : "As part of my involvement with PharmaHacks, I was instrumental in designing engaging promotional posters that were pivotal in marketing various events. Additionally, I managed effective communication by sending detailed emails to judges and participants, providing them with essential information about the hackathon, ensuring they were well-informed and prepared. I also played a key role in managing and enhancing PharmaHacks' presence on social media platforms, which involved regular updates and interactive engagements that significantly boosted our visibility and participant interaction.",
            field : "BSc. Life Sciences"
        }
    ],
    finance : [
         {
            name : "Enzo Manzi-Murabukirwa",
            position : "VP Finance",
            img : "images/members/Enzo2.png",
            bio : "As Vice President of Finance, I managed a budget of nearly $17,000 with diligent fiscal responsibility, ensuring strategic fund allocation that supported our organization's mission. I implemented robust financial controls and maintained transparent reporting, enhancing trust and accountability within the team. My leadership in finance significantly contributed to our organization’s sustainability and growth.",
            field : "BSc. Biochemistry"
         },
         {
            name : "Joanne Kavouras",
            position : "Finance",
            img : "images/members/Joanne.png",
            bio : "I assisted in auditing the PharmaHacks Finance reports for the 2023-2024 fiscal year, which were submitted to both SSMU and SUS. I carefully reviewed and edited the budget sheets to guarantee accuracy in the financial data. This meticulous verification process was essential for maintaining transparency and accountability in our financial reporting.",
            field : "BA. Economics"
         }
    ]

    // Additional committees
};


export default function Highlight() {
    const photos = [
        "images/event/IMG_0572.JPG",
        "images/event/IMG_0576.JPG",
        "images/event/IMG_0579.JPG",
        "images/event/IMG_0581.JPG",
        "images/event/IMG_0589.JPG",
        "images/event/IMG_0594.JPG",
        "images/event/IMG_0599.JPG"
    ];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
        }, 4000); 
    
        return () => clearInterval(intervalId);
    }, [photos.length]); 

    const handlePhotoClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left; // x position within the element
        if (x < rect.width / 2) {
            setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
        } else {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
        }
    };

    

    return (
        <div className="highlight-container">
            <div className="event-logo">
                <img src="images/welcome/pharma2025.png" alt="Event Logo" className="logo" />
            </div>
            <div className="media-container">
                <div className="video-container">
                    <video controls className="event-video" autoPlay muted loop>
                        <source src="videos\PharmaHacks 2024 Fixed.mp4" type="video/mp4" />
                        Your browser does not support this video format.
                    </video>
                    <p className="media-description">Watch the highlights from PharmaHacks 2024!</p>
                </div>
                <div className="photo-carousel">
                    <img src={photos[currentPhotoIndex]} alt={`Scene ${currentPhotoIndex + 1}`} onClick={handlePhotoClick} className="event-photo" />
                    <p className="media-description">Explore more photos from our dynamic event scenes.</p>
                </div>
            </div>
            <div className="typewriter-effect">
                What does our team have to say?
            </div>
            <div className="executive-display">
                {Object.values(committees).flat().map((member, index) => (
                    <div key={index} className="executive-info-block">
                        <img src={member.img} alt={member.name} className="executive-photo" />
                        <div className="executive-text">
                            <h3>{member.name}</h3>
                            <h5>{member.field}</h5>
                            <h4>{member.position}</h4>
                            <p>{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}