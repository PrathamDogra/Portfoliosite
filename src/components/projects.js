import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', background: 'url(https://pngimage.net/wp-content/uploads/2018/06/machine-learning-png-7.png) center / cover' }}></CardTitle>
            <CardText>
            <h5>
            Year-vs-GDP-simple-linear-regression
            </h5>
             
            </CardText>
            <CardActions border>
              <a href="https://github.com/PrathamDogra/Year-vs-GDP-simple-linear-regression-">
               <Button colored>Project</Button>

              </a>
             
            </CardActions>
          </Card>
     
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="container">
          <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover' }}></CardTitle>
            <CardText>
              <h5>
                Portfolio Website
              </h5>

            </CardText>
            <CardActions border>
              <a href="https://github.com/PrathamDogra/Year-vs-GDP-simple-linear-regression-">
                <Button colored>Project</Button>

              </a>

            </CardActions>
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', height: '140px', background: 'url(data:image/png;base64,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) center / cover' }}></CardTitle>
            <CardText>
              <h5>
                Tabs in JavaScript
              </h5>

            </CardText>
            <CardActions border>
              <a href="https://github.com/PrathamDogra/Javascript-Tabs">
                <Button colored>Project</Button>

              </a>

            </CardActions>
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
       
          <div>
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', height: '140px', background: 'url(https://cdn.iconscout.com/icon/free/png-256/python-1-226045.png) center / cover' }}></CardTitle>
              <CardText>
                <h5>
                  Speech To text converter
              </h5>

              </CardText>
              <CardActions border>
              <a href="https://github.com/PrathamDogra/Speech-to-text-converter">
                  <Button colored>Project</Button>

                </a>

              </CardActions>
            </Card>

          </div>
        
      )
    }

  }



  render() {
    return(
      <div className="projects-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>ML</Tab>
          <Tab>React</Tab>
          <Tab>JS</Tab>
          <Tab>Python</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
