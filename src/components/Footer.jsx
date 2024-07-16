import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-52 bg-deep-blue pt-10">
            <div className="w-5/6 mx-auto">
                <p className="font-poppins font-black text-3xl text-white mb-3 md:justify-start md:text-left text-center md:mt-8">Joe Groves</p>
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