
import Layout from "./components/Layout.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./templates/Home.tsx";
import Events from "./templates/Events.tsx";
import EventDetails from "./templates/EventDetails.tsx";
import type {EventType} from "./@types";

const events: EventType[] = [
    {
        id: "68198352d0e33561876b0b41",
        title: "Handcraft Workshop",
        description: "Learn the art of pottery from master craftspeople. All materials included, suitable for beginners.",
        location: "Creative Studio",
        date: new Date("2023-08-19T14:00:00Z"),
        time: "14:00",
        category: "workshop",
        imageUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "68198352d0e33561876b0b40",
        title: "Tech Startup Mixer",
        description: "Network with fellow entrepreneurs and investors in a casual setting. Light refreshments provided.",
        location: "Innovation Hub",
        date: new Date("2023-07-28T18:00:00Z"),
        time: "18:00",
        category: "party",
        imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"
    },
    {
        id: "68198352d0e33561876b0b42",
        title: "Garden Charity Gala",
        description: "An elegant evening fundraiser supporting environmental conservation, with live music and gourmet dining.",
        location: "Botanical Gardens",
        date: new Date("2023-09-23T19:00:00Z"),
        time: "19:00",
        category: "other",
        imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "68198352d0e33561876b0b3e",
        title: "Sarah's 30th Birthday",
        description: "Celebrating three decades of Sarah! Join us for cocktails, dancing, and cake on the beautiful city rooftop.",
        location: "Skyline Rooftop Lounge",
        date: new Date("2023-08-12T19:30:00Z"),
        time: "19:30",
        category: "birthday",
        imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "68198352d0e33561876b0b3d",
        title: "Summer Music Festival",
        description: "Join us for a night of amazing live music under the stars. Featuring top local bands and delicious food vendors.",
        location: "Sunset Beach Park",
        date: new Date("2023-07-15T18:00:00Z"),
        time: "18:00",
        category: "concert",
        imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "68198352d0e33561876b0b3f",
        title: "Modern Art Exhibition",
        description: "Experience the cutting-edge of contemporary art with installations from renowned international artists.",
        location: "Downtown Gallery",
        date: new Date("2023-09-05T10:00:00Z"),
        time: "10:00",
        category: "exhibition",
        imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }

    // Add more events as needed
];

function App() {

    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/events" element={<Events events={events} />} />
                    <Route path="/events/:id" element={<EventDetails events={events} />} />
                    <Route path="*" element={<h1>Página não encontrada</h1>} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default App