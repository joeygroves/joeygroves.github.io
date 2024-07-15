const Projects = () => {
    return(
        <section
            id="projects"
            className="pt-48 pb-48"
        >
            <div>
                <div>
                    <p className="font-poppins font-semibold text-3xl mb-10 text-blue text-center">PROJECTS</p>
                </div>
            </div>

            <div className="flex flex-col md:gap-12">
                {/* To-Do List App */}
                <div className="flex flex-col justify-between items-center mx-8 py-9 mb-10">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col md: justify-center">
                            <p className="font-poppins font-semibold text-xl text-deep-blue">To-Do List App</p>
                            <p className="font-poppins text-md text-grey mb-4">April - May 2024</p>

                            <p 
                                className="font-poppins text-deep-blue mb-2"
                            >
                                A simple to-do list web app, for managing and completing tasks. You can add, delete and 
                                check-off tasks as completed. Additionally, you can also filter tasks based on their 
                                completion status. I designed wireframes and high-fidelity mockups from scratch, and a loose user-flow 
                                using Figma; with a minimalist design in mind.
                            </p>

                            <a
                                href="https://github.com/joeygroves/todo-app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button 
                                    className="my-4 bg-transparent hover:bg-blue text-deep-blue font-semibold 
                                    hover:text-white transition duration-500 py-2 px-4 border border-deep-blue hover:border-transparent rounded"
                                >
                                    View on GitHub
                                </button>
                            </a>
                            
                            <div className="md:mt-0 mt-5 mb-6">
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Technologies</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">React, Express, Node.js, MongoDB, Tailwind CSS, Figma</p>
                                </div>
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Skills</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">Full Stack Web Development, UI Design</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="../src/assets/to-do-app.png"
                                alt="to-do app"
                                className="md:max-w-[600px] md:ml-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Influencer Portfolio Site */}
                <div className="flex flex-col justify-between items-center mx-8 py-9">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col md: justify-center">
                            <p className="font-poppins font-semibold text-xl text-deep-blue">Influencer Portfolio Site</p>
                            <p className="font-poppins text-md text-grey mb-4">July - December 2023</p>

                            <p 
                                className="font-poppins text-deep-blue mb-2"
                            >
                                In the content space, one of the main problems influencers face when having correspondence with brands and affiliates, 
                                is having (or lack thereof) a professional space to showcase their past work experience, 
                                brands they've worked with and testimonials as a result of submitting their deliverables. 
                                <br/>
                                <br/>
                                Here in this project, I set out to work with a succesful influencer 
                                (amassing 100k subscribers on YouTube plus more followers in other spaces) in designing, 
                                implementing and deploying a single-page responsive influencer portfolio site - 
                                which they could send to brands when they reach out.
                            </p>

                            <a
                                href="https://github.com/joeygroves/ellie-smith-portfolio"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button 
                                    className="my-4 bg-transparent hover:bg-blue text-deep-blue font-semibold 
                                    hover:text-white transition duration-500 py-2 px-4 border border-deep-blue hover:border-transparent rounded"
                                >
                                    View on GitHub
                                </button>
                            </a>
                            
                            <div className="md:mt-0 mt-5 mb-6">
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Technologies</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">React, Tailwind CSS, Framer-Motion, Figma</p>
                                </div>
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Skills</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">Front End Web Development, UI Design</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="../src/assets/influencer-portfolio.png"
                                alt="influencer portfolio site"
                                className="md:max-w-[600px] md:ml-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Weather App */}
                <div className="flex flex-col justify-between items-center mx-8 py-9">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col md: justify-center">
                            <p className="font-poppins font-semibold text-xl text-deep-blue">Weather App</p>
                            <p className="font-poppins text-md text-grey mb-4">March 2023</p>

                            <p 
                                className="font-poppins text-deep-blue mb-2"
                            >
                                A React weather web app, built by integrating the OpenWeatherMap API. It displays temperatures in 
                                both Celsius and Fahrenheit. In addition, the app also displays an hourly and weely forecast, as well as 
                                specific information such as sunrise/sunset, humidity, wind speed, etc.
                                The theme colour of the web app changes depending on the temperature of the location. It turns blue for 
                                cooler climates and orange for warmer climates.
                            </p>

                            <a
                                href="https://github.com/joeygroves/react-weather-app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button 
                                    className="my-4 bg-transparent hover:bg-blue text-deep-blue font-semibold 
                                    hover:text-white transition duration-500 py-2 px-4 border border-deep-blue hover:border-transparent rounded"
                                >
                                    View on GitHub
                                </button>
                            </a>
                            
                            <div className="md:mt-0 mt-5 mb-6">
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Technologies</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">React, Tailwind CSS, OpenWeatherMap API</p>
                                </div>
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Skills</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">Front End Web Development, UI Design, API Integration</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="../src/assets/weather-app.png"
                                alt="weather app"
                                className="md:max-w-[400px] md:ml-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Leicester City FC Player Scouting App */}
                <div className="flex flex-col justify-between items-center mx-8 py-9">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col md: justify-center">
                            <p className="font-poppins font-semibold text-xl text-deep-blue">Leicester City FC Player Scouting App</p>
                            <p className="font-poppins text-md text-grey mb-4">December 2019 - July 2020</p>

                            <p 
                                className="font-poppins text-deep-blue mb-2"
                            >
                                In collaboration with Premier League team, Leicester City FC, we designed and 
                                implemented a full-stack web application written in React, Node.js 
                                and MySQL for our second year Software Engineering module. 
                                <br/>
                                <br/>
                                In addition, we used Scrum and Agile project management methodologies to 
                                conduct our weekly stand-up meetings, presentations, and plan future sprints. 
                                We held bi-weekly meetings with the Leicester City FC academy coaches and scouts, 
                                working very closely and understanding their needs and setting goals for the upcoming sprints.
                            </p>

                            <a
                                href="https://github.com/joeygroves/leicestercityfc-scouting-app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button 
                                    className="my-4 bg-transparent hover:bg-blue text-deep-blue font-semibold 
                                    hover:text-white transition duration-500 py-2 px-4 border border-deep-blue hover:border-transparent rounded"
                                >
                                    View on GitHub
                                </button>
                            </a>
                            
                            <div className="md:mt-0 mt-5 mb-6">
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Technologies</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">React, Express, Node.js, mySQL</p>
                                </div>
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Skills</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">Full Stack Web Development, Agile, Scrum, CI/CD</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="../src/assets/leicester-city.png"
                                alt="leicester city fc scouting app"
                                className="md:max-w-[400px] md:ml-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Simple Py Hangman */}
                <div className="flex flex-col justify-between items-center mx-8 py-9">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col md: justify-center">
                            <p className="font-poppins font-semibold text-xl text-deep-blue">Simple Py Hangman</p>
                            <p className="font-poppins text-md text-grey mb-4">November 2018</p>

                            <p 
                                className="font-poppins text-deep-blue mb-2"
                            >
                                A simple to-do list web app, for managing and completing tasks.
                                Designed wireframes and high-fidelity mockups, and a loose user-flow 
                                using Figma. 
                            </p>

                            <a
                                href="https://github.com/joeygroves/simple-py-hangman"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button 
                                    className="my-4 bg-transparent hover:bg-blue text-deep-blue font-semibold 
                                    hover:text-white transition duration-500 py-2 px-4 border border-deep-blue hover:border-transparent rounded"
                                >
                                    View on GitHub
                                </button>
                            </a>
                            
                            <div className="md:mt-0 mt-5 mb-6">
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Technologies</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">React, Express, Node.js, MongoDB, Tailwind CSS, Figma</p>
                                </div>
                                <div className="flex">
                                    <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Skills</p>
                                    <p className="font-poppins text-sm text-deep-blue mb-2">Full Stack Web Development, UI Design</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="../src/assets/simple-py-hangman.png"
                                alt="simple py hangman"
                                className="md:max-w-[600px] md:ml-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Projects;