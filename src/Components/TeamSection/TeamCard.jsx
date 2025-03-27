// TeamCard.jsx
import React from 'react';
import BasicButton from '../SiteAssets/Buttons/BasicButton';

export default function TeamCard(props) {
  return (
    <div className="team-card bg-white md:py-3 lg:py-0 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="card-header h-96 md:h-[1200px] lg:h-96  overflow-hidden rounded-t-xl">
        <img src={props.imgSrc} alt="Team Member" className="w-full h-full object-cover object-center" />
      </div>

      <div className="card-content p-6 md:p-12 lg:p-6">
        <h3 className="text-xl lg:text-xl lg:pb-2 md:text-6xl font-semibold text-gray-800 mb-4 text-center md:pb-4">{props.title}</h3>
        <p className="text-gray-600 md:text-3xl lg:text-xl leading-relaxed mb-6 text-center md:pb-4">{props.info}</p>

        <div className="cta-button w-full  text-center">
          <BasicButton ButtonText="Contact Expert" filled={true} className="w-full" />
        </div>
      </div>
    </div>
  );
}
