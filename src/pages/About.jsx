import useMediaQuery from '../hooks/useMediaQuery';

const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    
    return (
        <div>
            <h3>Hello World</h3>
        </div>
    )
}

export default About;