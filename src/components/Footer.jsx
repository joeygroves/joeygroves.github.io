import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-64 bg-white pt-10">
            <div className="w-5/6 mx-auto">
            <p className="font-montserrat font-black text-3xl text-deep-blue mb-3 md:justify-start md:text-left text-center">Joe Groves</p>
                <SocialMediaIcons />
                <div className="md flex justify-center md:justify-end text-center mt-2">
                    <p className="font-montserrat font-normal text-md text-deep-blue">© 2024 ELLIE SMITH | Designed & Developed by <a href="https://www.github.com/joeygroves" className="hover:text-black transition duration-500">Joey Groves</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;