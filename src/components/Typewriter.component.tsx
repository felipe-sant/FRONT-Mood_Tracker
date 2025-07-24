import { useEffect, useState } from "react"

function TypewriterComponent(props: { text: string }) {
    const { text } = props
    const speed = 20

    const [displayed, setDisplayed] = useState("P")

    useEffect(() => {
        setDisplayed("")
        if (!text) return

        let i = 0
        setDisplayed(text[i])
        const interval = setInterval(() => {
            if (i < text.length - 1) {
                setDisplayed(prev => prev + text[i])
                i++
            } else {
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return <p>{displayed}</p>
}

export default TypewriterComponent