import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <div className="column-container scroll">
                <div className="title">Experience</div>
                <div className="experience-info">
                    <div className="title-with-side-text">
                        <div style={{fontWeight: 'bold', fontSize: '18px'}}>Professional Website</div>
                        <div>May 2024</div>
                    </div>
                    <div className="title-with-side-text">
                        <div className="text-and-image">
                            <div>Made with:</div>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css"/>
                        </div>
                        <div style={{ fontStyle: 'italic' }}>Riverside, CA</div>
                    </div>
                    <ul>
                        <li>Developed a portfolio website to professionally showcase resume and personal achievements</li>
                        <li>Utilized JavaScript, CSS, and HTML to build the website</li>
                        <li>Created React components for each section of the website to enhance modularity and maintainability</li>
                    </ul>
                    <div className="button-list">
                        <button className="ext-button button1 zoom-button">
                            <a href="https://github.com/lxyna/website" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github"></img>
                                GitHub
                            </a>
                        </button>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="title-with-side-text">
                        <div style={{fontWeight: 'bold', fontSize: '18px'}}>Red Block Green Block</div>
                        <div>November 2023</div>
                    </div>
                    <div className="title-with-side-text">
                        <div className="text-and-image">
                            <div>Made with:</div>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" alt="arduino"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="c++"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="python"/>
                        </div>
                        <div style={{ fontStyle: 'italic' }}>Riverside, CA</div>
                    </div>
                    <ul>
                        <li> Collaborated with a team of three programmers to develop a 2-player minimal platformer game with crossplatform compatibility, supporting controller and keyboard inputs</li>
                        <li>Designed and implemented an Arduino-based embedded system, turning it into a game controller where each joystick is controlled by a different player</li>
                        <li>Achieved 2nd place out of 48 teams in the hackathon Citrus Hack 2023</li>
                    </ul>
                    <div className="button-list">
                        <button className="ext-button button1 zoom-button">
                            <a href="https://devpost.com/software/red-block-green-block" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://seeklogo.com/images/D/devpost-logo-95FF685C5D-seeklogo.com.png" alt="devpost"></img>
                                Devpost
                            </a>
                        </button>
                        <button className="ext-button button1 zoom-button">
                            <a href="https://github.com/SafeDuck/RedBlock_GreenBlock" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github"></img>
                                GitHub
                            </a>
                        </button>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="title-with-side-text">
                        <div style={{fontWeight: 'bold', fontSize: '18px'}}>JASL</div>
                        <div>June 2022 - July 2022</div>
                    </div>
                    <div className="title-with-side-text">
                        <div className="text-and-image">
                            <div>Made with:</div>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="next.js"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="python"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="sqlite"/>
                            <img className="prog-img-with-text" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="flask"/>
                        </div>
                        <div style={{ fontStyle: 'italic' }}>Riverside, CA</div>
                    </div>
                    <ul>
                        <li>Collaborated with a team of three programmers to create a task scheduler for CS100 Software Construction</li>
                        <li>Implemented Agile principles through biweekly Scrum meetings, effectively assigning and tracking team responsibilities</li>
                        <li>Applied unit testing methodology, ensuring robust code quality by testing each function individually</li>
                    </ul>
                    <div className="button-list">
                        <button className="ext-button button1 zoom-button">
                            <a href="https://github.com/lxyna/task-scheduler" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github"></img>
                                GitHub
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;