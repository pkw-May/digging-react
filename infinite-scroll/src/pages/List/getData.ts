import { MockData } from '../../types/data';
import { MOCK_DATA } from '../../data/MOCK_DATA';

const PER_PAGE = 10;

export interface GetMockDataResult {
	datas: MockData[];
	isEnd: boolean;
}

// 페이지는 1부터 시작함
export const getMockData = (pageNum: number): Promise<GetMockDataResult> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const datas: MockData[] = MOCK_DATA.slice(
				PER_PAGE * pageNum,
				PER_PAGE * (pageNum + 1)
			);
			const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length;

			resolve({ datas, isEnd });
		}, 1500);
	});
};
