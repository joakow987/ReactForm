import React, {Component} from "react"
import FormComponent from "./FormComponent"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                isGlutenFree: false,
                isVegan: false,
                isLactoseFree: false,
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const {name, value, checked, type} = event.target;
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions,
                        [name]: checked
                    }
                }
            }) :
            this.setState({[name]: value})
    }

    handleSubmit(event) {
        alert(
            `First name: ${this.state.firstName}
     Last name: ${this.state.lastName}
     Destination: ${this.state.destination}
     Age: ${this.state.age}
     Gender: ${this.state.gender}
     Dietary restrictions: ${event.target.name}
  `
        );
        event.preventDefault();
    }

    render() {
        return (
            < FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            //data={this.state}
            />
        )
    }
}

export default Form
