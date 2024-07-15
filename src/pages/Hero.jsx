import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Hero = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-2/5 z-10 mt-16 md:mt-32 md:mr-16">
                {isAboveMediumScreens ? (
                    <img 
                        src="../src/assets/Joey_Standing.png"
                        alt="profile"
                        className="z-10 w-full max-w-[190px] md:max-w-[290px]"
                    />
                ) : (
                    /* For when it is below medium screens */
                    <img 
                        src="../src/assets/Joey_Standing.png"
                        alt="profile"
                        className="z-10 w-full max-w-[190px] md:max-w-[290px]"
                    />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-3/5 mt-12 md:mt-32 md:ml-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl text-deep-blue font-poppins font-bold z-10 text-center md:text-start">
                        Hello! 👋🏼 I'm Joe
                    </p>
                    <p className="mt-6 mb-7 text-lg text-center text-grey font-poppins font-medium md:text-start">
                        a Front-End React Developer and University of Leicester Comp Sci graduate.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;