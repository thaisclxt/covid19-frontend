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
	const [timeDisabled, setTimeDisabled] = useState([true]);

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
			<Space h="md" />
			<Center>
				<Paper shadow="xs" p="xl" style={{ width: "80%" }}>
					<Group position="center" grow>
						<DatePicker
							icon={<Calendar size={16} color="#52040F" />}
							label="Buscar por data"
							firstDayOfWeek="sunday"
							inputFormat="DD/MM/YYYY"
							locale="pt-br"
							clearable
							onChange={async (value) => {
								if (value != null) {
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
							label="Horário da vacina"
							disabled={timeDisabled}
							clearable
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
