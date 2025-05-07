import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Filter, Search } from "lucide-react";
import { format } from "date-fns";
import type {EventType} from "../@types";

const events: EventType[] = [
    {
        id: "1",
        title: "Summer Sunset Festival",
        description: "Join us for a magical evening of music and fun!",
        location: "Beachfront Park",
        date: new Date("2023-07-15"),
        time: "18:00",
        category: "party",
        imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "2",
        title: "Neon Nights Dance Party",
        description: "Dance the night away with neon lights and great music!",
        location: "Downtown Club",
        date: new Date("2023-08-05"),
        time: "22:00",
        category: "party",
        imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    // Add more events as needed
];


export default function Events() {
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { value: "all", label: "All" },
        { value: "party", label: "Party" },
        { value: "birthday", label: "Birthday" },
        { value: "concert", label: "Concert" },
        { value: "exhibition", label: "Exhibition" },
        { value: "workshop", label: "Workshop" },
        { value: "other", label: "Other" }
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

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                className="text-3xl md:text-4xl font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Discover Events
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
                        placeholder="Search for events..."
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
                            <motion.div
                                key={event.id}
                                className="group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                layout
                            >
                                <div>
                                    <div className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={event.imageUrl || `https://source.unsplash.com/random/600x400/?${event.category}`}
                                                alt={event.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center text-xs text-gray-500 mb-2">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                <span>
                          {event.date ? format(new Date(event.date), "MMMM d, yyyy") : "Date TBA"}
                        </span>
                                            </div>
                                            <h3 className="font-medium text-lg mb-2 group-hover:text-gray-700 transition-colors">
                                                {event.title}
                                            </h3>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <MapPin className="h-3 w-3 mr-1" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}