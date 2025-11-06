import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is 'Enfork', why?",
    answer: "Enfork represents our commitment to excellence and innovation across multiple industries. Our name symbolizes the connection and integration of diverse sectors working together.",
  },
  {
    question: "What is Enfork Creations?",
    answer: "Enfork Creations is our media and entertainment division, focused on creating compelling visual stories and content that inspire and engage audiences worldwide.",
  },
  {
    question: "How is Enfork involved in the Social sector?",
    answer: "Through our NGO and healthcare initiatives, we actively contribute to community development, healthcare accessibility, and social welfare programs.",
  },
  {
    question: "Are your services available globally?",
    answer: "Yes, we operate globally with offices in multiple countries, providing our services and expertise to clients worldwide.",
  },
];

const FAQs = () => {
  return (
    <section className="py-32 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            FAQs
          </h2>
          <p className="text-muted-foreground">
            Find answers to commonly asked questions about Enfork
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
