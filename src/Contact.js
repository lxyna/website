import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="column-container">
                <h1 className="title">Contact</h1>
                <div className="contact-info">
                    <div style={{textAlign: 'center'}}>Thanks for visiting my website! I hope you enjoyed looking around and getting to know more about me. 😊 If you would like to talk, feel free to connect with me on LinkedIn or send an email!</div>
                    <div className="button-list2">
                        <button className="ext-button button1 zoom-button">
                            <a href="https://www.linkedin.com/in/leyna-diep-65254128a/" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="linkedin"></img>
                                LinkedIn
                            </a>
                        </button>
                        <button className="ext-button button1 zoom-button">
                            <a href="https://github.com/lxyna" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github"></img>
                                GitHub
                            </a>
                        </button>
                        <button className="ext-button button1 zoom-button">
                            <a href="mailto:leynadiep@gmail.com" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://www.svgrepo.com/show/14478/email.svg" alt="email"></img>
                                Email
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;