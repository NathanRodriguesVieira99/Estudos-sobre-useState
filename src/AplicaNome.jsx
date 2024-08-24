import React, { useState } from "react";

const ExibirNome = ({ nomeEscrito }) => {
	return <h2>seu nome é: {nomeEscrito}</h2>;
};

const AplicaNome = () => {
	const [nome, setNome] = useState("");

	const handleInputChange = (event) => {
		setNome(event.target.value);
	};

	return (
		<div>
			<h1>informe seu nome:</h1>
			<input type="text" onChange={handleInputChange} value={nome} />
			<ExibirNome nomeEscrito={nome} />
		</div>
	);
};

export default AplicaNome;
