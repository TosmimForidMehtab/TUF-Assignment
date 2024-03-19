import React, { useState } from "react";
import { Button, Select, TextInput, Textarea } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const CreateSubmission = () => {
    const [userName, setUserName] = useState("");
    const [language, setLanguage] = useState("cpp");
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            userName,
            language,
            code,
            input,
        };
        console.log(data);
        try {
            setLoading(true);
            const _ = await axios.post(`${API_URL}/submissions`, data);
            setLoading(false);
            navigate("/");
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return (
        <div className="w-full max-w-lg mx-auto p-3 min-h-screen">
            <h1 className="text-3xl font-bold text-center my-7">Create submission</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <TextInput type="text" placeholder="Username" id="username" aria-label="Username" className="my-3" onChange={(e) => setUserName(e.target.value)} required></TextInput>

                <Select placeholder="Select language" className="my-3" onChange={(e) => setLanguage(e.target.value)} value={language}>
                    <option value="cpp">C++</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="javascript">Javascript</option>
                </Select>

                <Textarea placeholder="Input" id="input" aria-label="Input" className="my-3" maxLength={100} cols={30} rows={5} onChange={(e) => setInput(e.target.value)} required></Textarea>

                <Textarea placeholder="Code" id="code" aria-label="Code" className="my-3" cols={30} rows={20} onChange={(e) => setCode(e.target.value)} required></Textarea>
                <Button type="submit" color="purple" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </div>
    );
};

export default CreateSubmission;
