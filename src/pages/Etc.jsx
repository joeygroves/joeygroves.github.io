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
                    className="sm:grid sm:grid-cols-5 sm:gap-6"
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

                    {/* Scorpio Rabbit */}
                    <motion.div variants={projectVariant} className="relative">
                        <a
                            href="https://ffm.to/scorpio-rabbit"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={overlayStyles}>
                                <p className="text-2xl font-poppins font-bold">Scorpio Rabbit</p>
                                <p className="mt-7 font-poppins">Album</p>
                                <p className="font-poppins font-light">09.02.2024 Release</p>
                            </div>
                            {/* Images should sized 800px X 800px */}
                            <img src="../src/assets/scorpio-rabbit.png" alt="scorpio rabbit"/>
                        </a>
                    </motion.div>

                    {/* Grooovy x Tangerine Hoodie */}
                    <motion.div variants={projectVariant} className="relative">
                        <a
                            href="https://www.instagram.com/p/CU-MmtXM1-c/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={overlayStyles}>
                                <p className="text-2xl font-poppins font-bold">Grooovy x Tangerine Hoodie</p>
                                <p className="mt-7 font-poppins">Clothing</p>
                                <p className="font-poppins font-light">15.02.2021 Release</p>
                            </div>
                            {/* Images should sized 800px X 800px */}
                            <img src="../src/assets/grooovy-tangerine-hoodie.png" alt="grooovy-tangerine-hoodie"/>
                        </a>
                    </motion.div>

                    {/* Tangerine Book */}
                    <motion.div variants={projectVariant} className="relative">
                        <a
                            href="https://www.amazon.co.uk/dp/1838211624"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={overlayStyles}>
                                <p className="text-md font-poppins font-bold">Tangerine: Or, How I Learned to Trust the Process</p>
                                <p className="mt-7 font-poppins">Book</p>
                                <p className="font-poppins font-light">07.02.2021 Release</p>
                            </div>
                            {/* Images should sized 800px X 800px */}
                            <img src="../src/assets/tangerine-book.png" alt="tangerine"/>
                        </a>
                    </motion.div>

                    {/* Grooovy x Tangerine Sweatshirt */}
                    <motion.div variants={projectVariant} className="relative">
                        <a
                            href="https://www.instagram.com/p/CU-McFnstKd/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={overlayStyles}>
                                <p className="text-2xl font-poppins font-bold">Grooovy x Tangerine Sweatshirt</p>
                                <p className="mt-7 font-poppins">Clothing</p>
                                <p className="font-poppins font-light">01.12.2020 Release</p>
                            </div>
                            {/* Images should sized 800px X 800px */}
                            <img src="../src/assets/grooovy-tangerine-sweatshirt.png" alt="grooovy-tangerine-sweathshirt"/>
                        </a>
                    </motion.div>

                    {/* The Earlyman Tape */}
                    <motion.div variants={projectVariant} className="relative">
                        <a
                            href="https://distrokid.com/hyperfollow/liddypool/the-earlyman-tape-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={overlayStyles}>
                                <p className="text-2xl font-poppins font-bold">The Earlyman Tape</p>
                                <p className="mt-7 font-poppins">Album</p>
                                <p className="font-poppins font-light">21.06.2019 Release</p>
                            </div>
                            {/* Images should sized 800px X 800px */}
                            <img src="../src/assets/the-earlyman-tape.png" alt="the-earlyman-tape"/>
                        </a>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    )

}

export default Etc;