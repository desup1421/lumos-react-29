import React from "react";

const MainBlogCard = ({
  cardImage,
  cardTitle,
  cardDate,
  authorName,
  authorImage,
  readTime = '2 Min Read',
  direction,
  side,
}) => {
  return (
    <div
      className={`grid grid-cols-${direction} bg-white border shadow-sm rounded-xl h-full p-6`}
    >
      <img
        src={cardImage}
        alt="Card Image"
        className={`${side}-full object-cover rounded-xl col-span-2 mx-auto`}
      />
      <div className="pt-4 md:pt-5 px-5 col-span-3">
        <h3 className="text-sm font-bold text-gray-800">{cardDate}</h3>
        <p className="mt-1 text-accent text-xl font-bold">{cardTitle}</p>
        <div className="flex items-center justify-between mt-9">
          <div className="flex flex-row justify-between items-center gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src={authorImage}
              alt="Card Image"
            />
            <p className=" text-base text-primary font-bold">{authorName}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-sm text-gray-500">
              {readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className={`flex flex-${direction}  bg-white border shadow-sm rounded-xl h-full p-6`}
    // >
    //   <img
    //     src={cardImage}
    //     alt="Card Image"
    //     className="w-full h-auto rounded-xl"
    //   />
    //   <div className="pt-4 md:pt-5 px-5">
    //     <h3 className="text-sm font-bold text-gray-800">{cardDate}</h3>
    //     <p className="mt-1 text-accent text-xl font-bold">{cardTitle}</p>
    //     <div className="flex flex-row justify-between">
    //       <div className="pt-4 md:ty-5 flex flex-row justify-between items-center gap-5">
    //         <img
    //           className="w-20 h-20 rounded-full"
    //           src={authorImage}
    //           alt="Card Image"
    //         />
    //         <p className=" text-base text-primary font-bold">{authorName}</p>
    //       </div>
    //       <div className="pt-4 md:pt-5 text-end px-5">
    //         <p className="mt-5 text-sm text-gray-500">
    //           {readTime}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainBlogCard;
