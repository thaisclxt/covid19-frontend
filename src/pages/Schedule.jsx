import { Text, Space, Center, Paper, Input } from "@mantine/core";

const Schedule = () => (
	<main>
		<Text size="xl" weight="bold" align="center">
			Agendar Vacina
		</Text>
		<Space h="md" />
		<Center>
			<Paper
				shadow="md"
				p="xl"
				style={{ width: "40%", backgroundColor: "#52040F" }}
			>
				<Input placeholder="Nome" size="md" />
			</Paper>
		</Center>
	</main>
);

export default Schedule;
