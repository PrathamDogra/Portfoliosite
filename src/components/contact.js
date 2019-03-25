import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pratham Dogra</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi70CCgoE4USkla4_kcZfz9ldKackPMd3KBk2n5ni0cWN2IStC1g"
              alt="avatar"
              style={{height: '250px'}}
               />
            
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +919971189110
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    dogra.pratham@gmail.com
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
