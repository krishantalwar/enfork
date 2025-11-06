import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sunlife Homes",
    description: "Comprehensive real estate platform with modern design and seamless user experience.",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f59?w=1200&auto=format&fit=crop&q=60",
  },
  {
    title: "HRT College",
    description: "Educational institution website featuring interactive elements and student resources.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&auto=format&fit=crop&q=60",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Our Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Showcasing our portfolio of successful projects across various industries
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-foreground/20 transition-all duration-300"
            >
              <div className="relative h-80 rounded-b-3xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} project`} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
