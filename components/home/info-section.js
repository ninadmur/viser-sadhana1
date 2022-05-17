import InfoItem from './info-item.';

const InfoSection = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row lg:space-x-8 xl:px-32 lg:px-24 lg:py-20  md:justify-center">
      <InfoItem />
      <InfoItem />
      <InfoItem />
    </div>
  );
};
export default InfoSection;
