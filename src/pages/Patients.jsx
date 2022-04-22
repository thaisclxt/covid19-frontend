import { Text, Table, Paper, Space, Center } from "@mantine/core";

const Patients = () => (
	<main>
		<Text size="xl" weight="bold" align="center">
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
						<tr>
							<td>Thaís</td>
							<td>06/12/200</td>
							<td>22/04/2022</td>
							<td>15h39min</td>
						</tr>
						<tr>
							<td>Thaís</td>
							<td>06/12/200</td>
							<td>22/04/2022</td>
							<td>15h39min</td>
						</tr>
					</tbody>
				</Table>
			</Paper>
		</Center>
	</main>
);

export default Patients;
