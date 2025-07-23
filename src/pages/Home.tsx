import { useSelector } from "react-redux"
import useAppDispatch from "../hooks/useAppDispatch"
import css from "../styles/pages/home.module.css"
import { RootState } from "../store/store"
import { setMood } from "../store/reducers/main.reducer"

function Home() {
    const dispatch = useAppDispatch()
    const { mood, img } = useSelector((state: RootState) => state.main)

    return (
        <main className={css.main + " " + css[mood]}>
            <img src={img} alt="emoji" className={css.img}/>
            <p>{mood}</p>
            <button onClick={() => dispatch(setMood("normal"))}>normal</button>
            <button onClick={() => dispatch(setMood("neutral"))}>neutral</button>
            <button onClick={() => dispatch(setMood("positive"))}>positive</button>
            <button onClick={() => dispatch(setMood("negative"))}>negative</button>
        </main>
    )
}

export default Home