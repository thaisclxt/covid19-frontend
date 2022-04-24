import {
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

const Home = () => {
	const matches = useMediaQuery("(min-width: 900px)");

	return (
		<AppShell
			padding="md"
			header={
				<Header fixed={true} height={70} p="md">
					<Text size="xl" color="white">
						Vacinação Covid-19
					</Text>
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
					<SimpleGrid cols={matches ? 3 : 1}>
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
	);
};

export default Home;
