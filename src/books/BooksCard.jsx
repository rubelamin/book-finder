/* eslint-disable react/prop-types */
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import Startimg from "../assets/star.svg";

export default function BooksCard({ bookData, onFav }) {
	const ratingSum = bookData.ratings.reduce((acc, cv) => acc + cv, 0);
	const ratingStar = Math.floor(ratingSum);
	const starUI = Array.from({ length: ratingStar }, (_, index) => (
		<img key={index} src={Startimg} alt={`${ratingStar} stars`} />
	));
	return (
		<div className="space-y-3">
			<div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
				<img
					className="max-w-[144px]"
					src={bookData.coverImg}
					alt="book name"
				/>
			</div>
			<div className="space-y-3">
				<h4 className="text-lg font-bold lg:text-xl">
					{bookData.title + ` (${bookData.publishedOn})`}
				</h4>
				<p className="text-xs lg:text-sm">
					By : <span>{bookData.author}</span>
				</p>
				<div className="flex items-center justify-between">
					<h4 className="text-lg font-bold lg:text-xl">
						${bookData.price}
					</h4>
					<div className="flex items-center space-x-1">
						{starUI}

						<span className="text-xs lg:text-sm">
							({ratingStar} Star)
						</span>
					</div>
				</div>

				<div className="flex items-center gap-3 text-xs lg:text-sm">
					<button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
						<IoCartOutline />
						Add to Cart
					</button>
					{bookData?.isFavorite ? (
						<button
							onClick={() => onFav(bookData.id)}
							className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] text-[#DC2954] py-1.5 transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
						>
							<FaHeart />
							Favourite
						</button>
					) : (
						<button
							onClick={() => onFav(bookData.id)}
							className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] text-[#1C4336] py-1.5  transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
						>
							<FaRegHeart />
							Favourite
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
