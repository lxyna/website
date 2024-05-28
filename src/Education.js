import React from 'react';

const Education = () => {
    return (
        <div className="education">
            <div className="column-container scroll">
                <h1 className="title">Education</h1>
                <div className="school"> 
                    <img className="logo" src="/ucr.jpg" alt="uni"></img>
                    <div className="info-with-img">
                        <div className="title-with-side-text">
                            <div style={{fontWeight: 'bold', fontSize: '18px'}}>University of California, Riverside</div>
                            <div style={{fontStyle: 'italic'}}>June 2024</div>
                        </div>
                        <div>Bachelor of Science in Computer Science with Business Applications
                        </div>
                        <p>Relevant Coursework: Data Structures and Algorithms, Operating Systems, Intro to Embedded Systems, Intro to Big Data Management, Marketing and Distribution Management, Decision Analysis and Management Science</p>
                        <div>Currently Enrolled In: Principles of Web Development, Systems Analysis and Design, Business Data Communications</div>
                    </div>
                </div>
                <h1 className="title">Skills</h1>
                <div className="info">
                    <div className="group-prog-lang-imgs">
                        <div className="group-prog-lang-column">
                            <div className="prog-first-row">
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="c++"/>
                                        <div style={{textAlign: 'center'}}>C++</div>
                                    </div>
                                </div>
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="js"/>
                                        <div style={{textAlign: 'center'}}>JavaScript</div>
                                    </div>
                                </div>
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html"/>
                                        <div style={{textAlign: 'center'}}>HTML</div>
                                    </div>
                                </div>
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css"/>
                                        <div style={{textAlign: 'center'}}>CSS</div>
                                    </div>
                                </div>
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react"/>
                                        <div style={{textAlign: 'center'}}>React</div>
                                    </div>
                                </div>
                            </div>
                            <div className="prog-second-row">
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git"/>
                                        <div style={{textAlign: 'center'}}>Git</div>
                                    </div>
                                </div>
                                <div className="prog-img-name">
                                    <div className="prog-lang-img zoom">
                                        <img className="prog-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="linux"/>
                                        <div style={{textAlign: 'center'}}>Linux</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;