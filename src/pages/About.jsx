import useMediaQuery from '../hooks/useMediaQuery';
import TechStackIcons from '../components/TechStackIcons';

const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="about" className="pt-10 pb-24">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <div>
                    <p className='font-poppins font-semibold text-3xl mb-5 text-blue'>
                        ABOUT ME
                    </p>
                    <p className="font-poppins text-grey mb-7">
                    I am passionate about leveraging my creative and analytical skills 
                    in computer science to develop innovative and user-friendly tech solutions. 
                    Proficient in languages and tools such as JavaScript, Python, React, and Node.js, 
                    I thrive in fast-paced environments and enjoy tackling new challenges.
                    <br/>
                    <br/>
                    My career goal is to secure a role in software development where I can contribute to 
                    impactful projects and continue to grow my technical expertise. I have a robust work ethic 
                    and a strong desire to learn and adapt in dynamic settings.
                    <br/>
                    <br/>
                    In addition to my professional interests, I am deeply passionate about fashion, writing and music. 
                    I have self-published a collection of poetry and prose, designed streetwear clothing, and 
                    self-produced an album of lo-fi hip hop beats. While studying in Japan, I joined the Beatlemania club and 
                    played live shows in Tokyo with a rock band consisting of Japanese students, further fuelling my 
                    love for music and collaboration.
                    <br/>
                    <br/>
                    Let’s connect if you have an opportunity in mind, need advice on breaking into programming, 
                    or simply want to chat over coffee.
                    </p>

                    <div className="flex py-2">
                        <p className="flex items-center font-poppins font-medium text-l text-deep-blue">Tech Stack</p>
                        <p className="flex items-center font-poppins font-light text-2xl text-grey mx-5">|</p>
                        <TechStackIcons />
                    </div> 
                </div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                        className="
                            relative z-0 ml-20 
                            before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 
                            before:border-blue before:z-[-1]"
                        >
                            <img
                                src="../src/assets/about.png"
                                alt="about"
                                className="z-10 hover:filter hover:saturate-200 transition duration-500"
                            />
                        </div>
                    ) : (
                        <img
                            src="../src/assets/about.png"
                            alt="about"
                            className="z-10 hover:filter hover:saturate-200 transition duration-500"
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;