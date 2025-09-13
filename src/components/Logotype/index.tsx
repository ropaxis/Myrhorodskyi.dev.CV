interface LogoProps {
    oneLetter?: boolean
     className?: string
}
import Logo from "@/components/svg/Logo"
export default function Logotype ({oneLetter = false, className = ''}: LogoProps) {
    return (
        <a href="/" className={`logotype ${className}`}>
            <Logo oneLetter={oneLetter}/>
        </a>)
}

