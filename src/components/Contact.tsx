import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode implementar o envio do formulário
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Telefone',
            content: '+55 (11) 9999-9999',
            action: 'tel:+5511999999999'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'contato@mmproducoes.com.br',
            action: 'mailto:contato@mmproducoes.com.br'
        },
        {
            icon: MapPin,
            title: 'Endereço',
            content: 'São Paulo, SP',
            action: null
        },
        {
            icon: Clock,
            title: 'Horário',
            content: 'Seg-Sex: 9h às 18h',
            action: null
        }
    ];

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">
                        Vamos criar algo
                        <span className="block font-medium italic">incrível juntos</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Entre em contato conosco para discutir seus sonhos e transformá-los em uma experiência inesquecível.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nome completo
                                    </label>
                                    <input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="rounded-xl border-gray-200 focus:border-black transition-colors h-12"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="rounded-xl border-gray-200 focus:border-black transition-colors h-12"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Telefone
                                    </label>
                                    <input
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="rounded-xl border-gray-200 focus:border-black transition-colors h-12"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tipo de evento
                                    </label>
                                    <select
                                        value={formData.eventType}
                                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                    >

                                        <option value="Selecione o tipo" disabled/>

                                        <option value="casamento">Casamento</option>
                                        <option value="corporativo">Evento Corporativo</option>
                                        <option value="festa_15_anos">Festa de 15 Anos</option>
                                        <option value="aniversario">Aniversário</option>
                                        <option value="formatura">Formatura</option>
                                        <option value="outro">Outro</option>

                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Data desejada do evento
                                </label>
                                <input
                                    type="date"
                                    value={formData.eventDate}
                                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                    className="rounded-xl border-gray-200 focus:border-black transition-colors h-12"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Conte-nos sobre seu evento
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="rounded-xl border-gray-200 focus:border-black transition-colors min-h-32 w-full resize-none"
                                    placeholder="Descreva sua visão, número de convidados, orçamento aproximado e qualquer detalhe especial..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center bg-black hover:bg-gray-800 text-white rounded-xl h-14 text-lg font-medium transition-all duration-300 gap-4 hover:scale-105"
                            >
                                <Send className="w-5 h-5 ml-2" />
                                Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-medium mb-6">Informações de Contato</h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{info.title}</h4>
                                            {info.action ? (
                                                <a
                                                    href={info.action}
                                                    className="text-white/80 hover:text-white transition-colors"
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-white/80">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Resposta Garantida
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Nossa equipe responde a todas as solicitações em até 24 horas. Para projetos urgentes, entre em contato por telefone.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Disponível para novos projetos
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}