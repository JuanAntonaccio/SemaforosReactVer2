import React, { useState } from "react";

const [prendo, setPrendo] = useState("red");
//let prendo = "red";
//utilice este home para encontrar el error
const Home = () => {
	return (
		<div className="container">
			<div
				onClick={() => setPrendo("red")}
				className={
					"luz roja" + (prendo == "red" ? " brillo" : "")
				}></div>
			<div
				//onClick={() => {
				//	setPrendo("yellow");
				//}}
				className={
					"luz amarilla" + (prendo == "yellow" ? " brillo" : "")
				}></div>
			<div
				//onClick={() => {
				//	setPrendo("green");
				//}}
				className={
					"luz verde" + (prendo == "green" ? " brillo" : "")
				}></div>
		</div>
	);
};

export default Home;
