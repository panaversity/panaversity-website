import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            "id": 3,
            "mainTitle": "Applied GenAI Core Level (3 Quarters)",
            "quarter" : "Second Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Applied Generative AI Fundamentals: Prompt Engineering, Developing Custom GPTs and Multi AI Agent Systems:",
                    "children": [
                        {
                            "type": "text",
                            "text": "With this course, you’ll start by building a strong understanding of generative AI and learn how to apply Large language models (LLMs) and diffusion models practically. We will introduce a set of principles known as prompt engineering, which will help developers to work efficiently with AI. Learn to create custom AI models and GPTs using OpenAI, Azure, and Google technologies. Use open source libraries, like Langchain, CrewAI, and LangGraph to automate repeatable, multi-step tasks and automate business processes that are typically done by a group of people."
                        },
                        {
                            "type": "text",
                            "pointer": "Certifications:",
                            "children": [
                                {
                                    "type": "link",
                                    "pointer": "Microsoft Certified: Azure AI Engineer Associate",
                                    "text": "Microsoft Certified: Azure AI Engineer Associate",
                                    "url": "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/"
                                },
                                {
                                    "type": "link",
                                    "pointer": "Certified crewAI Engineer",
                                    "text": "Certified crewAI Engineer",
                                    "url": "https://www.crewai.com/certification"
                                }
                            ]
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaversity/learn-applied-generative-ai-fundamentals",
                            "url": "https://github.com/panaversity/learn-applied-generative-ai-fundamentals"
                        }
                    ]
                }
            ]
        }
    )
}