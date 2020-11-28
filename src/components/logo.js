import React, { Component } from 'react';

export default class logo extends Component{
    render (){
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <div className="logo-main"> 
                <img style={size} alt="logo daily smarty (grande)" src="/assets/ds_circle_logo.png"/>
            </div>
        );
    };
}