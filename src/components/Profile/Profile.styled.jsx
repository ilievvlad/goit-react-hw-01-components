import styled from "@emotion/styled";

export const Card = styled.div`
	margin: 0 auto;
	text-align: center;
	width: 300px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Description = styled.div`
	padding: 25px;
`;

export const Avatar = styled.img`
	width: 100%;
	border: 1px solid;
	border-radius: 50%;
	margin-bottom:20px;
`;

export const UserName = styled.p`
	font-weight: 700;
	font-size: 25px;
`;

export const Tag = styled.p`
	color: rgba(0, 0, 0, 0.5);
`;

export const Location = styled.p`
	color: rgba(0, 0, 0, 0.5);
`;

export const Stats = styled.ul`
	display: flex;
	margin: 0px;
	padding: 0px;
	background-color: rgba(0, 0, 0, 0.05);

	li {
		padding: 10px 0;
		width: 100%;
		border: 1px solid rgb(0 0 0 / 20%);
  }
`;

export const Label = styled.span`
	display: block;
	padding-bottom: 4px;
`;

export const Quantity = styled.span`
	font-weight: 700;
`;