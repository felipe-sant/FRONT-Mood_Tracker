import { useSelector } from "react-redux"
import useAppDispatch from "../hooks/useAppDispatch"
import css from "../styles/pages/home.module.css"
import { RootState } from "../store/store"
import TypewriterComponent from "../components/Typewriter.component"
import TextareaAutosize from 'react-textarea-autosize';
import { setText } from "../store/reducers/main.reducer"
import useDebounce from "../hooks/useDebounce"
import { useEffect } from "react"

function Home() {
    const dispatch = useAppDispatch()
    const { mood, comment, img, text } = useSelector((state: RootState) => state.main)
    const debounceText = useDebounce(text, 1000)

    useEffect(() => {
        if (debounceText) {
            alert(text)
        }
    }, [debounceText])

    return (
        <main className={css.main + " " + css[mood]}>
            <img src={img} alt="emoji" className={css.img} />
            <TypewriterComponent text={comment} />
            <div className={css.input}>
                <TextareaAutosize
                    className={css.textarea}
                    placeholder="Escreva seu texto aqui..."
                    value={text}
                    onChange={(e) => dispatch(setText(e.target.value))}
                />
            </div>
        </main>
    )
}

export default Home