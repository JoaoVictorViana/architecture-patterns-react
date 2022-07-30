import { FC } from "react"
import { useHook } from "./index.hook"
import { ButtonPresetation } from "./index.presetation"

export const Button: FC = () => {
    const { text, changeText } = useHook()

    return <ButtonPresetation onClick={() => changeText('Teste')}>{text}</ButtonPresetation>
}