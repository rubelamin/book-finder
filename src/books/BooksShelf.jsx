import { Fragment, useState } from "react";

import BooksCard from "./BooksCard";
import SearchBooks from "./SearchBooks";
import SortBooks from "./SortBooks";

import { allbooks } from "../assets/booksData";

export default function BooksShelf() {
	const [books, setBooks] = useState(allbooks || []);
	const [sorted, setSorted] = useState("");
	const [search, setSearch] = useState("");

	function handleSearch(text) {
		setSearch(text);
		const searchedBooks = allbooks.filter((book) => {
			return book.title.toLowerCase().includes(text.toLowerCase());
		});
		setBooks(searchedBooks);
	}

	function handleSortChange(eventValue) {
		setSorted(eventValue);
		const srtd = sortingBooks(eventValue, books);
		setBooks(srtd);
	}

	function handleFavClick(bookId) {
		setBooks(
			books.map((book) => {
				if (book.id === bookId) {
					return { ...book, isFavorite: !book.isFavorite };
				}
				return book;
			})
		);
	}

	return (
		<main className="my-10 lg:my-14">
			<header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
				<div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
					<div>
						<h6 className="mb-2 text-base lg:text-xl">
							Trending on 2021
						</h6>
						<h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
							Trending Books of the Year
						</h2>
						<SearchBooks
							onSearch={handleSearch}
							searchValue={search}
						/>
					</div>
					<div className="flex items-stretch space-x-3">
						<SortBooks
							onSorted={handleSortChange}
							sortedValue={sorted}
						/>
					</div>
				</div>
			</header>

			<div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{books.length > 0 ? (
					books?.map((book) => (
						<Fragment key={book.id}>
							<BooksCard bookData={book} onFav={handleFavClick} />
						</Fragment>
					))
				) : (
					<div className="justify-center text-center h-40 w-full">
						There is no books found!
					</div>
				)}
			</div>
		</main>
	);
}

function sortingBooks(eventValue, arr) {
	if (eventValue === "name_asc") {
		const sortedBooks = arr.sort((a, b) => {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();
			if (titleA < titleB) return -1;
		});
		return sortedBooks;
	} else if (eventValue === "name_desc") {
		const sortedBooks = arr.sort((a, b) => {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();
			if (titleA > titleB) return -1;
		});
		return sortedBooks;
	} else if (eventValue === "year_asc") {
		const sortedBooks = arr.sort((a, b) => {
			const titleA = Number(a.publishedOn);
			const titleB = Number(b.publishedOn);
			if (titleA < titleB) return -1;
		});
		return sortedBooks;
	} else if (eventValue === "year_desc") {
		const sortedBooks = arr.sort((a, b) => {
			const titleA = Number(a.publishedOn);
			const titleB = Number(b.publishedOn);
			if (titleA > titleB) return -1;
		});
		return sortedBooks;
	} else if (eventValue === "default") {
		const sortedBooks = arr.sort((a, b) => {
			const titleA = Number(a.id);
			const titleB = Number(b.id);
			if (titleA < titleB) return -1;
		});
		return sortedBooks;
	}
}
