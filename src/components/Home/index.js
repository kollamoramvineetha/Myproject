import AnchorLink from "react-anchor-link-smooth-scroll";
import { Component } from "react";
import './index.css';
const proList=[
  {
    name:"Guess My Number",
    des:"Here is the Project In this I created the a simple game using React js for more click on view project",
    url:"https://kollamoramvineetha.github.io/guess-number/"
  }
]
class Home extends Component {
  state={projectName:"",description:"",projectUrl:"",projectsList:proList}

  onTextChange=(event)=>{
    this.setState({projectName:event.target.value})
  }

  onUrlChange=(event)=>{
    this.setState({projectUrl:event.target.value})
  }

  onDescriptionChange=(event)=>{
    this.setState({description:event.target.value})
  }

  onFormSubmit=(event)=>{
    event.preventDefault()
    const {projectName,description,projectUrl} = this.state 
    const obj = {
      name:projectName,
      des:description,
      url:projectUrl
    }
    this.setState((prevState)=>({
      projectsList:[...prevState.projectsList, obj],
      projectName:"",
      description:"",
      projectUrl:""
    }))
  }
  
  render(){
    const {projectName,projectUrl,description,projectsList}=this.state
    return (
      <div className='card'>
        <div>
          <nav className="card1">
            <div>
              <p>Modelyn Torff</p>
            </div>
            <div className="card3">
              <div >
                <AnchorLink href="#About"><button className="card8">About</button></AnchorLink>
              </div>
              <div>
                <AnchorLink href="#Projects"><button className="card8"> Projects</button></AnchorLink>
              </div>
              <div>
                <AnchorLink href="#Contact"><button className="card8"> Contact US</button></AnchorLink>
              </div>
            </div>
          </nav>
          <div className="card4" id="About">
            <div className="text-container">
              <p>JI/UX DESIGNER</p>
              <h1>Hello, my name <br/>
              is Madelyn Torff</h1>
              <p>My name is Vineetha k. I completed my Graducation in the stream of computer science and engineering </p>
              <div>
                <AnchorLink href="#Projects">
                  <button className="projects-button">Projects</button>
                </AnchorLink>
                <button type="button" className="linkdein-card">Linkedin</button>
              </div>
            </div>
            <div>
              <img src="./images/Image1.png" alt="logo" className="card2"/>
            </div>
          </div>
          <img src="./images/Vector (4).png" alt="ven" className="vector-card"/>
        </div>
        <div id="Projects" className="card6">
          <div className="card5">
            <h1>Add Project</h1>
            <div className="card12">
              <form onSubmit={this.onFormSubmit}>
                <div className="card11">
                  <label htmlFor="textInput">Project Name</label><br/>
                  <input type="text" id="textInput" onChange={this.onTextChange} value={projectName}/>
                </div>
                <div>
                  <label htmlFor="projectUrl">Project Link</label><br/>
                  <input type="text" id="projectUrl" onChange={this.onUrlChange} value={projectUrl} />
                </div>
                <div>
                  <label htmlFor="des">Description</label><br/>
                  <textarea onChange={this.onDescriptionChange} value={description}/>
                </div>
                <AnchorLink href="#projects">
                  <button type="submit" className="projects-button">ADD</button>
                </AnchorLink>
              </form>
            </div>
          </div>
          <img src="./images/Vector (4).png" alt="ven" className="vector-card"/>
          <div className="card13" id="projectsView">
            <h1 className="project">Projects</h1>
            <ul>
              {projectsList.map((each)=>(
                <li>
                  <div>
                    <h1>{each.name}</h1>
                    <p>{each.des}</p>
                  </div>
                  <button type="button" className="viewProject">
                    <a href={each.url} className="viewProject">View Project</a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="Contact" className="card7">
          <div className="contact-card">
            <img src="./images/bi_linkedin.png" alt="linkdein"/>
            <img src="./images/ph_instagram-logo-fill.png" alt="linkdein"/>
            <img src="./images/bi_envelope-fill.png" alt="linkdein"/>
          </div>
          <p>@copy right 2024 All Rights Reserved</p>
        </div>
        <img src="./images/Vector (4).png" alt="ven" className="vector-card"/>
      </div>
    )
  }
}

export default Home;