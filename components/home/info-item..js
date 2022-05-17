const InfoItem = () => {
  return (
    <div className="w-full border-b-[0.5px] border-white bg-dropdown-bg flex flex-col items-center group text-white px-2 py-5  sm:py-16">
      <div className="bg-white group-hover:bg-home-info-icon-bg lg:border-8 border-white w-10 h-10 md:w-20 md:h-20 rounded-full flex justify-center items-center">
        <i className="fa-solid fa-file text-lg sm:text-2xl text-gray-400 group-hover:text-white" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-2 text-sm sm:text-lg font-semibold xl:text-xl">
          Dignose your Symptoms
        </h1>
        <p className="text-center mt-6 text-xs sm:text-sm xl:text-base">
          Our application helps you find your possible diseases and natural way
          to cure
        </p>
      </div>
    </div>
  );
};
export default InfoItem;
