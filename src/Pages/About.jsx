import React from 'react'
import about1 from "../assets/about/about1.jpg"
import ab from "../assets/about/ab.jpg"
import cd from "../assets/about/cd.jpg"
import fe from "../assets/about/fe.jpg"
import gh from "../assets/about/gh.jpg"
import { Link } from 'react-router-dom'
function About() {
    return (
        // <div>About</div>
        <>

            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col lg:flex-row justify-between gap-8">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-black dark:text-white pb-4 ">About Us</h1>
                        <p class="font-normal text-base leading-6 text-black dark:text-white">It If you offer a service, explain your business model or how your products are made. If you have a unique way of doing things, show it. This builds credibility with shoppers and helps you stand out against competitors.


                            Feature photos of the founders or key people on your team. Customers like to see who they are buying from or working with. This can also include behind-the-scenes shots of your work space, studio, or retail store.


                            Consider what step you like readers to take next. Use additional content and calls to action to move them forward towards that goal. This could include buttons, testimonials, an explainer video, data visualizations, links to blog posts, products, your social media accounts or newsletter.</p>
                    </div>
                    <div class="w-full lg:w-8/12">
                        <img class="w-full h-full rounded " src={about1} alt="A group of People" />
                    </div>
                </div>

            </div>
            



        </>
    )
}

export default About