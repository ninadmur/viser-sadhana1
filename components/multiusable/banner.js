import Image from 'next/image';

const Banner = ({ image }) => {
  return (
    <div className="h-[calc(100vh-80px)] w-full">
      <Image
        src={image}
        // height="100%"
        // width="100%"
        layout="fill"
        // objectFit="cover"
        // width={1200}
        // height={500}
        // layout="responsive"
      />
    </div>
  );
};

export default Banner;
