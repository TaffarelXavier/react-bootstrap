import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

var RenderData = props => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchBusinesses = () => {
			setUsers(props.data);
		};
		fetchBusinesses();
	});

	return (
		<>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>NOME</th>
						<th>EMAIL</th>
						<th>WHATSAPP</th>
					</tr>
				</thead>
				<tbody>
					{users.map(({ id, username, email, whatsapp }, index) => {
						return (
							<tr key={index}>
								<td>{username}</td>
								<td>{email}</td>
								<td>{whatsapp}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default RenderData;
