import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/action';

class Counter extends Component {
   
   // increment = () => {
   //    //this.props.dispatch({ type: "INCREMENT" });
   //    console.log(this.props);
   //    const { increment } = this.props;
   // }

   // decrement = () => {
   //  //  this.props.dispatch({ type: "DECREMENT" });
   // }

   render() {
      
      const { increment, decrement } = this.props;

      return(
         <div>
            <h2>Counter: {this.props.count}</h2>
            <div>
               <button onClick={increment}>Add (+)</button>
               <button onClick={decrement}>Remove (-)</button>
            </div>   
         </div>
      )
   }
}


const mapStateToProps = state => {
   return{
      count: state.count + 1
   }
}

const mapDispatchToProps = dispatch => {
   return{
      increment: () => dispatch(increment),
      decrement: () => dispatch(decrement)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);