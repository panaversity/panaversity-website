import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 13,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "GenAI for Accounting, Finance, and Banking:",
                    "children": [
                        {
                            "type": "text",
                            "text": "This specialisation will teach students how to use generative AI to improve accounting, finance, and banking processes. This is relevant to fields such as fraud detection, risk management, and investment analysis."
                        },
                        {
                            "type": "text",
                            "pointer": "Benefits:",
                            "text": "The benefits of this specialisation include:"
                        },
                        {
                            "type": "text",
                            "pointer": "Learn how to use generative AI:",
                            "text": "Learn how to use generative AI to automate tasks, identify patterns, and make predictions."
                        },
                        {
                            "type": "text",
                            "pointer": "Gain a deeper understanding:",
                            "text": "Gain a deeper understanding of the financial industry and how generative AI can be used to improve its processes."
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