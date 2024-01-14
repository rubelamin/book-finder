import Footer from "./Footer";
import Header from "./Header";
import BooksShelf from "./books/BooksShelf";

function App() {
	return (
		<>
			<Header />
			<BooksShelf />
			<Footer copyRightText="All rights reserved by Learn with Sumit" />
		</>
	);
}

export default App;
