import { Table } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const Submissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${API_URL}/submissions`);
                console.log(data?.data);
                setSubmissions(data?.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };

        fetchSubmissions();
    }, []);
    return (
        <div
            className="table-auto overflow-x-scroll sm:mx-auto p-3 w-full scrollbar-thumb-gray-700
        scrollbar-track-gray-800 min-h-screen "
        >
            <Table hoverable={true} className="shadow-md text-white">
                <Table.Head>
                    <Table.HeadCell className="text-white bg-gray-500">Username</Table.HeadCell>
                    <Table.HeadCell className="text-white bg-gray-500">Language</Table.HeadCell>
                    <Table.HeadCell className="text-white bg-gray-500">Input</Table.HeadCell>
                    <Table.HeadCell className="text-white bg-gray-500">Submitted Code</Table.HeadCell>
                    <Table.HeadCell className="text-white bg-gray-500">Submitted At</Table.HeadCell>
                </Table.Head>

                {loading ? (
                    <div className="flex h-screen w-screen items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-200">Loading...</h1>
                    </div>
                ) : (
                    submissions?.map((submission) => (
                        <Table.Body className="border" key={submission?._id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-lg">{submission.userName}</Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium">{submission?.language}</Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium">{submission?.input}</Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium w-[900px]">
                                <pre className="bg-gray-700 p-4 rounded-md overflow-hidden">{submission?.code.length > 100 ? submission?.code.substring(0, 100) + "..." : submission?.code}</pre>
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium">{new Date(submission?.createdAt).toLocaleDateString()}</Table.Cell>
                        </Table.Body>
                    ))
                )}
            </Table>
        </div>
    );
};

export default Submissions;
