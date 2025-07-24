import { useSelector } from "react-redux"
import useAppDispatch from "../hooks/useAppDispatch"
import css from "../styles/pages/home.module.css"
import { RootState } from "../store/store"
import TypewriterComponent from "../components/Typewriter.component"
import TextareaAutosize from 'react-textarea-autosize';
import { setMood, setText } from "../store/reducers/main.reducer"
import useDebounce from "../hooks/useDebounce"
import { useEffect } from "react"
import BackendService from "../service/Backend.service"
import predict from "../service/asyncThunk/predict"

function Home() {
    const dispatch = useAppDispatch()
    const { mood, comment, img, text } = useSelector((state: RootState) => state.main)
    const debounceText = useDebounce(text, 1000)

    useEffect(() => {
        if (debounceText) {
            dispatch(predict(text))
        }
        if (text === "") {
            dispatch(setMood("normal"))
        }
    }, [debounceText])

    return (
        <main className={css.main + " " + css[mood]}>
            <header></header>
            <section>
                <div className={css.emoji}>
                    <img src={img} alt="emoji" className={css.img} />
                    <TypewriterComponent text={comment} />
                </div>
                <div className={css.input}>
                    <TextareaAutosize
                        className={css.textarea}
                        placeholder="Escreva seu texto aqui..."
                        value={text}
                        onChange={(e) => dispatch(setText(e.target.value))}
                    />
                </div>
            </section>
            <footer></footer>
        </main>
    )
}

export default Home