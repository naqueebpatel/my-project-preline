import React from 'react'
import { NavLink } from 'react-router-dom'

const FeaturedCourse = () => {
    return (

        <main id="content">
            <div className="overflow-hidden">
                <div className="relative">
                    {/* <!-- Gradients --> */}
                    <div aria-hidden="true" className="flex -z-[1] absolute -top-48 start-0">
                        <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
                        <div className="bg-gray-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-neutral-800/60"></div>
                    </div>
                    {/* <!-- End Gradients --> */}

                    <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">

                        <div className="max-w-2xl mx-auto text-center mb-10">
                            <h2 className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">Our Flagship Courses</h2>
                            <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">Practice-Based Learning Tracks</p>
                        </div>
                        <div className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
                            {/* <!-- Card --> */}
                            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                                <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Demo</h4>
                                <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-red-800 dark:text-neutral-200">
                                FREE
                                </span>
                                
                                <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">For 12th, Diploma ,College Graduates & Corporates</p>

                                <ul className="mt-7 space-y-2.5 text-sm">
                                
                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        <b>Any Course of your Choice</b>
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                            3 days Offline demo
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                            100% Live Learning.
                                        </span>
                                    </li>
                                </ul>

                                <NavLink to="/contact">
                                <button className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400">
                                    Get started
                                    </button>
                                </NavLink>
                            </div>
                
                            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                                <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Frontend Development</h4>
                                <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-red-800 dark:text-neutral-200">
                                ₹34999-/
                                </span>
                                <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">For 12th, Diploma ,College Graduates & Corporates</p>

                                <ul className="mt-7 space-y-2.5 text-sm">
                                    <li className="flex space-x-2">
                                        
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        <b>Opportunities:</b> React Developer, FrontEnd Engineer & much more.
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        Become job-ready in 16 weeks
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        100% live learning with expert instructors.
                                        </span>
                                    </li>
                                </ul>
                                 
                                <NavLink to="/contact">
                                <button className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400">
                                    Get started
                                    </button>
                                </NavLink>
                            </div>
                            {/* <!-- End Card -->

          <!-- Card --> */}
          <div className="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-violet-700">
                                <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">Most popular</span></p>
                                <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Full Stack Web Development(MERN)</h4>
                                <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-red-800 dark:text-neutral-200">
                                ₹59999-/
                                </span>
                                <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">For 12th, Diploma ,College Graduates & Corporates</p>

                                <ul className="mt-7 space-y-2.5 text-sm">
                                    <li className="flex space-x-2">
                
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        <b>Opportunities:</b> Full Stack Developer, Software Engineer & much more.
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        Become job-ready in 30 weeks
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        100% live learning with expert instructors.
                                        </span>
                                    </li>
                                </ul>
                                
                                <NavLink to="/contact">
                                <a className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Get started
                                </a>
                                </NavLink>
                                
                            </div>
                

                            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                                <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">React-Java FullStack Development</h4>
                                <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-red-800 dark:text-neutral-200">
                                ₹64999-/
                                </span>
                                <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">For 12th, Diploma ,College Graduates & Corporates</p>

                                <ul className="mt-7 space-y-2.5 text-sm">
                                    <li className="flex space-x-2">
                
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        <b>Opportunities:</b> Full Stack JAVA Developer, Software Engineer & much more.
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        Become job-ready in 30 weeks
                                        </span>
                                    </li>

                                    <li className="flex space-x-2">
                                        <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-gray-800 dark:text-neutral-400">
                                        100% live learning with expert instructors.
                                        </span>
                                    </li>
                                </ul>

                                <a className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400" href="#">
                                    Get started
                                </a>
                            </div>
                            {/* <!-- End Card --> */}
                        </div>
                        {/* <!-- End Grid --> */}
                    </div>

                </div>

            </div>
        </main>



    )
}

export default FeaturedCourse