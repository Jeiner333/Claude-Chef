import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = 
`You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they
mention in your recipe. The recipe can include additional ingredients they did't mention, but try
not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`

const token = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: token});

export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        const response = await ai.models.generateContent({
            model:  "gemini-2.5-flash",
            contents: ` ${SYSTEM_PROMPT} I have ${ingredientsString}. Please give me a recipe you'd recommend I make.`,
        });

        return response ? response.text : "No se pudoo generar una receta"
    } catch (error) {
        console.error("Error al generar receta", error);
        return "Hubo un error al generar la receta";
    }
  
}


