import BasicButton from '../SiteAssets/Buttons/BasicButton';

import React from 'react';

export default function HeroSection(props) {
  const onClick = () => {
    console.log('Hero Button Clicked');
  };

  return (
    <div class="heroSection bg-slate-950 h-screen md:h-[700px] lg:h-screen lg:pb-52 lg:pl-40 md:pl-6">
      <div className=" relative pt-7 xl:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center">
          <div className="xl:mt-8">
            <button className=" hover:opacity-90 flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-sm lg:text-base md:text-3xl font-medium text-gray-500 p-2 lg:p-2">{props.name}</button>
            <div className="text-5xl lg:text-6xl md:text-5xl xl:text-8xl text-white tracking-1px font-extrabold">
              <h1 className="lg:text-7xl leading-tight mb-10  lg:mt-4 md:text-7xl md:mt-10">{props.mainText}</h1>
            </div>
            <div className="my-2">
              <BasicButton ButtonText="Book a Call" filled={false} handleClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
