import { useState } from 'react';
import './style.scss';

// 리액트 개발 시 불변성이 중요한 이유
// 리액트는 원본이 있어야 복사본을 통해서 차이점을 비교분석
// 리액트 안에서 배열이나, 객체 같은 참조형 자료는 무조건 depp copy 를 해서 데이터를 변경해야됨

function App() {
	const [Degree, setDegree] = useState(0);

	return (
		<>
			<button onClick={() => setDegree(Degree - 45)}>왼쪽으로 회전</button>
			<button onClick={() => setDegree(Degree + 45)}>오른쪽으로 회전</button>
			<article style={{ transform: `rotate(${Degree}deg)` }}>{Degree}</article>
		</>
	);
}

export default App;
