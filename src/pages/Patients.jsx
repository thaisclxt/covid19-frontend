import { Table } from "@mantine/core";

const Patients = () => (
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
);

export default Patients;
