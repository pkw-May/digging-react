import React from 'react';

interface DataProps {
	productId: string;
	productName: string;
	price: number;
	boughtDate: string;
}

const Item = ({ productId, productName, price, boughtDate }: DataProps) => {
	return (
		<li
			style={{
				display: 'flex',
				border: '1px solid #ddd',
				padding: '10px',
				borderRadius: '5px',
			}}>
			<div>
				<div>id: {productId}</div>
				<div>이름: {productName}</div>
				<div>가격: {price}</div>
				<div>구매일자: {boughtDate}</div>
			</div>
		</li>
	);
};

export default Item;
