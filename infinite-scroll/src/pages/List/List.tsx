import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './Item';
import { getMockData, GetMockDataResult } from './getData';
import { MockData } from '../../types/data';

const List: React.FC = () => {
	const navigate = useNavigate();
	const [pageNum, setPageNum] = useState<number>(0);
	const [datas, setDatas] = useState<MockData[]>([]);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const observerTarget = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (isLoading || isEnd) return;

			setIsLoading(true);
			setError(null);

			try {
				const { datas: newDatas, isEnd: reachedEnd }: GetMockDataResult =
					await getMockData(pageNum);
				setDatas((prev) => [...prev, ...newDatas]);
				setIsEnd(reachedEnd);
				setPageNum((prev) => prev + 1);
			} catch (err) {
				setError('Failed to fetch data.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [pageNum, isEnd]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isLoading && !isEnd) {
					setPageNum((prev) => prev + 1);
				}
			},
			{ threshold: 0.1 }
		);

		const currentTarget = observerTarget.current;

		if (currentTarget) {
			observer.observe(currentTarget);
		}

		return () => {
			if (currentTarget) {
				observer.unobserve(currentTarget);
			}
		};
	}, [isLoading, isEnd]);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: '10px',
			}}>
			<h3>List Page</h3>
			<button onClick={() => navigate('/')}> Main Page</button>
			{error && <p style={{ color: 'pink' }}>{error}</p>}

			<ul
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: '10px',
					margin: '0',
					padding: '0',
				}}>
				{datas.map((data, idx) => (
					<Item key={idx} {...data} />
				))}
			</ul>

			{isLoading && (
				<p style={{ display: 'flex', alignSelf: 'center', color: 'green' }}>
					Loading...
				</p>
			)}

			{!isEnd && <div ref={observerTarget} style={{ height: '20px' }} />}

			{isEnd && (
				<p style={{ display: 'flex', alignSelf: 'center', color: 'grey' }}>
					끝
				</p>
			)}
		</div>
	);
};

export default List;
