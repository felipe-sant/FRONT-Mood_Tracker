import { createAsyncThunk } from "@reduxjs/toolkit";
import BackendService from "../Backend.service";

const predict = createAsyncThunk("api/predict", async (text: string) => {
    const result = await BackendService.predict(text);
    if (result === undefined) {
        throw new Error("Prediction returned undefined");
    }
    return result;
})

export default predict