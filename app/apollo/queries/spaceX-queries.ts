export const getShips = gql`
	query getShips {
		ships {
			id
			name
			active
		}
	}
`
