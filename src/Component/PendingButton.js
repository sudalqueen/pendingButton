import React, {Component} from 'react';
import "./PendingButton.css";
import {Pending} from "../actions";
import { connect } from 'react-redux';

class PendingButton extends Component{

    onFetching = () =>{

    }

    onSuccessHandle = () =>{
        
    }

    onFailHandle = () =>{
        
    }

    onProcessHandle = () =>{
        
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.props.Pending(this.props.fetchURL, this.props.setURL)}>{this.props.buttonMsg}</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        buttonMsg: state.pendingButton.buttonMsg
    };
}

let mapDispatchToProps =(dispatch)=>{
    return{
        Pending: (url, fn)=>dispatch(Pending(url, fn))
    }
}

PendingButton = connect(mapStateToProps, mapDispatchToProps)(PendingButton);

export default PendingButton;