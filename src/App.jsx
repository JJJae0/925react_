import { useState } from 'react';
import './style.scss';
import Popup from './components/Popup';

// state 생성 true, false
// jsx 에서 state 값이 true 일때에만 Popup 이 보이도록 처리
// 버튼 클릭할 때마다 state 의 true, false 변경

function App() {
	const [Open, setOpen] = useState(false);
	return (
		<>
			<button onClick={() => setOpen(true)}>팝업 열기</button>
			<button onClick={() => setOpen(false)}>팝업 닫기</button>
			{Open && <Popup />}
		</>
	);
}

export default App;
