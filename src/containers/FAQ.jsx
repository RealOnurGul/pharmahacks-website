import React from 'react';
import AccordionItem from '../components/AccordionItem';
import '../styles/FAQ.css';

export default class FAQ extends React.Component{
    render(){
        return(
        <div className="faq-container" id = "FAQ">
            <div className="faq-title">We're often asked</div>

            <AccordionItem title={"What is a hackathon?"} text= {"A hackathon is a sprint-like event in which programmers collaborate to solve challenges. Our event specifically involves challenges surrounding bioinformatics, cheminformatics, and drug discovery."}/>
            <AccordionItem title={"Who is this event for?"} text={"Students from all backgrounds are welcome at PharmaHacks. No extensive knowledge of programming or biomedical sciences is necessary."} />
            <AccordionItem title={"Is the event free?"} text={"Yes! The event will be free thanks to our amazing sponsors."} />
            <AccordionItem title={"Can students from all universities participate?"} text={"Yes, PharmaHacks is open to students from all universities and CEGEPs."} />
            <AccordionItem title={"What’s the duration of the event?"} text={"The event is two days long starting on a Saturday and ending on a Sunday."} />
            <AccordionItem title={"Will there be prizes?"} text={"Yes!"} />

            <div className="faq-additional">Don't see your question? Ask us <a href="https://www.m.me/StudentPharma" target="_blank" rel="noopener noreferrer">here</a></div>
           
        </div>        
    )}
}