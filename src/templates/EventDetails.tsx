import { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import type { EventType } from "../@types";
import {useParams} from "react-router-dom";

export default function EventDetails({ events }: { events: EventType[] }) {
    const { id: eventId } = useParams<{ id: string }>()
    const [event, setEvent] = useState<EventType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const MotionSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="mb-12"
        >
            {children}
        </motion.section>
    );

    useEffect(() => {
        console.log("Event ID from URL:", eventId);
        if (eventId) {
            const foundEvent = events.find((e) => e.id === eventId);
            if (foundEvent) {
                setEvent(foundEvent);
            } else {
                console.error("Event not found");
                setEvent(null);
            }
        } else {
            console.error("No event ID provided");
            setEvent(null);
        }
        setLoading(false);
    }, [events]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mb-8"></div>
                    <div className="h-16 w-full bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="aspect-[16/9] w-full bg-gray-200 rounded animate-pulse mb-8"></div>
                    <div className="space-y-4">
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    return event ? (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <MotionSection>
                    <div onClick={() => window.location.href = '/events'} className="inline-flex items-center text-gray-500 hover:text-black transition-colors mb-8">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Voltar para eventos
                    </div>

                    <h1 className="text-3xl md:text-4xl font-light mb-6">{event.title}</h1>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>
                                {event.date ? format(new Date(event.date), "EEEE, MMMM d, yyyy • h:mm a") : "Date TBA"}
                            </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </MotionSection>

                <MotionSection delay={0.1}>
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-8">
                        <img
                            src={event.imageUrl || `https://source.unsplash.com/random/1200x800/?${event.category}`}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </MotionSection>

                <MotionSection delay={0.2}>
                    <div className="prose max-w-none">
                        <h2 className="text-xl font-medium mb-4">Sobre o evento</h2>
                        <div className="text-gray-600 space-y-4">
                            <p>{event.description || "No description available for this event."}</p>
                        </div>
                    </div>
                </MotionSection>

                <MotionSection delay={0.3}>
                    <div className="border-t border-gray-100 pt-8">
                        <h2 className="text-xl font-medium mb-4">Localização</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-600 mb-2">{event.location}</p>
                        </div>
                    </div>
                </MotionSection>
            </div>
        </div>
    ) : (
        <div className="container mx-auto px-4 py-12">
            <p className="text-center text-gray-500">Event not found.</p>
        </div>
    );
}