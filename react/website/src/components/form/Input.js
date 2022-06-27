import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <input type={this.props.inputType} className={this.props.className} name={this.props.name} id={this.props.name} placeholder={this.props.placeholder} /> 
            </div>
        )
    }
}
export default Input;