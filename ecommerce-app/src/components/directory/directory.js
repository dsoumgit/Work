import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selector';

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {                           // destructing 
        sections.map(({ id, ...otherSections }) => (
          <MenuItem key={id} {...otherSections} />
        ))
      }
    </div>
  )
}

const mapToStateProps =  createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapToStateProps)(Directory);



/**** FIRST VERSION */
// class Directory extends Component {
//   constructor() {
//     super();

//     this.state = {
//       sections: [
//         {
//           title: 'hats',
//           imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//           id: 1,
//           linkUrl: 'hats'
//         },
//         {
//           title: 'jackets',
//           imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//           id: 2,
//           linkUrl: ''
//         },
//         {
//           title: 'sneakers',
//           imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//           id: 3,
//           linkUrl: ''
//         },
//         {
//           title: 'womens',
//           imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//           size: 'large',
//           id: 4,
//           linkUrl: ''
//         },
//         {
//           title: 'mens',
//           imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//           size: 'large',
//           id: 5,
//           linkUrl: ''
//         }
//       ]
//     }
//   }

//   render() {

//     return (
//       <div className="directory-menu">
//         {                           // destructing 
//           this.state.sections.map(({ id, ...otherSections }) => (
//             <MenuItem key={id} {...otherSections} />
//           ))
//         }
//       </div>
//     )
//   }
// }

// export default Directory;

/***
 * Note: if there is no size property in the object, it wouldn't render.
 *
 */