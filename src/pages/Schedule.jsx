import { Text, Space, Center, Paper, TextInput, Button } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { Calendar, LetterCase, Vaccine } from "tabler-icons-react";

import "dayjs/locale/pt-br";

const Schedule = () => {
	return (
		<main>
			<Text size="xl" weight="bold" align="center" color="#52040F">
				Agendar Vacina
			</Text>
			<Space h="md" />
			<Center>
				<Paper shadow="md" p="xl" style={{ width: "40%" }}>
					<TextInput
						label="Nome"
						required
						mb={12}
						icon={<LetterCase size={16} color="#52040F" />}
						value={value}
					/>
					<DatePicker
						icon={<Calendar size={16} color="#52040F" />}
						label="Data de nascimento"
						firstDayOfWeek="sunday"
						inputFormat="DD/MM/YYYY"
						locale="pt-br"
						required
						clearable
						mb={12}
					/>
					<DatePicker
						icon={<Vaccine size={16} color="#52040F" />}
						label="Data da vacina"
						firstDayOfWeek="sunday"
						inputFormat="DD/MM/YYYY"
						locale="pt-br"
						required
						clearable
						mb={12}
					/>
					<TimeInput
						icon={<Vaccine size={16} color="#52040F" />}
						label="Horário da vacina"
						required
						clearable
						mb={12}
					/>
					<Button onclick={onSubmit}>Confirmar agendamento</Button>
				</Paper>
			</Center>
		</main>
	);
};

export default Schedule;
