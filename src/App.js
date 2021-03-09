import React from 'react';
import './App.css';


class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state={light: true}
    updateState = this.updateState.bind(this);
  }
  updateState(){
    this.setState({light: !this.state.light})
    }
  render(){
    return <>
    <div className={this.state.light? "top-light":"top-dark"}>
    <section id="home">
    <div className="home">
    <div className={this.state.light? "top-left-light col-4":"top-left-dark col-4"}>
    <Slider />
    </div>
    <div className={this.state.light? "top-right-light":"top-right-dark"}>
    <div>
    <div className="wel">
      <h1 className={this.state.light? "welc light":"welc dark"}>Welcome</h1>
      <div className={this.state.light? "welcome-light":"welcome-dark"}></div>
    </div>
    <h1 className={this.state.light? "light h":"dark h"}>I'm Oluwaseyi, a frontend developer</h1>
    </div>
    <div className={this.state.light? "top-last-light":"top-last-dark"}>
   <Nav />
   </div>
    </div>
    </div>
    <Footer />
    </section>
    <section id="work"> 
    <div className={this.state.light? "work-left-light": "work-left-dark"}>
    <Nav />
    </div>
    <div className={this.state.light? "work-right-light": "work-right-dark"}>
    <Sites sites={sites}/>
    </div>
    </section>
    <section id="abcon">
    <div className={this.state.light? "abcon-light":"abcon-dark"}>
    <Nav />
    </div>
    <div className={this.state.light? "abcont-light":"abcont-dark"}>
    <section  id="about">
    <h1>About Oluwaseyi</h1>
    <h5>Oluwaseyi Ogunrinde is a graduate and postgraduate student of Microbiology from the University of Lagos and an enthusiastic, goal getting frontend developer in Lagos, Nigeria. </h5>
    <br />
    <h5>She is skilled in HTML, CSS, Javascript, React, and wire framing and has a reportoire of skills that includes Microsoft Office packages, time management and multitasking skills, problem solving skills, good communication skills, among others.</h5>
    <br />
    <h5> Oluwaseyi is seeking a position in a company or on a project where she can gain relevant work experience in developing and optimizing webpages, as well as other knowledge and skills involved in website development.</h5>
    </section>
<section id="contact">
<div className={this.state.light? "contact-light":"contact-dark"}><Nav /></div>
<div className="co"> <h1>Contact Oluwaseyi</h1>
  <h5 >Email: <span className="long">seyiogunrinde@yahoo.co.uk</span></h5>
  <h5>GitHub: <a href="https://github.com/shizbriz">Shizbriz</a></h5>
  <h5>LinkedIn: <a href="https://www.linkedin.com/in/oluwaseyi-ogunrinde-9a5259149/">Oluwaseyi Ogunrinde</a></h5></div>

 
</section>

    </div>
  
    

    </section>
    </div>
    </>
  }
} 

class Slider extends React.Component{
  render(){
    return <label className="switch">
    <input type="checkbox" onClick={updateState}/>
      <span className="slider"></span>
    </label>
  }
}

const Nav =()=><div className="nav">
<a href="#home"><button className="btn">Home</button> </a>
<a href="#work"><button className="btn">Work</button> </a>
<a href="#about"><button className="btn">About</button></a>
<a href="#contact"><button className="btn">Contact</button></a>
</div>

function updateState(light){
this.setState({light: !this.state.light})
}

const Footer =()=> <div className="footer">&copy; Oluwaseyi 2020</div>
const Sites = (props)=> <div className="sites">
  {props.sites.map((site, index)=> <Site key={index} site={site} />)}
</div>

  const Site =(props)=><div className="site">
  <div className="site-text">
  <a href={props.site.link}><h3>{props.site.name}</h3></a>
    <p>{props.site.description}</p>
  </div>
  </div>

const sites =[
  {
    name: "Funool",
    description: "The perfect elementary school for your child, where learning is fun and young minds are moulded to their full capacity for greatness",
    link: "https://shizbriz.github.io/Funool"
  },
  {
    name: "Tour Naija",
    description: "Want to go on a tour? Tour Naija showcases various vacation spots as well as tourists attractions within Nigeria",
    link: "https://tour-naija.netlify.app"
  },
  {
    name: "Trip Guard",
    description: "While touring, accidents are prone to happen. Trip Guard insurance ensures you enjoy your trip and return home safely without your trip getting ruined no matter what happens",
    link: "https://insurance-landingpage.netlify.app"
  },
  {
    name: "Truth",
    description: "Have you ever wondered who you really are? Do you have self doubts? Put them all at ease. The Truth would reveal to you your true self",
    link: "https://shizbriz.github.io/selfwrite"
  }
]









export default Portfolio;
