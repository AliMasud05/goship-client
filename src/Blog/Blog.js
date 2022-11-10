import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">Difference between SQL and NoSQL</summary>
                        <div className="px-4 pb-4">
                            <div>
                                <h1 className='text-xl font-bold'>type: <span className='text-base font-serif'>SQL databases are primarily called as Relational Databases; whereas NoSQL database are primarily called as non-relational or distributed database. 
                                </span>
                              </h1>
                                <h1 className='text-xl font-bold'>Language – <span className='text-base font-serif'>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                                    A NoSQL database has dynamic schema for unstructured data.Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.This flexibility means that documents can be created without having defined structure first.Also each document can have its own unique structure.The syntax varies from database to database, and you can add fields as you go.  
                                </span>
                              </h1>
                                <h1 className='text-xl font-bold'>Structure –<span className='text-base font-serif'>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
                                </span>
                              </h1>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">What is JWT, and how does it work?</summary>
                        <div className="px-4 pb-4">
                            <p className='text-base font-serif'>JSON Web Tokens are an open and standard (RFC 7519) way for you to represent your user’s identity securely during a two-party interaction. That is to say, when two systems exchange data you can use a JSON Web Token to identify your user without having to send private credentials on every request.</p>
                            <ul>
                                <li>The user/client app sends a sign in request. In other words, here is where your username/password (or any other type of sign in credentials you need to provide) will travel</li>
                                <li>Once verified, the API will create a JSON Web Token (more on this in a bit) and sign it using a secret key</li>
                                <li>Finally, the client app will receive the token, verify it on its own side to make sure it’s authentic and then proceed to use it on every subsequent request to authenticate the user without having to send their credentials anymore</li>

                            </ul>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS?</summary>
                        <div className="px-4 pb-4 space-y-2">
                           <ul>
                                <li>For accessing any non-blocking task on operating systems, JavaScript has predefined objects that are specific to every operating system. ActiveX is a classic example that can be run only on the Windows. However, Node JS is given the utility to execute operating system specific non-blocking tasks from any JavaScript programming. The limitation to operating system specific constant is not there in Node JS.</li>
                                <li>JavaScript can be run on any browser engine like Spider monkey for Firefox, JavaScript Core for Safari & V8 for Google Chrome. There is no browser specific limitations with JavaScript. However, Node JS can be run only on V8 of Google Chrome. Any programs using Node JS will need to be run on V8 engines only.</li>
                                <li>When the utility is concerned, JavaScript is mainly used for client-side activity for a web application, which can be attributed validations, refreshing the page at specific time periods, incorporating dynamic changes on web pages without refreshing the page. Node.js is used for executing the on-blocking operation of any operating system, which can include creating a shell script or getting access to specific details on hardware or even running a backend job.</li>
                                <li>JavaScript is a simple programming language that runs on any of the browser’s JavaScript engines. On the contrary, Node js is a Javascript runtime environment, which is based on Google’s V8 JavaScript environment. It is used in executing Javascript codes outside the browsers.</li>
                           </ul>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.

                                There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.</p>
                            <p>Node introduced worker threads in Node 13. These run on a separate JavaScript thread. In larger scale Node applications, developers tend to create one worker per CPU to maximize parallel processing capacity.</p>
                            <p>Prior to worker threads, Node had clusters (these still exist). Clusters mimic what workers do by taking advantage of multiple CPU cores by running multiple Node processes that share server ports. These were an effective way of scaling and existed before worker threads.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;