import {
	Text,
	Table,
	Paper,
	Space,
	Center,
	SegmentedControl,
	Group,
} from "@mantine/core";
import { Calendar, Clock } from "tabler-icons-react";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import api from "../service/api";

const Patients = () => {
	const [patients, setPatients] = useState([]);
	const [isPatientVaccinated, setIsPatientVaccinated] = useState([]);
	const [timeDisabled, setTimeDisabled] = useState(true);
	const [day, setDay] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await (await api.get("/patients")).data.patients;
				setPatients(data);

				setIsPatientVaccinated(data.map((patient) => patient.wasVaccinated));
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, []);

	dayjs.extend(utc);
	dayjs.extend(timezone);

	return (
		<main>
			<Text size="xl" weight="bold" align="center" color="#52040F">
				Agendamentos
			</Text>
			<Center>
				<Paper shadow="xs" p="xl" style={{ width: "80%" }}>
					<Group position="center" grow>
						<DatePicker
							icon={<Calendar size={16} color="#52040F" />}
							label="Buscar por dia"
							firstDayOfWeek="sunday"
							clearable
							onChange={async (value) => {
								if (value != null) {
									setDay(dayjs(value).format("YYYY-MM-DD"));

									const patientsOnDay = await (
										await api.get(
											`/patients/onDay/${dayjs(value).format("YYYY-MM-DD")}`
										)
									).data.scheduleOnDate;

									setPatients(patientsOnDay);
									setTimeDisabled(false);
								} else {
									const patients = await (
										await api.get("/patients")
									).data.patients;

									setPatients(patients);
									setTimeDisabled(true);
								}
							}}
						/>
						<TimeInput
							icon={<Clock size={16} color="#52040F" />}
							label="Buscar por hora"
							disabled={timeDisabled}
							clearable
							onChange={async (value) => {
								const patientsOnDate = await (
									await api.get(
										`/patients/onDate/${dayjs(value).format(`${day}THH`)}`
									)
								).data.scheduleOnDayAndHour;

								setPatients(patientsOnDate);
							}}
						/>
					</Group>
				</Paper>
			</Center>
			<Space h="md" />
			<Center>
				<Paper shadow="md" p="xl" style={{ width: "80%" }}>
					<Table highlightOnHover fontSize="md">
						<thead>
							<tr>
								<th>Nome do paciente</th>
								<th>Data de nascimento</th>
								<th>Dia da vacina</th>
								<th>Horário da vacina</th>
								<th>Vacinado(a)</th>
							</tr>
						</thead>
						<tbody>
							{patients.map((patient, index) => (
								<tr key={index}>
									<td>{patient.name}</td>
									<td>{dayjs(patient.birthDate).format("DD/MM/YYYY")}</td>
									<td>{dayjs(patient.scheduleDate).format("DD/MM/YYYY")}</td>
									<td>
										{dayjs(patient.scheduleDate)
											.tz("Greenwich")
											.format("HH:mm")}
									</td>
									<td>
										<SegmentedControl
											value={isPatientVaccinated[index] ? "Sim" : "Não"}
											onChange={(value) => {
												const newData = [...isPatientVaccinated];
												newData[index] = value === "Sim";
												setIsPatientVaccinated(newData);

												api.put(`/patients/${patient._id}`, {
													wasVaccinated: newData[index],
												});
											}}
											style={{ backgroundColor: "#52040F" }}
											styles={{
												label: { color: "white" },
											}}
											data={[
												{ label: "Não", value: "Não" },
												{ label: "Sim", value: "Sim" },
											]}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Paper>
			</Center>
		</main>
	);
};

export default Patients;
