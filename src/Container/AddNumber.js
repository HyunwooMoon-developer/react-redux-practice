/* eslint-disable import/no-anonymous-default-export */
//import React, { Component } from 'react';
import AddNumber from '../AddNumber/AddNumber';
import {connect} from 'react-redux';


//map redux dispatch to react props
function mapDispatchToProps(dispatch){
    return {
        onClick: function(size){
            dispatch({type: 'INCREMENT', size: size})
        }
    }
}

//it doesn't need mapStateToProps
export default connect(null, mapDispatchToProps)(AddNumber);

/*import store from '../store';

export default class extends Component{
    render(){
        return(
            <AddNumber onClick={function(size){
                store.dispatch({ type: "INCREMENT", size: size });
            }.bind(this)}/>
        )
    }
}*/