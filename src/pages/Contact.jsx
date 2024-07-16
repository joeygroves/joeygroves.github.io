import { motion } from "framer-motion"; 

const Contact = () => {
    return (
        <section
            id="contact"
            className="pt-48 pb-48"
        >
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
                        <p className="font-poppins text-grey mb-16">
                            Don't be shy! Let's get in touch if you have a project / collaboration in mind. Or if you just want a coffee chat. 😁
                        </p>
                    </motion.div>
            </motion.div>

            {/* Email Button */}
            <div>
                <a
                    href="mailto:joewesleygroves@gmail.com"
                >
                    <button
                        className="rounded-full bg-white shadow-md w-[48px]"
                    >
                        <img src="../src/assets/email.svg"  alt="email-icon" className="p-2"/>
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Contact;