import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="column-container">
                <img className="image" src="/me.jpeg" alt="me"></img>
                <img className="emoji" src="/yum-emoji.png" alt="hi"></img>
                    <h1 style={{ fontFamily: 'Karla', textTransform: 'lowercase' }}>👋 Hi, my name is Leyna!</h1>
                    <div>I'm a recently graduated Computer Science with Business Applications student from the University of California, Riverside. I graduated in Spring 2024 and am currently seeking internships, part-time jobs, or full-time jobs.</div>
            </div>
        </div>
    )
}

export default Home;