// Frontend Code (React Component)
import React, { useState } from "react";

function ApplyForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        nicNumber: "",
        linkedinProfile: "",
        position: "",
        message: "",
        image: null,
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData({
            ...formData,
            [id]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        Object.keys(formData).forEach((key) => {
            formPayload.append(key, formData[key]);
        });

        try {
            const response = await fetch("http://localhost:5000/apply", {
                method: "POST",
                body: formPayload,
            });

            if (response.ok) {
                alert("Application submitted successfully!");
            } else {
                alert("Failed to submit the application.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen mt-8">
                <div className="w-full max-w-4xl p-8 mb-5 border border-gray-500 rounded-md shadow-md">
                    <h1 className="w-full mb-2 text-2xl font-semibold text-center">Apply for this job</h1>
                    <div className="h-1 max-w-screen-xl mt-2 mb-5 bg-gray-600"></div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {Object.keys(formData).map((key) => (
                            key !== "image" ? (
                                <div key={key}>
                                    <label
                                        className="block text-sm font-medium text-gray-700"
                                        htmlFor={key}
                                    >
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                                    </label>
                                    {key === "message" ? (
                                        <textarea
                                            id={key}
                                            rows="3"
                                            value={formData[key]}
                                            onChange={handleChange}
                                            className="block w-full  py-2 mt-1 text-[14px] p-4 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            placeholder={`Enter your ${key}`}
                                        />
                                    ) : (
                                        <input
                                            type={key === "email" ? "email" : "text"}
                                            id={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            className="block w-full text-[14px] py-2 mt-1 p-4 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            placeholder={`Enter your ${key}`}
                                        />
                                    )}
                                </div>
                            ) : (
                                <div key={key}>
                                    <label
                                        className="block text-sm font-medium text-gray-700"
                                        htmlFor={key}
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        id={key}
                                        onChange={handleChange}
                                        className="block w-full py-4 mt-1 p-4 text-[14px] text-gray-500 border border-gray-300"
                                    />
                                </div>
                            )
                        ))}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 font-medium text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ApplyForm;
