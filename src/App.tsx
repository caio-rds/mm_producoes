
import Layout from "./components/Layout.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./templates/Home.tsx";
import Events from "./templates/Events.tsx";


function App() {

    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:id" element={<h1>Event Details</h1>} />
                    <Route path="*" element={<h1>Página não encontrada</h1>} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default App