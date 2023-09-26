import { useEffect } from 'react';
import { useState } from 'react';

function Popup() {
	const [Num, setNum] = useState(0);
	useEffect(() => {
		console.log('popup생성');

		return () => {
			// 컴포넌트가 unmount 시 한 번만 실행
			console.log('popup소멸');
		};
	}, []);

	useEffect(() => {
		console.log('popup의 Num 상태변화');
	}, [Num]);
	return (
		<aside>
			<h1>{Num}</h1>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
