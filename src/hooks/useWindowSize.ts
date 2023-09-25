import { useEffect, useState } from 'react'

interface IWaiting {
    width: number
    height: number
}

const useWindowSize = (delay: number) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        let shouldWait = false
        let waitingValue: IWaiting | null = null
        const timeoutFunc = () => {
            if (waitingValue == null) {
                shouldWait = false
            } else {
                setWindowSize(waitingValue)
                waitingValue = null
                setTimeout(timeoutFunc, delay)
            }
        }

        const handleResize = () => {
            if (shouldWait) {
                waitingValue = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
                return
            }

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
            shouldWait = true

            setTimeout(timeoutFunc, delay)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize
