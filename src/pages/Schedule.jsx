import { Text, Space, Center, Paper, TextInput, Button } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { Calendar, LetterCase, Vaccine } from "tabler-icons-react";
import { useForm } from "@mantine/form";

import "dayjs/locale/pt-br";

const Schedule = () => {
	const form = useForm({
		initialValues: {
			name: "",
			birthday: "",
			scheduleDay: "",
			scheduleHour: "",
		},
	});

	return (
		<form onSubmit={form.onSubmit((value) => console.log(value))}>
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
						{...form.getInputProps("name")}
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
						{...form.getInputProps("birthday")}
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
						{...form.getInputProps("scheduleDay")}
					/>
					<TimeInput
						icon={<Vaccine size={16} color="#52040F" />}
						label="Horário da vacina"
						required
						clearable
						mb={12}
						{...form.getInputProps("scheduleHour")}
					/>
					<Button type="submit">Confirmar agendamento</Button>
				</Paper>
			</Center>
		</form>
	);
};

export default Schedule;
