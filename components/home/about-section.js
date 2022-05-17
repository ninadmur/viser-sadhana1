import AboutItem from './about-item';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="bg-dropdown-bg text-white flex flex-col justify-center lg:px-14 xl:px-32 lg:space-y-16 lg:pb-28 lg:pt-10">
      <h1 className="text-3xl text-center lg:text-left mt-5">Our Platform</h1>
      <div className="flex  w-full flex-col lg:flex-row lg:space-x-10 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10 flex-1 items-center">
          <AboutItem />
          <AboutItem />
          <AboutItem />
          <AboutItem />
        </div>
        <div className="flex-1 px-5 lg:px-0 bg-white">
          <img src="/images/home-images/about-image.gif" />
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
