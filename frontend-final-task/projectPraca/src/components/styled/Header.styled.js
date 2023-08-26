import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100vw;
	max-height: 1340px;
	margin: 0 auto;
	display: flex;
	background-color: #1e1e1f;
	justify-content: space-around;
`;

export const StyledHeader = styled.header`
	width: 1430px;
	display: flex;
	justify-content: space-around;
`;

export const DropDownProfile = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: end;
	width: 260px;
	gap: 12px;
	color: white;
	padding: 16px;
	font-size: 16px;

	button {
		background-color: inherit;
		color: #f7f7f7;
		border: 0;
		cursor: pointer;
	}

	.content {
		opacity: 0;
		display: flex;
		flex-direction: column;
		color: #f7f7f7;
		text-decoration: none;

		&:hover {
			opacity: 1;
		}
		a {
			display: flex;
			flex-direction: column;
			color: #f7f7f7;
			text-decoration: none;

			&:hover {
				color: #a1a1a1;
			}
		}
	}
`;
