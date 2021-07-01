import {useState} from 'react';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [textAlign, setTextAlign ] = useState('center');

    let styles={
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign :  textAlign
    }

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('black') : setBackgroundColor('purple');
    };

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }

    const toggleBorderStyle = () => {
        borderStyle == 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                <FunctionalComponent string='This will change the Color' function={toggleColor}/>
                <FunctionalComponent string="This will change the background" function={toggleBackgroundColor}/>
                <FunctionalComponent string='This will change the border-radius...' function={toggleBorderRadius}/>
                <FunctionalComponent string='This will change the border-style' function={toggleBorderStyle}/>
                {/* I find this extremely strange and have not yet picked up the pattern nor do I see how it is effective/effeicent */}
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    );
};