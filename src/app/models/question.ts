import { Answer } from "./answer";

export class Question {
        id: number;
        user_id: number;
        title: string;
        question: string;
        created_at: string;
        updated_at: string;
        likes: number;
        answers: Answer[];
}
