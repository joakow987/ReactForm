import React from "react";

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit} id="form">
                <legend className="desc">Passenger personal data:</legend>
                <input
                    placeholder="First Name"
                    onChange={props.handleChange}
                    value={props.firstName}
                    name="firstName" /><br />
                <input
                    placeholder="Last Name"
                    onChange={props.handleChange}
                    value={props.lastName}
                    name="lastName" /><br />
                <input
                    placeholder="Age"
                    onChange={props.handleChange}
                    value={props.age}
                    name="age" /><br />
                <div id="gender-container">
                    <span id="gender">Gender</span>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={props.handleChange}
                            checked={props.gender === "male"} />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={props.handleChange}
                            checked={props.gender === "female"} />
                        Female
                    </label>
                </div>
                <br />
                <label id="location">Destination: </label>
                <select
                    id="select-location"
                    name="destination"
                    onChange={props.handleChange}
                    value={props.destination}
                >
                    <option value="">-- Please choose destination --</option>
                    <option value="warsaw">Warsaw</option>
                    <option value="radom">Radom</option>
                    <option value="gdansk">Gdańsk</option>
                    <option value="wroclaw">Wrocław</option>
                </select>
                <br />
                <div id="diet-container">
                    <label id="diet-desc">Dietary restrictions</label>
                    <label className="diet">
                        <input
                            type="checkbox"
                            onChange={props.handleChange}
                            name="isGlutenFree"
                            checked={props.dietaryRestrictions.isGlutenFree}
                        />Gluten-free
                </label>
                    <label className="diet">
                        <input
                            className="diet"
                            type="checkbox"
                            onChange={props.handleChange}
                            name="isVegan"
                            checked={props.dietaryRestrictions.isVegan}

                        />Vegan
                </label>
                    <label className="diet">
                        <input
                            className="diet"
                            type="checkbox"
                            onChange={props.handleChange}
                            name="isLactoseFree"
                            checked={props.dietaryRestrictions.isLactoseFree}
                        />Lactose-free
                </label>
                </div>
                <br />
                <button type="submit" value="Submit" form="form">Submit</button>
            </form>
            <hr />
            <div className="desc">Entered information:</div>
            <p>Your name: {props.firstName} {props.lastName}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.destination}</p>
            <div>Your dietary restrictions:</div>
            <p>Lactose-free: {props.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
            <p>Vegan: {props.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
            <p>Gluten-free: {props.dietaryRestrictions.isGlutenFree ? "Yes" : "No"}</p>
        </main >
    )

}

export default FormComponent