import styled from 'styled-components';

export const SignInForm = styled.form`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	width: ${({ width }) => width || '124px'};
	height: 76px;
	border-radius: 15px;
	margin-bottom: 30px;
`;

export const StyledInput = styled.input`
	width: 350px;
	height: 40px;
	padding: 10px;
	background-color: #292a2b;
	color: #7e7e7e;
	margin-bottom: 15px;
	border-radius: 5px;
	outline: 0;
	border: 0;
`;

export const Text = styled.h2`
	text-align: right;
	color: #f7f7f7;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 0.7px;
`;

export const Link = styled.a`
	color: #f7f7f7;
`;
export const Button = styled.button`
	width: ${({ width }) => width || undefined};
	height: 39px;
	color: inherit;
	background-color: ${({ background }) => background || undefined};
	border: 0;
	outline: 0;
`;
