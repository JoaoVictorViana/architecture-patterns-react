import { useCallback, useState } from "react"

export const useHook = () => {
    const [text, setText] = useState('Title')
    
    const changeText = useCallback((value: string) => {
        setText(value)
    }, [])

    return {
        text,
        changeText,
    }
}