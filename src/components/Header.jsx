// rfce
function Header() {
	const handlder = () => {
		console.log('test');
	};
	return (
		<header>
			{/* JSX 안 쪽 주석 */}
			<h1 className='title'>LOGO</h1>
			<p onClick={() => handlder('Hello')}>링크</p>
		</header>
	);
}

export default Header;
