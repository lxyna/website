import React from 'react';

const Extracurriculars = () => {
    return (
        <div className="extracurriculars">
            <div className="column-container">
                <h1 className="title">Extracurriculars</h1>
                <div className="extracurriculars-info">
                    <div className="title-with-side-text">
                        <div style={{fontWeight: 'bold', fontSize: '18px'}}>Cybersecurity@UCR</div>
                        <div>April 2022 - Present</div>
                    </div>
                    <div className="title-with-side-text">
                        <div>Member</div>
                        <div style={{ fontStyle: 'italic' }}>Riverside, CA</div>
                    </div>
                    <ul>
                        <li>Regularly attend biweekly meetings covering diverse topics such as game hacking and password cracking</li>
                        <li> Contributed to cyber defense competitions by writing business tasks (injects) for WRCCDC and addressing vulnerabilities on a Linux virtual machine for Hivestorm</li>
                    </ul>
                    <div className="button-list">
                        <button className="ext-button button1 zoom-button">
                            <a href="https://cyber.cs.ucr.edu" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://simpleicon.com/wp-content/uploads/link-2.svg" alt="website"></img>
                                Website
                            </a>
                        </button>
                        <button className="ext-button button1 zoom-button">
                            <a href="https://discord.ucrcyber.org/" className="button-and-text" target="_blank" rel="noopener noreferrer">
                                <img className="button-logo" src="https://icons.iconarchive.com/icons/fa-team/fontawesome-brands/512/FontAwesome-Brands-Discord-icon.png" alt="discord"></img>
                                Discord
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extracurriculars;