import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 10,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [
                "Students will have the option of selecting one of the following specialisations after the completion of sixth quarter i.e. in the seventh quarter:"
            ],
            "outline": [
                {
                    "title": "Healthcare and Medical GenAI:",
                    "children": [
                        {
                            "type": "text",
                            "text": "This specialisation will teach students how to use generative AI to improve healthcare and medical research. This is relevant to fields such as drug discovery, personalised medicine, and surgery planning."
                        },
                        {
                            "type": "text",
                            "pointer": "Benefits:",
                            "text": "The benefits of this specialisation include:"
                        },
                        {
                            "type": "text",
                            "pointer": "Learn how to use generative AI:",
                            "text": "Learn how to use generative AI to identify diseases, develop new drugs, and personalise treatment plans."
                        },
                        {
                            "type": "text",
                            "pointer": "Gain a deeper understanding:",
                            "text": "Gain a deeper understanding of the ethical implications of using generative AI in healthcare."
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