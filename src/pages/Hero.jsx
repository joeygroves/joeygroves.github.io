import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <p className="text-8xl">Hello World!</p>
            </div>
        </section>
    )
}

export default Hero;