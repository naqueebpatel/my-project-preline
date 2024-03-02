import React from 'react';
import { data } from '../data/data';

const ContactUs = () =>
{
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Form Section */ }
          <div className="flex flex-co">
            <div className='w-[80vw]'>
              {/* <!-- Form --> */ }
              <form action='https://getform.io/f/8af40023-61f3-4dda-b042-c2d81b80f134' method='post'>

                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto ">
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
                            <input type="text" name='full_name' autoComplete='name' id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
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
                            <input type="email" name='email' autoComplete='email' id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
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
                            <input type="tel" name='mobile_number' autoComplete='phone' id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600
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
                          <select name='level' className="py-3 mt-5 px-4 pe-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                            <option selected disabled>Level</option>
                            <option>Corporate/Industry Level</option>
                            <option>College Level</option>
                          </select>
                          {/* <!-- End Floating Input --> */ }
                        </div>
                        <div>
                          {/* <!-- Floating Input --> */ }
                          <select name='course' className="py-3 mt-5 px-4 pe-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                            <option selected disabled>Courses</option>
                            {
                              data.map( ( item, index ) =>
                              {
                                return (
                                  <option key={ index } value={ item.cname }>{ item.cname }</option>
                                );
                              } )
                            }
                          </select>
                          {/* <!-- End Floating Input --> */ }
                        </div>
                      </div>
                      <div>
                        <select name='mode' className="py-3 mt-5 px-4 pe-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
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
          {/* End Form Section */ }

          {/* Additional Support Section */ }
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {/* Knowledgebase */ }
            <div className="flex gap-x-7 py-6">
              <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Knowledgebase</h3>
                <p className="mt-1 text-sm text-gray-500">We're here to help with any questions or code.</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://wa.me/+8237307229">
                  Contact support
                  <svg className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
            {/* End Knowledgebase */ }

            {/* FAQ */ }
            <div className="flex gap-x-7 py-6">
              <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">FAQ</h3>
                <p className="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Visit FAQ
                  <svg className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
            {/* End FAQ */ }

            {/* Developer APIs */ }
            <div className="flex gap-x-7 py-6">
              <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11 9 9 7 7" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Call Help Line</h3>
                <p className="mt-1 text-sm text-gray-500">Customer Support is Always Their to Help</p>
                <a href='tel:8237307229' className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Call us
                  <svg className="flex-shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
            {/* End Developer APIs */ }

            {/* Contact Us by Email */ }
            <div className=" flex gap-x-7 py-6">
              <svg className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Contact us by email</h3>
                <p className="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  example@site.com
                </a>
              </div>
            </div>
            {/* End Contact Us by Email */ }
          </div>
          {/* End Additional Support Section */ }
        </div>
      </div >
    </div >
  );
};

export default ContactUs;

