import React from 'react'
import Nav from '../Nav/page'

const page = () => {
  return (
    <div >
      <Nav/>
      <div class="cont2">
            <div class="par2 ">
                <h3>Professional Background</h3>
                <p>With over 2 years of experience in the web development industry, I have honed my skills in various JavaScript frameworks and libraries, such as React, Node.js, Express. My expertise spans the entire development lifecycle, from conceptualization and design to implementation and deployment.</p>

                <h3>Skills</h3>
                <h5>Front-End Development:</h5>
                <p>HTML5, CSS3, JavaScript React.(ES6+)<br />
                <br />
                Responsive Design, CSS Frameworks (Bootstrap, Tailwind CSS)<br />
                Webpack, Babel, RESTful APIs</p>
                <h5>Back-End Development:</h5>
                <p>Node.js, Express<br />
                Database Management (MongoDB)<br />
                API Development and Integration</p>
        

                <h4>Tools and Technologies:</h4>
                <p>Version Control (Git, GitHub)<br />
                Visual Studio (VS)<br />
                Post Man <br />
                Cloud Services (AWS, Heroku)</p>
                </div>
            <div class="ico">
              <div style={{display:'flex',marginLeft:'55%'}}>
              <div>
            <img src='https://www.svgrepo.com/show/354202/postman-icon.svg ' width={100} height={100} style={{marginLeft:'40%'}}/> </div>
            <div> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519' width={100} height={100} style={{marginLeft:'40%'}}/></div>

            <div> <img src='  https://www.svgrepo.com/show/331488/mongodb.svg' width={100} height={100} style={{marginLeft:'40%'}}/></div>
            </div>
               <img src='https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png' width={500} height={300} style={{marginLeft:'40%'}}/> </div>
            
        </div>
    </div>



  )
}

export default page