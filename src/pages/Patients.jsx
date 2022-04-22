import { Text, Table, Paper, Space, Center } from "@mantine/core";

const Patients = () => {
	const patients = [
		{
			name: "Thaís",
			birthDate: "06/12/2000",
			vaccineDate: "06/12/2000",
			vaccineHour: "00:00",
		},
	];
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
								<th>Nome do pasciente</th>
								<th>Data de nascimento</th>
								<th>Dia da vacina</th>
								<th>Horário da vacina</th>
							</tr>
						</thead>
						<tbody>
							{patients.map((patient, index) => (
								<tr key={index}>
									<td>{patient.name}</td>
									<td>{patient.birthDate}</td>
									<td>{patient.vaccineDate}</td>
									<td>{patient.vaccineHour}</td>
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
