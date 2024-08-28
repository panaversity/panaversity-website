import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 15,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "GenAI for Sales and Marketing:",
                    "children": [
                        {
                            "type": "text",
                            "text": "This specialisation will teach students how to use generative AI to improve sales and marketing campaigns. This is relevant to fields such as advertising, public relations, and customer service."
                        },
                        {
                            "type": "text",
                            "pointer": "Benefits:",
                            "text": "The benefits of this specialisation include:"
                        },
                        {
                            "type": "text",
                            "pointer": "Learn how to use generative AI:",
                            "text": "Learn how to use generative AI to create personalised marketing messages, generate leads, and track campaign performance."
                        },
                        {
                            "type": "text",
                            "pointer": "Gain a deeper understanding:",
                            "text": "Gain a deeper understanding of the latest marketing trends and how generative AI can be used to improve them."
                        },
                        {
                            "type": "text",
                            "pointer": "Prepare for a career:",
                            "text": "Prepare for a career in a growing field with high demand for skilled professionals."
                        }
                    ]
                }
            ]
        }
    )
}