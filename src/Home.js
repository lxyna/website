import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="column-container">
                <img className="image" src="/me.jpg" alt="me"></img>
                <img className="emoji" src="/yum-emoji.png" alt="hi"></img>
                    <h1 style={{ fontFamily: 'Karla', textTransform: 'lowercase' }}>👋 Hi, my name is Leyna!</h1>
                    <div>I'm a fourth year Computer Science with Business Applications student at the University of California, Riverside. I'm currently attending my last quarter and will be graduating in Spring 2024.</div>
            </div>
        </div>
    )
}

export default Home;