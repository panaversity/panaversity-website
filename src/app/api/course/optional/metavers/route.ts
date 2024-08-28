import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 12,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "Metaverse, 3D, and GenAI Integration:",
                    "children": [
                        {
                            "type": "text",
                            "text": "This specialisation will teach students how to create and use 3D models and other immersive content manually and with generative AI. This is relevant to fields such as gaming, marketing, and architecture."
                        },
                        {
                            "type": "text",
                            "pointer": "Benefits:",
                            "text": "The benefits of this specialisation include:"
                        },
                        {
                            "type": "text",
                            "pointer": "Learn how to use generative AI:",
                            "text": "Learn how to use generative AI to create realistic and immersive 3D models."
                        },
                        {
                            "type": "text",
                            "pointer": "Develop the skills necessary:",
                            "text": "Develop the skills necessary to work in the growing field of virtual reality (VR) and augmented reality (AR)."
                        },
                        {
                            "type": "text",
                            "pointer": "Apply generative AI:",
                            "text": "Apply generative AI to solve real-world problems in areas such as product design, marketing, and education."
                        }
                    ]
                }
            ]
        }
    )
}