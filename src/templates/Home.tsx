import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";

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

const categories = [
    {
        name: "Festas",
        icon: <span className="text-xl">🎉</span>
    },
    {
        name: "Aniversários",
        icon: <span className="text-xl">🎂</span>
    },
    {
        name: "Shows",
        icon: <span className="text-xl">🎵</span>
    },
    {
        name: "Exibições",
        icon: <span className="text-xl">🖼️</span>
    },
    {
        name: "Workshop",
        icon: <span className="text-xl">🔨</span>
    },
    {
        name: "Outros",
        icon: <span className="text-xl">✨</span>
    }
];

const Home = () => {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="container mx-auto px-4 pt-12 pb-20 md:pt-24 md:pb-32">
                    <div className="max-w-2xl">
                        <motion.h1
                            className="text-4xl md:text-6xl font-light leading-tight tracking-tighter mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Descubra momentos inesquecíveis <span className="font-normal">prontos para acontecer</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 mb-8 md:pr-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            De reuniões íntimas a grandes celebrações, encontre eventos que combinem com seu humor e estilo.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="inline-flex items-center text-lg font-medium group">
                                Ver Eventos
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="absolute -right-24 md:right-0 -bottom-36 md:-bottom-24 w-3/4 md:w-1/2 h-96 rounded-full bg-yellow-50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
            </section>

            {/* Featured Events */}
            <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
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
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-2xl md:text-3xl font-light mb-12 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Procure por categoria
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white mb-3">
                                    {category.icon}
                                </div>
                                <p className="text-sm font-medium">{category.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;