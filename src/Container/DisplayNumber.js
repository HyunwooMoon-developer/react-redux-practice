/* eslint-disable import/no-anonymous-default-export */
//import React, { Component } from 'react';
import DisplayNumber from '../DisplayNumber/DisplayNumber';
import {connect} from 'react-redux';

//map redux state to react props
//  state = {number : store.getState().number}
//store.subscribe(function(){
//    this.setState({number: store.getState().number});
//    }.bind(this))
// number={this.state.number}
function mapStateToProps(state){
    return {
        number: state.number
    }
}

//it doesn't need mapDispatchToProps
export default connect(mapStateToProps)(DisplayNumber);

/*
import store from '../store';

export default class extends Component{
    state = {number : store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number: store.getState().number});
        }.bind(this))
    }
    render(){
        return(
            <DisplayNumber number={this.state.number} unit={this.props.unit}/>
        )
    }
}
*/