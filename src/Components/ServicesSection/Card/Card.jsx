export default function Card(props) {
  return (
    <section className="card cursor-pointer serviceCards shadow-2xl p-5 h-64 bg-white rounded-xl ">
      <img src={props.imgURL} alt="service" srcset="" />
      <div className="info">
        <h4 className=" font-bold text-2xl md:text-5xl lg:text-2xl">{props.name}</h4>
        <p className="text-gray-600 md:text-3xl lg:text-xl md:mt-2 font-semibold">{props.description}</p>
      </div>
    </section>
  );
}
