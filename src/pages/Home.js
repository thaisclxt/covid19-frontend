import { Link } from "react-router-dom";

const Home = () => (
	<div className="App">
		<h1>Vacinação Covid-19</h1>
		<nav>
			<Link to="/schedule">Agendar vacina</Link> |{" "}
			<Link to="/patients">Visualizar agendamentos</Link>
		</nav>
	</div>
);

export default Home;
