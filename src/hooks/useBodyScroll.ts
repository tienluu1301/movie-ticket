import { useEffect } from 'react'

export const useBodyScroll = (isDeactivate: boolean) => {
    useEffect(() => {
        if (isDeactivate) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'scroll'
        }
    }, [isDeactivate])
}
