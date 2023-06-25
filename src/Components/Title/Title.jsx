import { TypeAnimation } from "react-type-animation";

const Title = ({ title }) => {
    return (
        <>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `${title}`,
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={300}
                className='font-extrabold gradient-text black md:text-2xl'
                repeat={Infinity}
            />
            <hr className="my-4 mx-auto w-1/2 border-red-700 border-2" />
        </>
    );
};

export default Title;