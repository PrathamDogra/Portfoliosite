import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi70CCgoE4USkla4_kcZfz9ldKackPMd3KBk2n5ni0cWN2IStC1g"
              alt="Avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h2>Full Stack Web Developer</h2>

           

          <p>HTML | CSS | Bootstrap | JavaScript | React | Django | Python</p>

        <div className="social-links">

          {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/pratham-dogra-62a079140/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
                <a href="https://github.com/PrathamDogra" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/* Facebook */}
                <a href="https://www.facebook.com/pratham.dogra" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />

                </a>


         

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
