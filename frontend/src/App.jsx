import { Route, Routes } from "react-router-dom";
import "./App.css";
import Submissions from "./pages/Submissions";
import CreateSubmission from "./pages/CreateSubmission";
import Header from "./components/Header";

function App() {
    return (
        <div className="bg-[#0c0c1d] text-white">
            <Header />
            <Routes>
                <Route path="/" element={<Submissions />} />
                <Route path="/create-submission" element={<CreateSubmission />} />
            </Routes>
        </div>
    );
}

export default App;
