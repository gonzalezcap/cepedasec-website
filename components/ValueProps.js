'use client';

export default function ValueProps() {
  const features = [
    {
      title: "Elegant Spaces",
      description: "Pristine rooms designed with refinement and attention to detail for your special occasion."
    },
    {
      title: "Capacity & Flexibility",
      description: "334 seated guests plus standing room available. Adaptable layouts for weddings, galas, and celebrations."
    },
    {
      title: "Premium Services",
      description: "Bridal suite, prep area, full AV systems, and dedicated event coordination for seamless execution."
    }
  ];

  return (
    <section id="spaces" className="w-full py-24 bg-black border-y border-gold/20">
      <div className="container-max px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6 tracking-wide">
            Why Choose Cepedas
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            We provide the sophisticated setting and expert service your event deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="border-l border-gold/30 pl-6">
              <h3 className="text-2xl font-serif text-gold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gold/20">
          <p className="text-gray-500 font-light text-center">
            Tulsa, Oklahoma • 918.830.3692 • info@cepedasec.com
          </p>
        </div>
      </div>
    </section>
  );
}
