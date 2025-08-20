
export default function SeoContentI() {
  const features = [
    {
      icon:"/coreValues/balance.png",
      title: "On-Page SEO",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      icon:"/coreValues/balance.png",
      title: "Your Backlink Profile",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      icon:"/coreValues/balance.png",
      title: "SERP Ranking & Reports",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
  ];

  return (
    <section className="bg-primary py-12 px-6 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-black pr-4">
          Working with an  
          </span>
          <span>
          SEO company in Sri Lanka?
          </span>
        </h2>
        <p className="mt-2 text-black">
          I’m a paragraph. Click here to add your own text
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="relative border rounded-lg p-6 bg-white text-gray-900 shadow hover:shadow-md transition overflow-hidden min-h-72 h-72"
          >
            {/* Oval shape in corner */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/25 rounded-full"></div>

            {/* Icon box */}
            <div className="w-12 h-12 bg-teal-100 rounded flex items-center justify-center mb-4 relative z-10">
              <img src={feature.icon} alt={feature.title} />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg relative z-10">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 relative z-10">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
