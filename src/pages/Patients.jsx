import { Text, Table, Paper, Space, Center } from "@mantine/core";
import { useEffect, useState } from "react";

import api from "../service/api";

const Patients = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		api
			.get("/patients")
			.then((response) => setPatients(response.data.patients))
			.catch((error) => console.error(error));
	}, []);

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
								<th>Data da vacina</th>
							</tr>
						</thead>
						<tbody>
							{patients.map((patient, index) => (
								<tr key={index}>
									<td>{patient.name}</td>
									<td>{patient.birthDate}</td>
									<td>{patient.scheduleDate}</td>
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
