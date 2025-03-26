import img1 from './images/image.png';
import img2 from './images/image1.png';
import img3 from './images/image2.png';
import img4 from './images/image3.png';
import img5 from './images/image4.png';
import img6 from './images/image5.png';

import Card from './Card/Card';

const servicesData = [
  {
    img: img1,
    title: 'Product Scope',
    description: '15-day alignment process for product vision and business goals'
  },
  {
    img: img2,
    title: 'UX/UI Design',
    description: 'User-centered design for intuitive interfaces'
  },
  {
    img: img3,
    title: 'MVP Development',
    description: 'Rapid market entry with core functionality'
  },
  {
    img: img4,
    title: 'Dedicated Teams',
    description: 'Full-stack teams for end-to-end product development'
  },
  {
    img: img5,
    title: 'Custom Software',
    description: 'Tailored solutions for enterprise needs'
  },
  {
    img: img6,
    title: 'AI Enablement',
    description: 'Generative AI integration for future-ready systems'
  }
];

export default function Services(props) {
  return (
    <section className="services md:mx-0 lg:mx-32">
      <div className="serviceInfo lg:w-2/4">
        <h1 className="text-4xl font-bold py-6 lg:ml-[3%]">What We Do</h1>
        <p className="text-gray-700 text-xl leading-tight lg:ml-[3%]">We help entrepreneurs and business leaders build and launch innovative custom software solutions across industries. Whether you need a Minimum Viable Product, UX/UI services, full product development, or scaling support - we turn your vision into successful products.</p>
      </div>

      <div className="cards flex flex-wrap lg:justify-center lg:gap-4 items-center mt-10">
        {servicesData.map((service, index) => (
          <Card key={index} imgURL={service.img} name={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}
