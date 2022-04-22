import { Text, Space, Center, Paper, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "dayjs/locale/pt-br";

const Schedule = () => (
	<main>
		<Text size="xl" weight="bold" align="center">
			Agendar Vacina
		</Text>
		<Space h="md" />
		<Center>
			<Paper shadow="md" p="xl" style={{ width: "40%" }}>
				<TextInput label="Nome" required mb={12} />
				<DatePicker
					label="Data de nascimento"
					firstDayOfWeek="sunday"
					inputFormat="DD/MM/YYYY"
					locale="pt-br"
					required
					mb={12}
				/>
			</Paper>
		</Center>
	</main>
);

export default Schedule;
