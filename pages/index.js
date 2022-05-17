import AboutSection from '../components/home/about-section';
import InfoSection from '../components/home/info-section';
import Banner from '../components/multiusable/banner';
import NewsLetter from '../components/multiusable/news-letter';

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Banner image="/images/home-images/homeBanner8.webp" />
        <div className="absolute top-24 left-48 text-white w-1/4 space-y-2">
          <button className="border-2 border-white rounded-full px-5 py-1 font-semibold">
            Heal your Life
          </button>
          <h1 className="text-5xl font-bold">Master your Mind, Body & Soul</h1>
          <p>
            Awareness is the only solution to all your problems and we help you
            to achieve that.
          </p>
        </div>
      </div>

      <div>
        <InfoSection />
        <AboutSection />
        <NewsLetter />
      </div>
    </div>
  );
}
