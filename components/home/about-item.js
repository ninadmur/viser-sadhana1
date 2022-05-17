const AboutItem = () => {
  const info = (
    <p className="text-sm text-center lg:text-left xl:text-base"></p>
  );

  return (
    <div className="w-full bg-dropdown-bg py-3 border-b-[0.5px] md:py-10 border-white lg:border-none flex flex-col space-y-5 lg:items-start items-center">
      <div className="bg-transparent space-x-2">
        <i className="fa-solid fa-user-astronaut text-2xl"></i>
        <span className="text-md md:text-lg xl:text-lg font-bold">
          Ashtang Yoga Sutra
        </span>
      </div>
      <div className="bg-transparent w-full">
        <p className="text-sm text-center lg:text-left xl:text-base">
          Ture knowledge of ashtang yoga leads you to prevent sufferings in all
          aspects of life and to attain enlightenment.
        </p>
      </div>
    </div>
  );
};
export default AboutItem;
