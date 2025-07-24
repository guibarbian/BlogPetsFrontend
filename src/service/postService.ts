import axios from "axios";
import type { Post } from "../types";

const BASE_URL = "http://localhost:3001"
const BASE_URL2 = "http://localhost:8080"

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`)
    return response.data
}