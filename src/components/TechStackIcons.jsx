const TechStackIcons = () => {
    return (
        <div className="md:flex justify-center md:justify-start my-7 gap-5">
            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/html.svg"
                    alt="html"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">HTML</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/css.svg"
                    alt="css"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">CSS</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/javascript.svg"
                    alt="javascript"
                    className="justify-center"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">JavaScript</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/react.svg"
                    alt="react"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">React</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/nodejs.svg"
                    alt="node js"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">Node.js</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/mongodb.svg"
                    alt="mongodb"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">MongoDB</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/tailwind.svg"
                    alt="tailwind css"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">Tailwind CSS</p>
            </div>
            
            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/python.svg"
                    alt="python"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">Python</p>
            </div>

            <div className="flex flex-col justify-center items-center min-w-[48px]">
                <img 
                    src="../src/assets/sql.svg"
                    alt="sql"
                />
                <p className="mt-1 text-center font-poppins font-light text-grey text-sm md:mb-0 mb-6">SQL</p>
            </div> 
        </div>
    );
}

export default TechStackIcons;