import React, { useState } from "react";

//let prendo = "red";
//utilice este home para encontrar el error
const Home = () => {
	const [prendo, setPrendo] = useState(0);
	return (
		<div className="container">
			<div
				onClick={() => setPrendo(1)}
				className={"luz roja" + (prendo == 1 ? " brillo" : "")}></div>
			<div
				onClick={() => {
					setPrendo(2);
				}}
				className={
					"luz amarilla" + (prendo == 2 ? " brillo" : "")
				}></div>
			<div
				onClick={() => {
					setPrendo(3);
				}}
				className={"luz verde" + (prendo == 3 ? " brillo" : "")}></div>
		</div>
	);
};

export default Home;
