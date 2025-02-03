import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">About Me</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
        <img src="/media/images/saiSmruti.jpg" style={{ borderRadius: "100%", width: "50%" }} />

          <h4 className="mt-5">Sai Smruti</h4>
          <h6>Front End Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>My name is Sai Smruti Ranjan Das, and I am a passionate Full Stack Developer currently pursuing a B.Tech in Computer Science and Engineering.</p>
          <p>I have built projects like Tiffin Fusion, an Airbnb clone, and a weather website using React and APIs. As a contributor in GSSoC and Hacktoberfest, I actively participate in open-source projects.</p>
          <p>I am eager to gain industry experience through internships and contribute to innovative projects while continuously improving my technical and problem-solving abilities in web development.</p>
          <p className='text-center'>
            Connect on <a href="https://www.linkedin.com/in/saismrutiranjan/"><i className="fa-brands fa-linkedin text-body-secondary fs-5"></i></a>&nbsp;&nbsp; <a href="https://github.com/saismrutiranjan18"><i className="fa-brands fa-github text-body-secondary fs-5"></i></a> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team;