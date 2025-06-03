import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Filter, Search } from "lucide-react";
import type {EventType} from "../@types";
import Event from "../components/Event.tsx";

export default function Events({events}: {events: EventType[]}) {
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { value: "all", label: "Todos" },
        { value: "party", label: "Festas" },
        { value: "birthday", label: "Aniversários" },
        { value: "concert", label: "Shows" },
        { value: "exhibition", label: "Exibições" },
        { value: "workshop", label: "Workshop" },
        { value: "other", label: "Outros" }
    ];

    const filteredEvents = events.filter(event => {
        const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
        const matchesSearch =
            !searchQuery ||
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description?.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        // Simula o carregamento inicial
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 segundo de simulação de carregamento

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                className="text-3xl md:text-4xl font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Descubra os melhores eventos
            </motion.h1>

            {/* Filters */}
            <motion.div
                className="flex flex-col md:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Procure por eventos..."
                        className="w-full pl-10 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                    <Filter className="text-gray-400 h-4 w-4 flex-shrink-0" />
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-colors ${
                                selectedCategory === category.value
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setSelectedCategory(category.value)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Events List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {loading ? (
                        // Loading skeletons
                        Array.from({ length: 6 }).map((_, index) => (
                            <motion.div
                                key={`skeleton-${index}`}
                                className="bg-gray-100 rounded-lg overflow-hidden h-80 animate-pulse"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            />
                        ))
                    ) : filteredEvents.length === 0 ? (
                        <motion.div
                            className="col-span-full flex flex-col items-center justify-center py-16 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Calendar className="h-12 w-12 text-gray-300 mb-4" />
                            <h3 className="text-xl font-medium mb-2">No events found</h3>
                            <p className="text-gray-500">Try adjusting your filters or search query</p>
                        </motion.div>
                    ) : (
                        filteredEvents.map((event, index) => (
                            <Event event={event} index={index} key={event.id} />
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}