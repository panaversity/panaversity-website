import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            "id": 5,
            "mainTitle": "Cloud Native GenAI Mastery Level (3 Quarters)",
            "quarter": "Fourth Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Generative AI with PyTorch:",
                    "children": [
                        {
                            "type": "text",
                            "text": "Generative AI tools like ChatGPT, Gemini, and DALL-E have revolutionised our professional landscape. This hands-on course, “Master Generative AI with PyTorch,” guides you through the exciting process of building and training AI models using Python and the versatile, open-source PyTorch framework, all with the hardware you already have. You’ll delve into the core concepts of Generative Adversarial Networks (GANs), Transformers, Large Language Models (LLMs), variational autoencoders, diffusion models, LangChain, and more. Along the way, you’ll gain practical experience and a deep understanding of these cutting-edge technologies."
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaversity/genai-with-pytorch",
                            "url": "https://github.com/panaversity/genai-with-pytorch"
                        }
                    ]
                }
            ]
        }
    )
}