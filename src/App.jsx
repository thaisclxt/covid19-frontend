import { Link } from "react-router-dom";

function App() {
	return (
		<div>
			<h1>Vacinação Covid-19</h1>
			<nav>
				<Link to="/schedule">Agendar vacina</Link> |{" "}
				<Link to="/patients">Visualizar agendamentos</Link>
			</nav>
		</div>
	);
}

export default App;
