export const Movies = () => {
  return (
    <div className="flex flex-col w-[158px] sm:w-[180px] md:w-[200px] lg:h-[230px] h-[280px] sm:-[310px] lg:h-[340px] bg-gray-200 dark:bg-gray-800   border border-green-400">
      <div className="w-full h-[234px] sm:h-[234px] lg:h-[260px] bg-gray-400">
        <img
          alt="Santa poster"
          className="w-full h-[210px] sm:h-[234px] lg:h-[260px] object-cover"
        ></img>
      </div>
      <div className="flex flex-col p-2 sm:p-3 gap-1 ">
        <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-gray">
          6.9/10
        </h1>
        <h2 className="text-gray-800 dark:text-gray-200 text-sm sm:text-base lg:text-lg font-medium text-gray-900">
          Dear Santa
        </h2>
      </div>
    </div>
  );
};
