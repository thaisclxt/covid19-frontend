import * as Yup from "yup";
import { Calendar, LetterCase, Vaccine, Check, X } from "tabler-icons-react";
import { Text, Space, Center, Paper, TextInput, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useForm, yupResolver } from "@mantine/form";

import dayjs from "dayjs";
import api from "../service/api";

import "dayjs/locale/pt-br";

const schema = Yup.object().shape({
	name: Yup.string().required("Campo obrigatório"),
	birthday: Yup.string().required("Campo obrigatório"),
	scheduleDay: Yup.string().required("Campo obrigatório"),
	scheduleHour: Yup.string().required("Campo obrigatório"),
});

const Schedule = () => {
	const lsBirthday = localStorage.getItem("Data de nascimento");
	const lsScheduleDay = localStorage.getItem("Dia da vacina");
	const lsScheduleHour = localStorage.getItem("Horário da vacina");

	const form = useForm({
		schema: yupResolver(schema),
		initialValues: {
			name: localStorage.getItem("Nome") ?? "",
			birthday: (lsBirthday && new Date(lsBirthday)) ?? "",
			scheduleDay: (lsScheduleDay && new Date(lsScheduleDay)) ?? "",
			scheduleHour: (lsScheduleHour && new Date(lsScheduleHour)) ?? "",
		},
	});

	localStorage.setItem("Nome", form.values.name);
	localStorage.setItem("Data de nascimento", form.values.birthday);
	localStorage.setItem("Dia da vacina", form.values.scheduleDay);
	localStorage.setItem("Horário da vacina", form.values.scheduleHour);

	return (
		<form
			onSubmit={form.onSubmit((value) => {
				async function pushData() {
					try {
						const hour = dayjs(value.scheduleHour).format("HH:mm:ss");
						const day = dayjs(value.scheduleDay).format("YYYY-MM-DD");

						const scheduleDate = new Date(day + "T" + hour + ".000+00:00");

						const newData = {
							name: value.name,
							birthDate: value.birthday,
							scheduleDate: scheduleDate,
						};

						await api.post("/schedule", newData);

						showNotification({
							title: "Paciente agendado com sucesso",
							color: "teal",
							icon: <Check size={18} />,
							style: { backgroundColor: "#C4C4C4" },
						});
					} catch (error) {
						let errorMessage = "";

						if (error.response.status === 422) {
							errorMessage =
								error.response.data.message ===
								"Limit of 2 patients per hour reached"
									? "Limite atingido de 2 pacientes por hora"
									: "Limite atingido de 20 pacientes por dia";
						}

						showNotification({
							title: "Algo deu errado",
							message: errorMessage,
							color: "red",
							icon: <X size={18} />,
							style: { backgroundColor: "#C4C4C4" },
							styles: {
								title: { color: "black" },
								description: { color: "black" },
							},
						});
					}
				}

				pushData();
			})}
		>
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
