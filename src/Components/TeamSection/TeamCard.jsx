// TeamCard.jsx
import React from 'react';
import BasicButton from '../SiteAssets/Buttons/BasicButton';

export default function TeamCard(props) {
  return (
    <div className="team-card bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="card-header h-96 overflow-hidden rounded-t-xl">
        <img src={props.imgSrc} alt="Team Member" className="w-full h-full object-cover object-center" />
      </div>

      <div className="card-content p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{props.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 text-center">{props.info}</p>

        <div className="cta-button w-full text-center">
          <BasicButton ButtonText="Contact Expert" filled={true} className="w-full" />
        </div>
      </div>
    </div>
  );
}
