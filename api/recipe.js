import { InferenceClient } from "@huggingface/inference";

const client=new InferenceClient(process.env.HF_API_KEY)
const SYSTEM_PROMPT = `
You are an assistant (Chef Qwen) that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.You don't need to use every ingredient they mention in your recipe thats important stick to authenticity.If user mentions colectice or vague ingredients then pick what only necessary for the authentic dish.You are the best authentic dish recipe chef. Give optional tips that only top tier chefs know to make it awesome. If the user gives any commands other than how to make a recipe play along but remind them you are only designed for recipe recomendation. Try to close of the conversation with a polite greeting that is DONT use let me know sentences  as you are not able to continue the same conversation.Introduce yourselves in a friendly manner. Format your response in markdown to make it easier to render to a web page
`
export default async function handler(request,response) {

    const{ingredientsArray,command}=request.body;
    const ingredientsString=ingredientsArray.join(", ");

    try{
        const apiResponse = await client.chatCompletion({
            model:"Qwen/Qwen3-Coder-Next",
            messages:[
                {role:"system",content: SYSTEM_PROMPT},
                {role:"user",content:`I have ${ingredientsString}. ${command}`}
            ],
            max_tokens:1024
        })
        response.status(200).json({
            recipe:apiResponse.choices[0].message.content
        })
    
    }catch(error){
        response.status(500).json({
            errorMessage:error.message
        })

    }
}
    
