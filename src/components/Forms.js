import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather} class="animate__animated animate__fadeIn">
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;