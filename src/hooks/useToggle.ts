import { useState } from 'react'

type DefaultValue = boolean | number | string | object

const useToggle = (defaultValue: DefaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const toggleValue = (value: DefaultValue) => {
        setValue((currentValue) =>
            typeof value === 'boolean' ? value : !currentValue,
        )
    }

    return [value, toggleValue]
}

export default useToggle
