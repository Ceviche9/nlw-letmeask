import {ButtonHTMLAttributes} from 'react';

import '../styles/button.scss';

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({isOutlined = false, ...Props}: buttonProps) {

    return (

        <button 
        className={`button ${isOutlined ? 'outlined': ''}`} 
        {...Props} />
    )
}