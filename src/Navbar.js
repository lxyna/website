const Navbar = ({ setCurrentComponent }) => {

    const changeComponent = (event) => {
        setCurrentComponent(event.target.value);
    };

    return (
        <div className="navbar" role="navigation">
        <div className="navbar-left">
          <button className="button button1 zoom-button" onClick={changeComponent} value="/">Home</button>
          <button className="button button1 zoom-button" onClick={changeComponent} value="/about">About</button>
          <button className="button button1 zoom-button" onClick={changeComponent} value="/education">Education</button>
          <button className="button button1 zoom-button" onClick={changeComponent} value="/experience">Experience</button>
          <button className="button button1 zoom-button" onClick={changeComponent} value="/extracurriculars">Extracurriculars</button>
          <button className="button button1 zoom-button" onClick={changeComponent} value="/contact">Contact</button>
        </div>
      </div>
    )
}

export default Navbar;