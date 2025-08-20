import Image from "next/image";


type Service = {
  title: string;
  CardImage:string;
  description: string;
  CardSize:string;
};

const services: Service[] = [
  { title: "A/B And Multivariate Testing",CardImage:"/RectangleHero.png", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",CardSize:"m" },
  { title: "User Behavior Analysis",CardImage:"/RectangleHero.png", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",CardSize:"m" },
  { title: "Landing Page Optimization",CardImage:"/RectangleHero.png", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",CardSize:"m" },
  { title: "Personalization Techniques",CardImage:"/RectangleHero.png", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",CardSize:"l" },
  { title: "Conversion Funnel Optimization",CardImage:"/RectangleHero.png", description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",CardSize:"l" },
];

export default function OurSevices() {
  return (
    <section className="bg-secondary py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">What We Do</h2>
        <p className="text-gray-600 mt-2">I’m a paragraph. Click here to add your own text and edit me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pb-6">
        {services.map((service, i) =>
          service.CardSize === 'm' && (
            <div key={i} className="bg-white rounded-lg pb-6 shadow hover:shadow-lg transition">
              <div className="relative w-full h-60 rounded-lg"> 
                <Image
                  src={service.CardImage}
                  alt="About us"
                  layout="fill"
                  className="object-cover rounded-t-lg"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2 pl-6 pr-6 pt-4">{service.title}</h3>
              <p className="text-gray-600 text-base pl-6 pr-6">{service.description}</p>
            </div>
          )
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) =>
          service.CardSize === 'l' && (
            <div key={i} className="bg-white  rounded-lg pb-6 shadow hover:shadow-lg transition col-span-2">
              <div className="relative w-full h-60 rounded-lg"> 
                <Image
                  src={service.CardImage} 
                  alt="About us"
                  layout="fill"
                  className="object-cover rounded-t-lg"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2 pl-6 pr-6 pt-4">{service.title}</h3>
              <p className="text-gray-600 text-base pl-6 pr-6">{service.description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};


