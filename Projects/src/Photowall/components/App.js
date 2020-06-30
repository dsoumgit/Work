import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

function mapStateToProps(state) {
    return {
        posts: state 
    }   
}

/* Note: this function is optional. 
 * We create this function is because we don't need to access the dispatch method in Main
 *      component via this way 'this.props.dispatch(removePost(1))' 
 * Doing this way, we can bind the dispatch method and access it in Main via this way
 *  'this.props.removePost(1)'
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ actions }, dispatch);
}


                        // pass state to Main component as props 
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App; 