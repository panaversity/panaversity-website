import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 14,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "GenAI for Engineers:",
                    "children": [
                        {
                            "type": "text",
                            "text": "This specialisation will teach students how to use generative AI to improve engineering design and problem-solving. This is relevant to fields such as manufacturing, construction, and product development."
                        },
                        {
                            "type": "text",
                            "pointer": "Benefits:",
                            "text": "The benefits of this specialisation include:"
                        },
                        {
                            "type": "text",
                            "pointer": "Learn how to use generative AI:",
                            "text": "Learn how to use generative AI to create simulations, optimize designs, and predict failures."
                        },
                        {
                            "type": "text",
                            "pointer": "Gain a deeper understanding:",
                            "text": "Gain a deeper understanding of the engineering design process and how generative AI can be used to improve it."
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