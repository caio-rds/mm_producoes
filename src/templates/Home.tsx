import {motion} from "framer-motion";
import useThemeContext from "../hooks/useThemeContext.tsx";
import { useMediaQuery } from "react-responsive"
import Banner from "../components/banner";
import {useState} from "react";
import HiddenButton from "../components/HiddenButton.tsx";
import CCarousel from "../components/Carousel.tsx";
import type {ServiceType} from "../@types";
import maquiagem from "../assets/maquiagem.jpg";
import penteados from "../assets/penteados.jpg";
import tatuagem from "../assets/tatuagem.jpeg";
import pinturaArtistica from "../assets/pintura_artistica.jpg";
import terere from "../assets/terere.jpg";
import trancas from "../assets/trancas.png";
import Contact from "../components/Contact.tsx";
import TestimonialsSection from "../components/Testmonial.tsx";



const featuredEvents = [
    {
        title: "Summer Sunset Festival",
        date: "July 15, 2023",
        location: "Beachfront Park",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "Neon Nights Dance Party",
        date: "August 5, 2023",
        location: "Downtown Club",
        image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "Art Gallery Opening",
        date: "September 12, 2023",
        location: "Modern Art Museum",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
];

const services: ServiceType[] = [
    {
        "name": "Camarim Completo",
        "icon": <span className="text-xl">💄</span>,
        "contain": [
            {
                title: "Pintura Artística",
                image: pinturaArtistica
            },
            {
                title: "Tatuagem",
                image: tatuagem
            },
            {
                title: "Penteados",
                image: penteados
            },
            {
                title: "Tereré",
                image: terere
            },
            {
                title: "Tranças",
                image: trancas
            },
            {
                title: "Maquiagem de Passeio",
                image: maquiagem
            }
        ],
        "description": "Um espaço dedicado para embelezamento e diversão, com profissionais qualificados para atender a todas as idades.",
    },
    {
        "name": "Recreação Esportiva",
        "icon": <span className="text-xl">🏃</span>,
        "contain": [
            {
                title: "Circuito",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Revezamento",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Joguem Pool",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Colheita",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
        ],
        "description": "Atividades esportivas e recreativas para promover a interação e o trabalho em equipe entre os participantes."
    },
    {
        "name": "Animação Aquática",
        "icon": <span className="text-xl">🏊</span>,
        "contain": [
            {
                title: "Corrida das Boias",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Bandeirinha Aquática",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Futebol Aquático",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Queimado Aquático",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Colheita Aquática",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Bolha Humana",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
        ],
        "description": "Atividades aquáticas para animar e refrescar os participantes, garantindo diversão e segurança.",
    },
    {
        "name": "Animação Show",
        "icon": <span className="text-xl">🎤</span>,
        "contain": [
            {
                title: "Passa ou Repassa",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Bastão",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Alta Tensão",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Pato",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            },
            {
                title: "Feira",
                image: "https://images.unsplash.com/photo-1593642632823-1b4d2f4c5e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
        ],
        "description": "Shows e apresentações para entreter os participantes, com atividades dinâmicas e interativas.",
    }
];

const Home = () => {
    const {darkMode} = useThemeContext();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isOpen, setIsOpen] = useState<number>(0);

    return (
        <div className="flex flex-col items-center justify-center">
            <Banner isMobile={isMobile} darkMode={darkMode}/>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">
                            Nossos
                            <span className="block font-medium italic">Serviços</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Oferecemos uma gama completa de serviços para transformar sua visão em realidade,
                            cuidando de cada detalhe com excelência e sofisticação.
                        </p>
                    </motion.div>

                    <div className="flex-col md:grid-cols-3 gap-4 justify-center items-center border-2 border-gray-200 rounded-md p-4 w-[80vw] md:w-[50vw] mx-auto">
                        <div className="flex items-center justify-start w-full gap-1">
                            {services.map((service, index) => (
                                <HiddenButton
                                    key={index}
                                    onClick={() => {setIsOpen(index)}}
                                    label={service.name}
                                    icon={service.icon}
                                    isOpen={isOpen === index}
                                    theme={darkMode} />
                            ))}
                        </div>

                        <CCarousel>
                            {services[isOpen]?.contain.map((item, index) => (
                                <div key={index} className="w-88 h-120 rounded-2xl mt-3 flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        {typeof item.image === "string" ? (
                                            <img src={item.image} alt={item.title} className="rounded-md w-90 h-112 object-cover mt-2 object-center" />
                                        ) : (
                                            item.image
                                        )}
                                    </div>
                                </div>
                            ))}
                        </CCarousel>
                    </div>
                </div>
            </section>


            {/* Featured Events */}
            <section className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 md:py-24 relative overflow-hidden`}>
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-2xl md:text-3xl font-light mb-12 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Destaques
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative aspect-[3/4] overflow-hidden rounded-md cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                                    <p className="text-white text-sm mb-1">{event.date}</p>
                                    <h3 className="text-white text-xl font-medium">{event.title}</h3>
                                    <p className="text-gray-200 mt-1">{event.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <TestimonialsSection />
            <Contact />

        </div>
    )

}

export default Home;