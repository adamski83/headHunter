import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1920px;
	max-height: 1340px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
`;

export const StyledHeader = styled.header`
	width: 1430px;
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
`;

export const StyledMenu = styled.form`
	width: 260px;
	height: 80px;

	select {
		margin-bottom: 10px;
		margin-top: 10px;
		font-family: cursive, sans-serif;
		outline: 0;
		background: #1e1e1f;
		color: #f7f7f7;
		border: 0;
		padding: 4px;
		border-radius: 9px;
	}
`;
