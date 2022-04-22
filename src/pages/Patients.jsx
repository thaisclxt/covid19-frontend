import {
	Text,
	Table,
	Paper,
	Space,
	Center,
	SegmentedControl,
} from "@mantine/core";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import api from "../service/api";

const Patients = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		api
			.get("/patients")
			.then((response) => setPatients(response.data.patients))
			.catch((error) => console.error(error));
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
				<Paper shadow="md" p="xl" style={{ width: "80%" }}>
					<Table highlightOnHover>
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
											style={{ backgroundColor: "#52040F" }}
											styles={{
												label: { color: "white" },
											}}
											data={[
												{ label: "Não", value: "não" },
												{ label: "Sim", value: "sim" },
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
