import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mainReducerType from "../../types/reducers/MainReducer.type";
import MoodType from "../../types/Mood.type";
import imgNegative from "../../images/negative.svg"
import imgNeutral from "../../images/neutral.svg"
import imgPositive from "../../images/positive.svg"
import imgNormal from "../../images/normal.svg"
import imgInative from "../../images/inative.svg"
import imgError from "../../images/error.svg"

const initialState: mainReducerType = {
    mood: "normal",
    comment: "Irei analisar o sentimento da sua frase.",
    img: imgNormal,
    text: ""
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            const text = action.payload
            state.text = text
        },
        setMood: (state, action: PayloadAction<MoodType>) => {
            const mood = action.payload
            switch (mood) {
                case "normal":
                    state.comment = "Irei analisar o sentimento da sua frase."
                    state.img = imgNormal
                    break
                case "neutral":
                    state.comment = "Sua frase é neutra."
                    state.img = imgNeutral
                    break
                case "negative":
                    state.comment = "Sua frase é negativa!"
                    state.img = imgNegative
                    break
                case "positive":
                    state.comment = "Sua frase é positiva!"
                    state.img = imgPositive
                    break
                case "inative":
                    state.comment = "Talvez eu esteja um pouco doente hoje, volte mais tarde."
                    state.img = imgInative
                    break
                case "error":
                    state.comment = "Ocorreu um erro!"
                    state.img = imgError
                    break
            }
            state.mood = mood
        }
    }
})

export const { setText, setMood } = mainSlice.actions
export default mainSlice.reducer

export { mainSlice }