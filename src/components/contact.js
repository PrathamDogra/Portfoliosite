import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (

      <div className="contact-grid">
        <h2>Contacts</h2>
        <List>
          <ListItem>
            <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
              <i className="fa fa-phone-square" aria-hidden="true" />
              +919971189110
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
              <i className="fa fa-envelope" aria-hidden="true" />
              dogra.pratham@gmail.com
            </ListItemContent>
          </ListItem>
        </List>


      </div>
    )
  }
}

export default Contact;




// <div className="contact-list">
//   <List>
//     <ListItem>
//       <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
//         <i className="fa fa-phone-square" aria-hidden="true" />
//         +919971189110
//       </ListItemContent>
//     </ListItem>
// <List>



//   <ListItem>
//     <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
//       <i className="fa fa-envelope" aria-hidden="true" />
//       dogra.pratham@gmail.com
//                   </ListItemContent>
//   </ListItem>




// </List>
