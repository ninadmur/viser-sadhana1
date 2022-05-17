import React from 'react';

function About() {
  return (
    <div>
      <div>
        <div className="flex  mx-16 my-20  justify-around">
          <div className=" w-1/4 space-y-3">
            <p className="text-cyan-400 font-bold">WELCOME TO</p>
            <h1 className="font-bold text-[32px]">About Company</h1>
            <p>
              Are constantly thriving to improve our already high standards to
              have you see us as the absolute best in the industry. It’s not
              enough to have trust in the cleaning.
            </p>
            <h2 className="font-bold text-[20px]">Our Mission</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
            <h2 className="font-bold text-[20px]">Our Vission</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <div className="relative">
            <img src="/images/aboutfolder/about_img-2-1-1.jpeg" alt="" />
            <img
              className="absolute top-16 -left-20"
              src="/images/aboutfolder/about_img-1-1.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <img
          className="w-full "
          src="/images/aboutfolder/testimonial_bg_img.jpeg"
          alt=""
        />
        <div
          className="flex flex-col  bg-white border shadow-2xl mx-auto w-[60%] 
         p-16 relative -top-[200px]"
        >
          <h1 className="font-bold text-4xl text-center pb-48 ">
            TESTIMONIALS
          </h1>
          <p className="flex  justify-around">
            World is committed to making participation in the event harass ment
            free on experience for everyone, regardless of leve of expenc gender
            by identity and expression oriention disability for personal
            informa3tion.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mb-48 ">
        <p className="text-cyan-400 font-bold text-xl">TEAM MEMBERS</p>
        <h1 className="font-bold text-[36px] ">Creative Team</h1>
      </div>
      <div className="flex justify-center space-x-10 mb-32 ">
        <div className=" shadow-black border-2 ">
          <img className=" " src="/images/aboutfolder/team_13.jpg" alt="" />
        </div>
        <div className=" shadow-black border-2 ">
          <img src="/images/aboutfolder/team_14.jpg" alt="" />
        </div>
        <div className=" shadow-black border-2">
          <img src="/images/aboutfolder/team_15.jpg" alt="" />
        </div>
        <div className=" shadow-black border-2">
          <img src="/images/aboutfolder/team_img-1-2.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default About;
