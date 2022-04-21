import { AppShell, Header, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<AppShell
			padding="md"
			header={
				<Header height={70} p="md">
					<div
						style={{ display: "flex", alignItems: "center", height: "100%" }}
					>
						<Text>Vacinação Covid-19</Text>
					</div>
				</Header>
			}
		>
			{
				<nav>
					<Link to="/schedule">Agendar vacina</Link> |{" "}
					<Link to="/patients">Visualizar agendamentos</Link>
				</nav>
			}
		</AppShell>
	);
};

export default Home;
