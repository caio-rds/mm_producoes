import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Ana Carolina Silva',
        role: 'Noiva',
        event: 'Casamento',
        rating: 5,
        text: 'A MM Produções superou todas as nossas expectativas. Cada detalhe foi cuidadosamente planejado e executado com perfeição. Nosso casamento foi exatamente como sonhamos.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Roberto Mendes',
        role: 'Diretor de Marketing',
        event: 'Evento Corporativo',
        rating: 5,
        text: 'Profissionalismo excepcional e atenção aos detalhes. A equipe da MM transformou nossa conferência em um evento memorável que impressionou todos os participantes.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
        name: 'Maria Fernanda Costa',
        role: 'Mãe da debutante',
        event: 'Festa de 15 Anos',
        rating: 5,
        text: 'A festa da minha filha foi um sonho realizado. A equipe conseguiu capturar perfeitamente a personalidade dela e criar uma celebração única e inesquecível.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
];

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">
                        O que dizem
                        <span className="block font-medium italic">nossos clientes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles falam sobre suas experiências conosco.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="mb-12">
                                <Quote className="w-16 h-16 text-gray-300 mx-auto mb-8" />
                                <blockquote className="text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed mb-8">
                                    "{testimonials[currentTestimonial].text}"
                                </blockquote>

                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                                />
                                <div className="text-left">
                                    <h4 className="font-medium text-gray-900">
                                        {testimonials[currentTestimonial].name}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].event}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Testimonial indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentTestimonial
                                        ? 'bg-black scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}