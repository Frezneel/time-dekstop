import { motion } from "framer-motion";

interface ButtonItemFeedback{
    bgColorAnimate: string;
    bgColor: string;
    valueText: string;
    valueFontSize: string;
}

const ButtonItemFeedback : React.FC<ButtonItemFeedback> = (
    {bgColorAnimate, bgColor, valueText, valueFontSize}) => {
    return(
        <motion.button
            whileHover={{ scale: 1.1, backgroundColor: bgColorAnimate }} // Scale up on hover
            whileTap={{ scale: 0.9 }}   // Scale down on tap/click
            transition={{ duration: 0.2 }} // Animation duration
            style={{
                height: '50px',
                width: '120px',
                backgroundColor: bgColor,
                shadow: '',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                borderRadius: '0.5rem',
                textTransform: 'uppercase',
                fontSize: valueFontSize,
            }}
        >{valueText}</motion.button>
    )
}

export default ButtonItemFeedback;