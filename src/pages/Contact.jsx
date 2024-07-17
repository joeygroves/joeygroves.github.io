import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"; 

const Contact = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="contact"
            className="pt-40 pb-40"
        >
            <div className="md:flex md:justify-center md:items-center">

                <div className="pt-10 mb-10">
                    {isAboveMediumScreens ? (
                        <motion.div
                            className="relative z-0 mx-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                src="../assets/Joey_Sitting_2.png"
                                alt="contact"
                                className="z-10 max-w-[250px] md:max-w-[400px]"
                            />
                        </motion.div>
                        ) : (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <img
                                    src="../assets/Joey_Sitting_2.png"
                                    alt="contact"
                                    className="z-10 max-w-[250px] md:max-w-[400px]"
                                />
                            </motion.div>
                        )
                    }
                </div>


                <div>
                    {/* Heading */}
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
                            <p className="font-poppins font-semibold text-3xl mb-5 text-blue">
                                CONTACT
                            </p>
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
                                <p className="font-poppins text-grey mb-20">
                                    Don't be shy! Let's get in touch if you have a project / collaboration in mind. Or if you just want a coffee chat. 😁
                                </p>
                            </motion.div>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="flex md:flex-row flex-col">
            
                        {/* Email Button */}
                        <div className="flex mr-16 md:mb-0 mb-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay:0.2, duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <a
                                    href="mailto:joewesleygroves@gmail.com"
                                    className="hover:opacity-50 transition duration-500"
                                >
                                    <button
                                        className="rounded-full bg-white shadow-md w-[48px]"
                                    >
                                        <img src="../assets/email.svg"  alt="email-icon" className="p-2"/>
                                    </button>
                                </a>
                            </motion.div>
                            
                            <motion.div 
                                className="mx-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay:0.2, duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <p className="font-poppins font-bold text-deep-blue">Mail</p>
                                <p className="font-poppins text-grey">joewesleygroves@gmail.com</p>
                            </motion.div>
                        </div>

                        {/* Template for another link 
                        <div className="flex mr-16 md:mb-0 mb-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay:0.2, duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <a
                                    href=""
                                    className="hover:opacity-50 transition duration-500"
                                >
                                    <button
                                        className="rounded-full bg-white shadow-md w-[48px]"
                                    >
                                        <img src="../src/assets/email.svg"  alt="email-icon" className="p-2"/>
                                    </button>
                                </a>
                            </motion.div>
                            
                            <motion.div 
                                className="mx-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay:0.2, duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <p className="font-poppins font-bold text-deep-blue">Mail</p>
                                <p className="font-poppins text-grey">joewesleygroves@gmail.com</p>
                            </motion.div>
                        </div>
                        */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;