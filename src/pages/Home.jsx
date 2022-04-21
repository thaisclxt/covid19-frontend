import {
	MantineProvider,
	AppShell,
	Header,
	Text,
	Button,
	Space,
	Center,
} from "@mantine/core";
import { Link } from "react-router-dom";

import myTheme from "../theme";

const Home = () => {
	return (
		<MantineProvider theme={myTheme}>
			<AppShell
				padding="md"
				header={
					<Header height={70} p="md" style={{ backgroundColor: "#52040F" }}>
						<div
							style={{ display: "flex", alignItems: "center", height: "100%" }}
						>
							<Text size="xl" color="white">
								Vacinação Covid-19
							</Text>
						</div>
					</Header>
				}
			>
				{
					<Center>
						<Button size="lg" component={Link} to="/schedule">
							Agendar vacina
						</Button>
						<Space w="xl" />
						<Button size="lg" component={Link} to="/patients">
							Visualizar agendamentos
						</Button>
					</Center>
				}
			</AppShell>
		</MantineProvider>
	);
};

export default Home;
