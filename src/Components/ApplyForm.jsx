function ApplyForm() {
    return ( 
        <>
            <div className="flex items-center justify-center min-h-screen mt-8">
                <div className="w-full max-w-4xl p-8 mb-5 border border-gray-500 rounded-md shadow-md">
                    <h1 className="w-full mb-2 text-2xl font-semibold text-center ">Apply for this job</h1>
                    <div className="h-1 max-w-screen-xl mt-2 mb-5 bg-gray-600"></div>
                    
                    <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="contactNumber">
                        Contact Number
                        </label>
                        <input
                        type="tel"
                        id="contactNumber"
                         className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Contact Number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="nicNumber">
                        NIC Number
                        </label>
                        <input
                        type="text"
                        id="nicNumber"
                         className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="NIC Number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="linkedinProfile">
                        LinkedIn Profile
                        </label>
                        <input
                        type="url"
                        id="linkedinProfile"
                         className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="LinkedIn Profile"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                        Image
                        </label>
                        <input
                        type="file"
                        id="image"
                        className="block w-full py-4 mt-1 text-gray-500 border border-gray-300 "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="position">
                        Position
                        </label>
                        <input
                        type="text"
                        id="position"
                         className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Position looking for"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows="3"
                         className="block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Your Message"
                        ></textarea>
                    </div>

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