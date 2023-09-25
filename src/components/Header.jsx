// rfce
function Header() {
	/*
  여러줄 주석
  */
	const text = 'abc';
	const cl = 'title';

	return (
		// 한줄 주석
		<header>
			{/* JSX 안 쪽 주석 */}
			<h1 className={cl}>{text}</h1>
		</header>
	);
}

export default Header;
