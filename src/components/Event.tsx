import {Calendar, MapPin} from "lucide-react";
import {format} from "date-fns";
import {motion} from "framer-motion";
import type {EventProps} from "../@types";

const Event = (props: EventProps) => {

    const push = () => {
        window.location.href = `/events/${props.event.id}`;
    }

    return (
        <motion.div
            key={props.event.id}
            className="group"
            onClick={push}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: props.index * 0.05 }}
            layout
        >
            <div>
                <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                        <img
                            src={props.event.imageUrl || `https://source.unsplash.com/random/600x400/?${props.event.category}`}
                            alt={props.event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>
                          {props.event.date ? format(new Date(props.event.date), "MMMM d, yyyy") : "Date TBA"}
                        </span>
                        </div>
                        <h3 className="font-medium text-lg mb-2 group-hover:text-gray-700 transition-colors">
                            {props.event.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{props.event.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Event;