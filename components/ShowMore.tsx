"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
 
import {  HiChevronLeft, HiChevronRight } from "react-icons/hi";




const ShowMore = ({ pageNumber, totalPages, isNext, isPrev, lastPage, searchParams }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = (type: "prev" | "next") => {
    // Calculate the new limit based on the page number and navigation type
    const newPage = type === "next" ? (pageNumber * 10) + 1 : Math.max(1, (pageNumber * 10) - 1);

    // Update the "page" search parameter in the URL with the new value
    const newPathname = updateSearchParams("page", `${newPage}`);

    router.push(newPathname);
  };
  const displayedPages = totalPages.slice(0, 6); // Limit to the first 6 pages
  return (
    <div className="w-full flex-center gap-2 mt-10">
      <button
        className={`bg-white shadow-md rounded-md text-gray-500 hover:bg-purple-400 hover:text-white  ${isPrev ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={() => handleNavigation("prev")}
      >
        <HiChevronLeft size={40} />
      </button>
      <div className="gap-2 flex">
        {/* Dynamic tabs */}
        {displayedPages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 bg-white shadow-md rounded-md text-gray-500 hover:bg-purple-400 hover:text-white  ${
              searchParams === page ? "bg-purple-700 text-white" : ""
            }`}
            onClick={() => router.push(updateSearchParams("page", `${page}`))}
          >
            {page}
          </button>
        ))}
          {totalPages.length > 6 && (
          <button
            className="px-4 py-2 bg-white shadow-md rounded-md text-gray-500"
            disabled
          >
            ...
          </button>
        )}
      </div>
      <button
        className={`bg-white shadow-md rounded-md text-gray-500 hover:bg-purple-400 hover:text-white ${lastPage !== undefined && !lastPage ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={() => handleNavigation("next")}
      >
        <HiChevronRight size={40}/>
      </button>
    </div>
  );
};

export default ShowMore;

