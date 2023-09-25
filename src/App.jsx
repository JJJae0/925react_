import Footer from './Footer';
import Header from './components/Header';
import Popup from './components/Popup';
import List from './components/List';
import './style.scss';

// 원시형자료 : 메모리, 값 자체가 callstack 에서 생성된 다음애 저장
// 원시형자료는 변수값을 다른 변수에 복사했을 때 값 자체가 복사되는 deep copy;
// 복사된 값을 변경해도 원본은 그대로 유지되는 불변성 유지 (immutable);

// 참조형자료 : 메모리(callstack), 배열, 객체 등의 값 자체는 (heap memory) 생성돔
// callstack 에 있는 메모리에는 배열의 값 자체가 담기는 게 아닌 힙메모리에 있는 값의 위치값이 담김
// 참조링크가 담겨있는 변수를 새로운 변수에 옮겨담으면 값이 복사되는 것이 아닌 참조링크만 복사됨
// 결국 같은 값을 가르키고 있는 두 개의 링크만 복사가 됨
// 복사가 된 링크의 값을 바꾸면 결국 원본값이 회손됨 (shallow copy)

// 리액트 개발 시 불변성이 중요한 이유
// 리액트는 원본이 있어야 복사본을 통해서 차이점을 비교분석
// 리액트 안에서 배열이나, 객체 같은 참조형 자료는 무조건 depp copy 를 해서 데이터를 변경해야됨

function App() {
	let arr = ['reading', 'game', 'cook'];
	// 전개연산자 (Spread Operator) : heap 메모리에 있는 값을 물리적으로 꺼내서 전개
	// 전개연산자를 이용하면 원본을 훼손시키지 않으면 참조형 자료를 deep copy 가능
	let newArr = [...arr];
	newArr[0] = 'exercise';
	console.log(newArr);
	console.log(arr);

	let isPop = true; // or false
	let isFooter = false; // or false
	return (
		<>
			<Header />
			{isFooter && <Footer />}
			{isPop ? <Popup /> : null}
			<List />
		</>
	);
}

export default App;

/*
	SSR vs CSR
	
	SSR - Server Side Rendering
	- 페이지 이동시마다 일일이 서버쪽에 HTML 파일을 요청해서 가져오는 방식
	- 장점 : 초기 로딩 속도가 빠름, 검색엔진 최적화 (SEO 좋음)
	- 단점 : 페이지 이동시마다 일일이 서버쪽에 파일을 요청해야 되므로 페이지 깜박 거림

	CSR - Client Side Rendering
	- 초기에 빈 HTML 파일을 서버쪽에서 가져오고 화면에 출력될 모든 데이터를 자바스크립트로 chunk 단위의 모든 데이터 파일 가져온 후 빈 HTML 파일에 동적으로 출력
	- 장점 : 한 번에 서브페이지 포함한 모든 데이터를 불러오기 때문에 페이지 이동시마다 새롭게 파일을 요청할 필요가 없기 때문에 페이지 전환이 자연스러움
	- 단점 : 모든 페이지에 대한 데이터를 한 번에 다 가져오기 때문에 초기로딩속도가 SSR방식에 비해서는 늦음, 검색엔진 최적화가 안됨

	Real DOM (실제돔)
	- HTML 태그를 이용해서 구조를 만들면 브라우저가 이를 해석해서 실제 DOM형태로 객체를 만들고 화면에 렌더링

	Virtual DOM (가상돔)
	- 브라우저에 의해 Real DOM 으로 변경되기 전 자바스크립트에 의해서 메모리상으로 가상의 DOM 을 만들어서 기존에 DOM 구조와 차이점을 분석하고 바뀐 부분을 다시 렌더링하는 형태

	JSX
	- 리액트에 DOM 을 효율적으로 생성하기 위한 HTML 의 규칙성을 따라한 자바스크립트 돔 제작 방식

	컴포넌트 생성 시 주의점 
	- 무조건 JSX 를 리턴
	- 함수 이름은 대문자로 시작
	- export 로 내보내야지 다른 컴포넌트에서 불러올 수 있음
	- 하나의 컴포넌트 함수는 단인 JSX 를 리턴 가능
	- 복수개의 JSX 를 리턴하고 싶을 때는 wrapping El 로 묶어서 그룹화한뒤 리턴
	- 중첩된 Element 노드를 생성하지 않고 복수개의 JSX 를 리턴하고 싶을 땐 <> </> Framework
*/
