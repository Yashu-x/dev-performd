import ServiceCard from "./ServiceCard";

interface Service { title: string; description: string; link: string; }
interface Props { services: Service[]; }

const FALLBACK = [
  { title: "Web Designing", description: "I'm a paragraph. Click here to add your own text and edit me.", link: "#" },
  { title: "App Development", description: "We create high-quality apps with stunning design and smooth performance.", link: "#" },
  { title: "SEO Optimization", description: "Boost your website ranking with our proven SEO strategies.", link: "#" },
];

export default function Services({ services }: Props) {
  const list = services.length > 0 ? services : FALLBACK;
  return (
    <>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">We Are Offering Many</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
      </div>
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} link={service.link} image="/ServiceCard.png" />
          ))}
        </div>
      </section>
    </>
  );
}