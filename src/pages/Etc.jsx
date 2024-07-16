import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
}

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-light-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

{/*
const Project = ({ title, subtitle }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-light-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-poppins">{title}</p>
                <p className="mt-7">{subtitle}</p>
            </div>
            <img src={`../src/assets/${projectTitle}.png`} alt={projectTitle}/>
        </motion.div>
    )
}
*/}

const Etc = () => {
    return (
        <section 
            id="etc."
            className="pt-48 pb-48"
        >
            {/* Headings */}
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
                    <p className="mt-2 mb-16 text-sm text-center text-grey font-poppins font-light">
                        INTERESTED IN MORE WORK + ART?
                    </p>
                </motion.div>
            </div>
            
            {/* Etc. Project Grid:
                there's 5 columns in a row
            */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-5 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/*
                    <Project title="Leicester City" subtitle="Hello"/>
                    <Project title="Leicester City" subtitle="darkness"/>
                    <Project title="Leicester City" subtitle="my"/>
                    <Project title="Leicester City" subtitle="old"/>
                    <Project title="Leicester City" subtitle="friend"/>
                    */}

                    <motion.div variants={projectVariant} className="relative">
                        <a
                            href="https://github.com/joeygroves/todo-app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={overlayStyles}>
                                <p className="text-2xl font-poppins">LOL</p>
                                <p className="mt-7">poo</p>
                            </div>
                            {/* Images should sized 400px X 400px */}
                            <img src={`../src/assets/leicester.png`} alt="leicester city"/>
                        </a>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    )

}

export default Etc;