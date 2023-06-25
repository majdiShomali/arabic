import React from 'react'
import { Link } from 'react-router-dom'
function SponserSection() {
    return (
        <div>
            <section>
            <div className="text-center ">
    {/* <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
      Who we are
    </h3> */}
  </div>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div class="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src="https://freedesignfile.com/upload/2014/06/Food-ingredients-icons-vector-graphics.jpg"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div class="p-8 sm:p-16 lg:p-24">
                                <h2 class="text-2xl font-bold sm:text-3xl">
                                Ingredient Insights: Unveiling Our Formulas                                </h2>

                                <p class="mt-4 text-gray-600">
                                Welcome to Ingredient Insights, your gateway to discovering the secrets behind our exceptional products. We believe in transparency and want to empower our valued customers with the knowledge of what goes into each and every item we offer. Our website serves as a comprehensive resource where you can explore the precise ingredients that make up our carefully crafted formulations. From the finest organic extracts to cutting-edge scientific compounds, we provide detailed information about every component used in our products. Dive into our world of ingredients, gain a deeper understanding of their benefits, and make informed choices for your well-being. With Ingredient Insights, we bring you a new level of trust, authenticity, and peace of mind in your pursuit of quality and healthy living                                </p>

                                <Link
                                    to="/AddYourIng"
                                    class="mt-8 inline-block rounded border  bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none  "
                                    style={{ backgroundColor: "#219D80" }}
                                >
                                    Add your Ingredient
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SponserSection