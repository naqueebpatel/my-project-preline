import React from 'react'
import { NavLink } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

const HeroForms = () => {
  return (
    <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              <span style={{color:"#C60C30"}}>CODE</span><span style={{color:"black"}}>  N</span><span style={{color:"#073980"}}>  CLOUD</span>
            </p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                  <TypeAnimation sequence={[
                'JAVA SPRINGBOOT',
                 2000,
                 'PYTHON / AI / ML',
                 2000,
                 'AWS CLOUD ENGINEER',
                 2000,
                 'DATA SCIENCE /ANALYTICS',
                 2000,
                 'FRONTEND DEVELOPER',
                 2000,
                 'FULL STACK DEVELOPER ',
                 2000,
                 '. NET DEVELOPER',
                 2000,
                 'SOFTWARE TESTING',
                 2000
            ]} 
            speed={50}
            wrapper="span"
            repeat={Infinity}
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
        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Get started
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
        <NavLink to="courses">Browse Courses.</NavLink>
        </button>
      </div>

        </blockquote>
        {/* <!-- End Blockquote --> */}
      </div>
      {/* <!-- End Col --> */}

      <div>
        {/* <!-- Form --> */}
        <form>
          <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
            {/* <!-- Card --> */}
            <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Start your free trial</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Sign in here
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                    <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"></path>
                    <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"></path>
                    <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"></path>
                    <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"></path>
                  </svg>
                  Sign up with Google
                </button>

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">Or</div>

        
                <div className="grid grid-cols-2 gap-4">

                  <div>
                    {/* <!-- Floating Input --> */}
                    <div className="relative">
                      <input type="text" id="hs-hero-signup-form-floating-input-first-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="John" />
                      <label htmlFor="hs-hero-signup-form-floating-input-first-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">First name</label>
                    </div>
                    {/* <!-- End Floating Input --> */}
                  </div>
                  {/* <!-- End Input Group --> */}

                  {/* <!-- Input Group --> */}
                  <div>
                    {/* <!-- Floating Input --> */}
                    <div className="relative">
                      <input type="text" id="hs-hero-signup-form-floating-input-last-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="Doe" />
                      <label htmlFor="hs-hero-signup-form-floating-input-last-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Last name</label>
                    </div>
                    {/* <!-- End Floating Input --> */}
                  </div>
                  {/* <!-- End Input Group -->

                  <!-- Input Group --> */}
                  <div>
                    {/* <!-- Floating Input --> */}
                    <div className="relative">
                      <input type="email" id="hs-hero-signup-form-floating-input-email" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="you@email.com" />
                      <label htmlFor="hs-hero-signup-form-floating-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Email</label>
                    </div>
                    {/* <!-- End Floating Input --> */}
                  </div>
                  {/* <!-- End Input Group --> */}

                  {/* <!-- Input Group --> */}
                  <div>
                    {/* <!-- Floating Input --> */}
                    <div className="relative">
                      <input type="text" id="hs-hero-signup-form-floating-input-company-name" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="Preline" />
                      <label htmlFor="hs-hero-signup-form-floating-input-company-name" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Company name</label>
                    </div>
                    {/* <!-- End Floating Input --> */}
                  </div>
                  {/* <!-- End Input Group -->

                  <!-- Input Group --> */}
                  <div className="relative col-span-full">
                    {/* <!-- Floating Input --> */}
                    <div className="relative">
                      <input type="password" id="hs-hero-signup-form-floating-input-new-password" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="********" />
                      <label htmlFor="hs-hero-signup-form-floating-input-new-password" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">New password</label>
                    </div>
                    {/* <!-- End Floating Input --> */}

                    <div id="hs-strong-password-popover" className="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950">
                      <div id="hs-strong-password-in-popover" data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }' className="flex mt-2 -mx-1">
                      </div>

                      <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                        Your password must contain:
                      </h4>

                      <ul className="space-y-1 text-sm text-gray-500">
                        <li data-hs-strong-password-hints-rule-text="min-length" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                          <span className="hidden" data-check>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span data-uncheck>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </span>
                          Minimum number of characters is 6.
                        </li>
                        <li data-hs-strong-password-hints-rule-text="lowercase" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                          <span className="hidden" data-check>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span data-uncheck>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </span>
                          Should contain lowercase.
                        </li>
                        <li data-hs-strong-password-hints-rule-text="uppercase" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                          <span className="hidden" data-check>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span data-uncheck>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </span>
                          Should contain uppercase.
                        </li>
                        <li data-hs-strong-password-hints-rule-text="numbers" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                          <span className="hidden" data-check>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span data-uncheck>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </span>
                          Should contain numbers.
                        </li>
                        <li data-hs-strong-password-hints-rule-text="special-characters" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
                          <span className="hidden" data-check>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          </span>
                          <span data-uncheck>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </span>
                          Should contain special characters.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- End Input Group --> */}

                  {/* <!-- Input Group --> */}
                  <div className="col-span-full">
                    {/* <!-- Floating Input --> */}
                    <div className="relative">
                      <input type="password" id="hs-hero-signup-form-floating-input-current-password" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" placeholder="********" />
                      <label htmlFor="hs-hero-signup-form-floating-input-current-password" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">Current password</label>
                    </div>
                    {/* <!-- End Floating Input --> */}
                  </div>
                  {/* <!-- End Input Group --> */}
                </div>
                {/* <!-- End Grid --> */}

                {/* <!-- Checkbox --> */}
                <div className="mt-5 flex items-center">
                  <div className="flex">
                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                {/* <!-- End Checkbox --> */}

                <div className="mt-5">
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Get started</button>
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
        </form>
        {/* <!-- End Form --> */}
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}

   
  </div>

</div>
  )
}

export default HeroForms