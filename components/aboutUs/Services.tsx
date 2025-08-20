import Image from "next/image";
import ServiceCard from "./ServiceCard";


const services = [
  {
    title: "Web Designing",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.",
    image: "/ServiceCard.png", 
    link: "#"
  },
  {
    title: "App Development",
    description:
      "We create high-quality apps with stunning design and smooth performance.",
    image: "/ServiceCard.png",
    link: "#"
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website ranking with our proven SEO strategies.",
    image: "/ServiceCard.png",
    link: "#"
  }
];



export default function Services() {
  return (
    <>
      <div>
          {/*Heading*/}
          <h1 className="text-4xl md:text-5xl font-bold ">We Are Offering Many</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
      </div>

      <section className=" pt-12 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>         
    </>
  );
}