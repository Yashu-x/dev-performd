import Image from "next/image";


const services = [
  {
    title: "Finding Balance",
    IconImage:"/coreValues/balance.png",
    description:
      "I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    image: "/ServiceCard.png", 
    link: "#"
  },
  {
    title: "Finding Balance",
    IconImage:"/coreValues/balance.png",
    description:
      "I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    image: "/ServiceCard.png", 
    link: "#"
  },
  {
    title: "Finding Balance",
    IconImage:"/coreValues/balance.png",
    description:
      "I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    image: "/ServiceCard.png", 
    link: "#"
  },
  {
    title: "Finding Balance",
    IconImage:"/coreValues/balance.png",
    description:
      "I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.I’m a Paragraph. Click Here To Add Your Own Text And Edit Me. It’s Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The Font.",
    image: "/ServiceCard.png", 
    link: "#"
  },
];



export default function CoreValues() {
  return (
      
    <>
      <div className="py-16">
          {/*Heading*/}
          <h1 className="text-3xl md:text-3xl font-bold mb-4">Our Core Values</h1>
          <p> paragraph paragraph paragraph paragraph paragraph paragraph paragraph<br /> paragraph paragraph paragraph paragraph </p>
      </div>

      <section className=" pt-4 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border border-primary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col overflow-hidden"
          >
            {/* Top Section: Icon + Title */}
            <div className="flex items-center mb-4">
              <Image
                src={service.IconImage}
                alt={`${service.title} icon`}
                width={48}
                height={48}
                className="p-2 bg-gray-100 rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-left mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-10 text-justify">
              {service.description}
            </p>

            {/* Ellipse in bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/25 rounded-full translate-x-1/4 translate-y-1/4" />

          </div>

        ))}
      </div>
    </section>         
    </>
  );
}