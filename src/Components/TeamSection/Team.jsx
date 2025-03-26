// TeamSection.jsx
import React from 'react';
import BasicButton from '../SiteAssets/Buttons/BasicButton';
import TeamCard from './TeamCard';

const teamData = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=500&auto=format&fit=crop&q=80',
    title: 'Need a Team?',
    info: 'I can help you find the right technical requirements for your product.'
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
    title: 'Talk to Tech?',
    info: 'Looking to build fast and reduce your time to market? Drop me a message.'
  },
  {
    imgSrc: 'https://plus.unsplash.com/premium_photo-1674507925205-79ae9d27fbe0?w=500&auto=format&fit=crop&q=80',
    title: 'Building MVP?',
    info: 'I will help you build a team of top talent to reach your business goals.'
  }
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Experts</h2>
          <p className="text-gray-600 leading-relaxed">Our team is ready to help you with all your technical needs.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((team, index) => (
            <TeamCard key={index} imgSrc={team.imgSrc} title={team.title} info={team.info} />
          ))}
        </div>
        <div className="text-center mt-12">
          <BasicButton ButtonText="Explore More" filled={true} handleClick={() => {}} />
        </div>
      </div>
    </section>
  );
}
