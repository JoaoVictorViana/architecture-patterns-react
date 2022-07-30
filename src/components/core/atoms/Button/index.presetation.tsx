import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren

export const ButtonPresetation: FC<ButtonProps> = ({ children, ...props }) => (
    <button {...props} className="p-2 bg-teal-500 hover:bg-teal-900">{children}</button>
)