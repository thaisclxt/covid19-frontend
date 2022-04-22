import {
	MantineProvider,
	AppShell,
	Header,
	Text,
	Button,
	Center,
	Image,
	SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

import myTheme from "../theme";

const Home = () => {
	const matches = useMediaQuery("(min-width: 900px)");

	return (
		<MantineProvider theme={myTheme}>
			<AppShell
				padding="md"
				header={
					<Header
						fixed={true}
						height={70}
						p="md"
						style={{ backgroundColor: "#52040F" }}
					>
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
					<Center
						style={{
							position: "absolute",
							top: 70,
							left: 0,
							right: 0,
							bottom: 0,
						}}
					>
						<SimpleGrid cols={matches ? 3 : 1} style={{ alignItems: "center" }}>
							<Button size="lg" component={Link} to="/schedule">
								Agendar vacina
							</Button>
							<Image width={230} src="coronavirus.png" alt="coronavirus" />
							<Button size="lg" component={Link} to="/patients">
								Visualizar agendamentos
							</Button>
						</SimpleGrid>
					</Center>
				}
			</AppShell>
		</MantineProvider>
	);
};

export default Home;
