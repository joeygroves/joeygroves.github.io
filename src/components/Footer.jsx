import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-48 bg-deep-blue pt-10">
            <div className="w-5/6 mx-auto">
            <p className="font-poppins font-black text-3xl text-white mb-3 md:justify-start md:text-left text-center">Joe Groves</p>
                <div className="md flex justify-center md:justify-start text-center mt-2">
                    <p className="font-poppins font-normal text-md text-white">
                        Copyright © 2024 Joe Groves<span className="mx-1">|</span> Coded + Designed on <a href="https://www.github.com/joeygroves" className="text-light-grey underline hover:text-blue transition duration-500">joeygroves</a>. いらっしゃいませ ✌🏼
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;