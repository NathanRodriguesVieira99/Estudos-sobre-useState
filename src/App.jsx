import { useState } from "react";

import ExibirNome from "./AplicaNome";

function App() {
	const [count, setCount] = useState(0);
	const add = () => {
		setCount(count + 1);
	};

	return (
		<>
			<p>{count}</p>
			<button type="button" onClick={add}>
				add
			</button>
			<ExibirNome/>
		</>
	);
}

export default App;
