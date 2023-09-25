import { useState } from 'react';
import './style.scss';

// 리액트 개발 시 불변성이 중요한 이유
// 리액트는 원본이 있어야 복사본을 통해서 차이점을 비교분석
// 리액트 안에서 배열이나, 객체 같은 참조형 자료는 무조건 depp copy 를 해서 데이터를 변경해야됨

function App() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);
	const newColors = [...Colors];
	newColors[0] = 'hotpink';

	return (
		<>
			{Colors.map((color, idx) => (
				<button style={{ backgroundColor: color }} key={idx}>
					{color}
				</button>
			))}
			<button onClick={() => setColors(newColors)}>색상변경</button>
		</>
	);
}

export default App;
