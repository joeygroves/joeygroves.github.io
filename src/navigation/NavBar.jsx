import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-deep-blue" : ""}
                  hover:text-blue transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    );
  };

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className="z-40 w-full fixed top-0 py-6 shadow-md">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-poppins text-2xl text-deep-blue font-bold">Joe Groves</h4>
                {/* DESKTOP NAV*/}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-12 font-poppins text-md font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Etc."
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-deep-blue p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src="../src/assets/menu-icon.svg"  alt="menu-icon"/>
                    </button>
                )}

                {/* Mobile Menu Popup */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[250px]">
                        {/* Close Icon */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img src="../src/assets/menu-close-icon.svg" alt="menu-close-icon" />
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <div className="flex flex-col gap-8 ml-[33%] font-poppins text-2xl font-semibold text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Etc."
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar;