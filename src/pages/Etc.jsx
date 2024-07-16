import { motion } from "framer-motion";

const Etc = () => {
    return (
        <section 
            id="etc."
            className="pt-48 pb-48"
        >
            <div>
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
                    <p className="font-poppins font-semibold text-3xl text-blue text-center">ET CETERA</p>
                    <p className="my-2 text-sm text-center text-grey font-poppins font-light">
                        INTERESTED IN MORE WORK + ART?
                    </p>
                </motion.div>
            </div>
        </section>
    )

}

export default Etc;