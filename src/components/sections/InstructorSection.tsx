import instructorImage from "@/assets/instructor-edilson.png";

const InstructorSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          SEU PROFESSOR
        </h2>

        <div className="card-glass rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-64 flex-shrink-0">
              <img 
                src={instructorImage} 
                alt="Edilson Morais tocando percussão" 
                className="w-full rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-foreground/90 text-lg leading-relaxed">
                Edilson Morais — 40 anos na estrada. Conservatórios, orquestras, 20 países, centenas de gravações, dezenas de artistas.
              </p>
              
              <p className="text-foreground font-semibold text-lg">
                Mas sinceramente? Isso não importa.
              </p>
              
              <p className="text-highlight font-semibold text-lg">
                O que importa é se você vai estar no palco ou não.
              </p>
              
              <p className="text-foreground/90 text-lg">
                Essa página não é sobre mim. É sobre você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
