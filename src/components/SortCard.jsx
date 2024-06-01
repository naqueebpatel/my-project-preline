import React from 'react';
import { sortData } from '../data/data';
import { NavLink } from 'react-router-dom';

const SortCard = ({ data }) => {
    // Function to generate random background color
    const getRandomColor = () => {
        const colors = ['#FFC0CB', '#ADD8E6', '#90EE90', '#FFD700', '#FFA07A', '#BA55D3', '#87CEEB', '#20B2AA'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-2xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">Explore Our Learning Domains!</h2>
                <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">Have a Look.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {sortData.map((item, index) => (
                    <NavLink to="/courses" key={index} className="group flex flex-col border shadow-sm rounded-xl hover:shadow-md transition duration-300 transform hover:-translate-y-1 relative overflow-hidden" href="#" style={{ backgroundColor: getRandomColor() }}>
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img className="size-[38px]" src={item.image} alt="Image Description" />
                                    <div className="ms-3">
                                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                            {item.type.toUpperCase()}
                                        </h3>
                                    </div>
                                </div>
                                <div className="ps-3">
                                    <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SortCard;
