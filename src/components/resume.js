import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi70CCgoE4USkla4_kcZfz9ldKackPMd3KBk2n5ni0cWN2IStC1g"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Pratham Dogra</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>I am a programmer with intermediate knowledge in HTML, CSS and JavaScript. My programming journey began 5 years ago with C++, soon in college I switch to C(as C was in my college curriculum) and then eventually Python(worked with Tkinter and Scikit-learn). Around 3 months back I made a tryst with Front End web-development and got awestruck by its potential. Ever since I have worked on React, Django and Angular. This website is a glimpse of my work.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            
            <h5>Phone</h5>
            <p>+919971189110</p>
            <h5>Email</h5>

            
            <p>dogra.pratham@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2005}
              endYear={2016}
              schoolName="KV Pragati Vihar, Lodhi Road"
              schoolDescription="Studied Computer-Science and Mathematics"
               />

               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="GGSIP University"
                 schoolDescription="Pursuing Bachelors of Technology in Electronics and Communications (expected 2021)"
                  />
               

              

            

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={55}
                />
                <Skills
                  skill="HTML"
                  progress={80}
                  />
                  <Skills
                    skill="CSS"
                    progress={50}
                    />
                    <Skills
                      skill="ReactJS"
                      progress={25}
                      />
                    <Skills
                    skill="Django"
                    progress={30}
                    />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
