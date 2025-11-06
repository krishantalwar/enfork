import { motion } from "framer-motion";
import { Button } from "./ui/button";

const ContactCTA = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl p-12 lg:p-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We're ready to talk opportunities
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help your business grow and achieve its goals with our comprehensive solutions.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start a Conversation
            </Button>
          </div>

          <div className="relative h-96">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ transform: 'rotate(2deg)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=60"
                alt="Business collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
