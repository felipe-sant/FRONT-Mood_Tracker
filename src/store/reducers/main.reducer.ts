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
    img: imgNormal
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setMood: (state, action: PayloadAction<MoodType>) => {
            const mood = action.payload
            switch (mood) {
                case "normal":
                    state.img = imgNormal
                    break
                case "neutral":
                    state.img = imgNeutral
                    break
                case "negative":
                    state.img = imgNegative
                    break
                case "positive":
                    state.img = imgPositive
                    break
                case "inative":
                    state.img = imgInative
                    break
                case "error":
                    state.img = imgError
                    break
            }
            state.mood = mood
        }
    }
})

export const { setMood } = mainSlice.actions
export default mainSlice.reducer

export { mainSlice }