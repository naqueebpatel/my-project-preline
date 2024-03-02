import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const HeroForms = () =>
{
  return (
    <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <img src='/images/cnc.png' alt='logo' className='w-2/4 block ml-auto mr-auto mt-0 mb-0' />
            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                <TypeAnimation sequence={ [
                  'JAVA SPRINGBOOT',
                  2000,
                  'MERN DEVELOPER',
                  2000,
                  'PYTHON / AI / ML',
                  2000,
                  'AWS CLOUD ENGINEER',
                  2000,
                  'REACT JAVA DEVELOPER',
                  2000,
                  'DATA SCIENCE',
                  2000,
                  'FRONTEND DEVELOPER',
                  2000,
                  'FULL STACK DEVELOPER ',
                  2000,
                  '. NET DEVELOPER',
                  2000,
                  'DATA ANALYTICS',
                  2000,
                  'SOFTWARE TESTING',
                  2000
                ] }
                  speed={ 50 }
                  wrapper="span"
                  repeat={ Infinity }
                />
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
              </p>
            </div>
            {/* <!-- End Title -->

        <!-- Blockquote --> */}
            <blockquote className="hidden md:block relative max-w-sm">


              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <NavLink to="courses">
                  <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Browse Courses.
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                </NavLink>
              </div>

            </blockquote>
            {/* <!-- End Blockquote --> */ }
          </div>
          {/* <!-- End Col --> */ }

          <div>
            {/* <!-- Form --> */ }
            <form>

              <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                {/* <!-- Card --> */ }
                <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Book Your Free Trial</h1>
                  </div>
                  <div className='mt-5'>
                    <a href='https://wa.me/+8237307229' target='__blank' className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                        <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                      </svg>
                      Contact Via WhatsApp
                    </a>
                  </div>
                  <div className="py-3 mt-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">Or</div>
                  <div>
                    <div>

                      <div>
                        {/* <!-- Floating Input --> */ }
                        <div className="relative">
                          <input type="text" autoComplete='name' id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                          focus:pt-6
                          focus:pb-2
                          focus:outline-none
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2" placeholder="********" />
                          <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                          peer-focus:text-xs
                          peer-focus:-translate-y-1.5
                          peer-focus:text-gray-500
                          peer-[:not(:placeholder-shown)]:text-xs
                          peer-[:not(:placeholder-shown)]:-translate-y-1.5
                          peer-[:not(:placeholder-shown)]:text-gray-500">Full Name</label>
                        </div>
                        {/* <!-- End Floating Input --> */ }
                      </div>
                      {/* <!-- End Input Group --> */ }

                      {/* <!-- Input Group --> */ }
                      <div>
                        {/* <!-- Floating Input --> */ }
                        <div className="relative">
                          <input type="email" autoComplete='email' id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                          focus:pt-6
                          focus:pb-2
                          focus:outline-none
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2" placeholder="********" />
                          <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                          peer-focus:text-xs
                          peer-focus:-translate-y-1.5
                          peer-focus:text-gray-500
                          peer-[:not(:placeholder-shown)]:text-xs
                          peer-[:not(:placeholder-shown)]:-translate-y-1.5
                          peer-[:not(:placeholder-shown)]:text-gray-500">Email</label>
                        </div>
                        {/* <!-- End Floating Input --> */ }
                      </div>
                      {/* <!-- End Input Group -->

                  <!-- Input Group --> */}
                      <div>
                        {/* <!-- Floating Input --> */ }
                        <div className="relative">
                          <input type="tel" autoComplete='phone' id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
                          focus:pt-6
                          focus:pb-2
                          focus:outline-none
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2" placeholder="********" />
                          <label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                          peer-focus:text-xs
                          peer-focus:-translate-y-1.5
                          peer-focus:text-gray-500
                          peer-[:not(:placeholder-shown)]:text-xs
                          peer-[:not(:placeholder-shown)]:-translate-y-1.5
                          peer-[:not(:placeholder-shown)]:text-gray-500">Mobile Number</label>
                        </div>
                        {/* <!-- End Floating Input --> */ }
                      </div>
                      {/* <!-- End Input Group --> */ }

                      {/* <!-- Input Group --> */ }
                      <div>
                        {/* <!-- Floating Input --> */ }
                        <select className="py-3 mt-5 px-4 pe-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                          <option selected>Courses</option>
                          <option>Cooperate</option>
                          <option>College Level</option>
                        </select>
                        {/* <!-- End Floating Input --> */ }
                      </div>
                    </div>
                    <div>
                      <select className="py-3 mt-5 px-4 pe-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                        <option selected>Mode</option>
                        <option>Online</option>
                        <option>Offline</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                    {/* Check Box */ }
                    <div>
                      <div className="mt-5 flex items-center">
                        <div className="flex">
                          <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                        </div>
                        <div className="ms-3">
                          <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Terms and Conditions</a></label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Get started</button>
                    </div>
                  </div>
                </div>
                {/* <!-- End Card --> */ }
              </div>
            </form>
            {/* <!-- End Form --> */ }
          </div>
          {/* <!-- End Col --> */ }
        </div>
        {/* <!-- End Grid --> */ }


      </div>

    </div>
  );
};

export default HeroForms;