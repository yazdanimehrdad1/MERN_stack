import React, {Component} from "react"

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            ageAdd: this.props.age
        }
    }


    
    render(){

        const {firstName, lastName, hair} = this.props;

        return(
            <div>
                <h2>{this.props.firstName}, {this.props.lastName}</h2>
                <p>Age : {this.state.ageAdd}</p>
                <p>Color : {hair}</p> 
                <button  onClick={ ()=> this.setState({ageAdd: this.state.ageAdd + 1} )} >Increase {firstName} Age</button>
            </div>
        )
    }
}

export default PersonCard;