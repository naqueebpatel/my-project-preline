import SingleCard from './SingleCard';
import { dataTwo } from '../data/data';
import { useState } from 'react';

const Cards = () => {
    const [courses, setCourses] = useState(dataTwo);
    const [allData] = useState(dataTwo); // No need for state update here
    const handleChange = (event) => {
        const language = allData.filter(elem => elem.cname.toLowerCase().includes(event.target.value.toLowerCase()));
        setCourses(language);
    };
    const bgColor = [
        "3b82f6",
        "ca8a04",
        "c026d3",
        "be123c",
        "7c3aed",
    ];

    return (
        <>
            <form className="flex items-center mt-7 max-w-lg mx-auto">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                        </svg>
                    </div>
                    <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Embark on Your Tech Expedition, Define Your Journey...." onChange={handleChange} />
                </div>
            </form>

            <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto overflow-y-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses?.length === 0 ? (
                        <h1 className='w-[80vw]'>No Course Found</h1>
                    ) : (
                        courses?.map((elem, index) => {
                            const randIndex = Math.floor(Math.random() * bgColor.length);
                            const color = bgColor[randIndex];
                            return (
                                <SingleCard key={index} elem={elem} color={color} view={true} />
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
};

export default Cards;
