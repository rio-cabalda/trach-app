"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { CustomButton } from ".";

const ShowMore = ({handleShowMore}:any) => {
// const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
//   const router = useRouter();

//   const handleNavigation = () => {
//     // Calculate the new limit based on the page number and navigation type
//     const page = (pageNumber *10 )+1;

//     // Update the "limit" search parameter in the URL with the new value
//     const newPathname = updateSearchParams("page", `${page}`);
    
//     router.push(newPathname);
//   };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* {!isNext && ( */}
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-[#8C3AFF] rounded-md text-white"
          handleClick={handleShowMore}
        />
      {/* )} */}
    </div>
  );
};

export default ShowMore;