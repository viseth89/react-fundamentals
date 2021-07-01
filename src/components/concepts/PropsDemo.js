import {useState} from 'react';

const PropsDemo = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <FunctionalComponent string='will this display?' />
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
        </div>
    );
};