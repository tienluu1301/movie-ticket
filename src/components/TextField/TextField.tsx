import React from 'react'
import styles from './TextFieldStyle.module.scss'

export interface ITextField extends React.HtmlHTMLAttributes<HTMLInputElement> {
    type?: string
    label?: string
    classname?: string
    error?: string
    placeholder?: string
}

export const TextField = React.forwardRef<HTMLInputElement, ITextField>(
    (
        { type, label, className, error, placeholder, ...passProp }: ITextField,
        ref,
    ) => {
        return (
            <div>
                {label && <label>{label}</label>}
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    {...passProp}
                    ref={ref}
                />
                {error && <span className={styles.errorMess}>{error}</span>}
            </div>
        )
    },
)
