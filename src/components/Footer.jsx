import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-deep-blue pt-10">
            <div className="w-5/6 mx-auto">
                <p className="font-poppins font-extrabold text-3xl text-white mb-3 md:justify-start md:text-left text-center md:mt-6">Joe Groves</p>

                {/* White Social Media Icons */}
                <div>
                    <div className="flex justify-center md:justify-start my-3 gap-3">
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://linkedin.com/in/joewesleygroves"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img 
                                src="../assets/contact-linkedin.svg"
                                alt="linkedin-link"
                            />
                        </a>
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://github.com/joeygroves"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img 
                                src="../assets/contact-github.svg"
                                alt="github-link"
                            />
                        </a>
                    </div>
                </div>

                <div className="md:flex justify-center md:justify-start text-center mt-2">
                    <p className="font-poppins font-normal text-md text-white">
                        Copyright © 2024 Joe Groves <span className="mx-1">|</span> 
                    </p>
                    <p className="ml-1 font-poppins font-normal text-md text-white">Coded + Designed on <a href="https://www.github.com/joeygroves" className="text-light-grey underline hover:text-blue transition duration-500">joeygroves</a>.</p>
                    <p className="ml-1 font-poppins font-normal text-md text-white">いらっしゃいませ ✌🏼</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;