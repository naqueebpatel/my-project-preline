import React from 'react';
import { sortData } from '../data/data';

const SortCard = ({ data }) => {
    // Define keyframes
    const shineKeyframes = {
        '0%': { right: '100%' },
        '100%': { right: '-100%' },
    };

    // Define styles for shining effect
    const shineStyle = {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, transparent,#ffffff, transparent)',
        animation: 'shine 3s linear infinite',
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-2xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">Explore Our Learning Domains!</h2>
                <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">Have a Look.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {sortData.map((item, index) => (
                    <a key={index} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition duration-300 transform hover:-translate-y-1 dark:bg-neutral-900 dark:border-neutral-800 relative overflow-hidden" href="#">
                        <div style={shineStyle}></div>
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
                    </a>
                ))}
            </div>
            {/* Apply keyframes */}
            <style>{`
                @keyframes shine {
                    ${Object.entries(shineKeyframes).map(([key, value]) => `${key} { ${Object.entries(value).map(([prop, val]) => `${prop}: ${val};`).join(' ')} }`).join(' ')}
                }
            `}</style>
        </div>
    )
}

export default SortCard;
