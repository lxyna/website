import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="column-container scroll">
                <img className="pixel-up" src="/pixel.gif" alt="cute"></img>
                <div className="title">Background</div>
                <div>Graduating from high school, my biggest dilemma was figuring out what I wanted to major in. The reason why I chose Computer Science with Business Applications was because of my everlasting love for gaming and additional interest in business. Coming into college without any programming experience, it proved to be a stressful, but fun experience for me. Throughout these four years, I feel that I have learned a lot and I believe my college experience would not have been the way it was if it weren't for my friends and their support.</div>
                <p>My career goals after graduation are to either continue school and pursue a Master's degree in Computer Science or go into industry and work. Jobs I would ideally like to work as are software developer or business analyst. </p>
                <div>When I'm not studying, I enjoy gaming, listening to music, spending time with family and friends, going to amusement parks, or finding excuses to spend money. I also love collecting acrylic charms and enamel pins of my favorite interests. Games I am currently playing are Genshin Impact and Hogwarts Legacy. </div>
                <img className="pixel-down" src="/pixel.gif" alt="cute"></img>
            <div className="button-list">
                <button className="resume-button button1 zoom-button">
                    <a href="/resume.pdf" className="button-and-text" target="_blank" rel="noopener noreferrer">
                        <img className="button-logo2" src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/resume-7.png" alt="resume"></img>
                        Resume
                    </a>
                </button>
            </div>
            </div>
        </div>
    )
}

export default About;