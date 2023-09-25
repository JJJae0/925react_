import { useState } from 'react';

import './style.scss';

// 리액트 개발 시 불변성이 중요한 이유
// 리액트는 원본이 있어야 복사본을 통해서 차이점을 비교분석
// 리액트 안에서 배열이나, 객체 같은 참조형 자료는 무조건 depp copy 를 해서 데이터를 변경해야됨

function App() {
	console.log('app');
	// const [상태값, 상태변경전용함수] = useState(초기값);
	// 리액트 컴포넌트는 State 값이 State 변경함수로 변경되어야지만 컴포넌트가 재랜더링됨
	// 숫자를 증가, 감소시킬 때 전위 증감 연산자를 써야지만 해당 랜더링 사이클에서 바로 값이 변경되면서 다음번 랜더링에 반영됨
	let [Num, setNum] = useState(0);
	console.log(Num);

	return (
		<>
			<h1>{Num}</h1>
			<button onClick={() => setNum(--Num)}>minus</button>
			<button onClick={() => setNum(++Num)}>plus</button>
		</>
	);
}

export default App;
