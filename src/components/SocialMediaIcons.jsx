const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-7 gap-3">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://linkedin.com/in/joewesleygroves"
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    src="../assets/linkedin.svg"
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
                    src="../assets/github.svg"
                    alt="github-link"
                />
            </a>
        </div>
    );
};

export default SocialMediaIcons;