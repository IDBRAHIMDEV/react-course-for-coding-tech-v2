
import {object, string} from 'yup';

export const ArticleSchema = object({
    title: string().min(5, 'Titre droit avoir au minimum 5 caracteres').max(10).required("Titre droit etre obligatoire !"),
    image: string().url().required(),
    body: string().min(10).required()
})