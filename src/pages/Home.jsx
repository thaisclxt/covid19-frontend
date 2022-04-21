import { AppShell, Header, Text, Button } from "@mantine/core";
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
					<Button radius="lg" mr={10} component={Link} to="/schedule">
						Agendar vacina
					</Button>
					<Button radius="lg" ml={10} component={Link} to="/patients">
						Visualizar agendamentos
					</Button>
				</nav>
			}
		</AppShell>
	);
};

export default Home;
