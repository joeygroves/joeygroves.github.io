import useMediaQuery from '../hooks/useMediaQuery';
import TechStackIcons from '../components/TechStackIcons';
import { motion } from 'framer-motion';

const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="about" className="md:pt-0 pt-10 pb-24">
            <div className="md:flex md:justify-between md:gap-16 md:pt-10 mt-32">
                <div>
                    <motion.div
                        className="md:pt-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="font-poppins font-semibold text-3xl mb-5 text-blue">
                            ABOUT ME
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.2, duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="font-poppins text-grey mb-7">
                            I am a recent graduate from the University of Leicester with a strong foundation in Agile methodologies 
                            and hands-on experience in end-to-end coding projects. My work includes developing a Premier League 
                            football player scouting app for Leicester City FC, creating personal websites and portfolios, 
                            and building full-stack web applications. Passionate about leveraging my creative and 
                            analytical skills in computer science, I strive to develop innovative and user-friendly tech solutions. 
                            Proficient in languages and tools such as JavaScript, Python, React, and Node.js, 
                            I thrive in fast-paced environments and enjoy tackling new challenges.
                            <br/>
                            <br/>
                            During my studies, I spent a year abroad at Waseda University in Japan, 
                            where I achieved top grades: A+ in Advanced Intelligent Software, A+ in Recording Technology, 
                            and an A in Information Retrieval. This experience enriched my academic journey and expanded my cultural perspective. 
                            My career goal is to secure a role in software development where I can contribute to impactful projects 
                            and continue to grow my technical expertise. I have a robust work ethic and a strong desire to learn 
                            and adapt in dynamic settings.
                            <br/>
                            <br/>
                            In addition to my professional interests, I am deeply passionate about fashion, writing, and music. 
                            I have self-published a collection of poetry and prose, designed streetwear clothing, 
                            and self-produced an album of lo-fi hip-hop beats. While in Japan, I joined the Beatlemania club 
                            and played live shows in Tokyo with a rock band consisting of Japanese students, 
                            further fuelling my love for music and collaboration. 
                            <br/>
                            <br/>
                            Let's connect if you have an opportunity in mind, need advice on breaking into programming, 
                            or simply want to chat over coffee.
                        </p>
                    </motion.div>
                    
                    <div className="md:flex py-2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay:0.4, duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, x: -50 },
                              visible: { opacity: 1, x: 0 },
                            }}
                        >
                            {isAboveMediumScreens ? (
                                <div className="flex ">
                                    <div className="flex flex-row">
                                        <p className="flex items-center font-poppins font-medium text-l text-deep-blue">Tech Stack</p>
                                        <p className="flex items-center font-poppins font-light text-2xl text-grey mx-5">|</p>
                                    </div>
                                <TechStackIcons />
                                </div>
                            
                            ) : (
                                <div>
                                    <p className="font-poppins font-semibold text-xl text-center">Tech Stack</p>
                                    <TechStackIcons />
                                </div>
                            )}
                        </motion.div>
                    </div> 
                </div>

                <div className="mt-16 md:mt-0 md:pt-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.4, duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {isAboveMediumScreens ? (
                            <div
                                className="
                                    relative z-0 ml-20 
                                    before:absolute before:-top-10 before:-left-10
                                    before:w-full before:h-full before:border-2 
                                    before:border-blue before:z-[-1]"
                            >
                                <img
                                    src="../assets/about.png"
                                    alt="about"
                                    className="z-10 hover:filter hover:saturate-200 transition duration-500"
                                />
                            </div>
                        ) : (
                            <img
                                src="../assets/about.png"
                                alt="about"
                                className="z-10 hover:filter hover:saturate-200 transition duration-500"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
            
        </section>
    )
}

export default About;