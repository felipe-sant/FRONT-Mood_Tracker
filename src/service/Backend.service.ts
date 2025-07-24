import getRequest from "../functions/connection/getRequest";
import ErrorMessage from "../types/ErrorMessage";
import PredictResponse from "../types/responses/PredictResponse";

class BackendService {
    private static readonly URL = "https://api-moodtracker.vercel.app/api/"

    public static async predict(text: string): Promise<PredictResponse | undefined> {
        try {
            const response = await getRequest<PredictResponse>(BackendService.URL + "ai/predict", { text: text })
            if ("error" in response) {
                throw new Error(response.error);
            }
            return response
        } catch (error) {
            console.error(error)
            return
        }
    }
}

export default BackendService