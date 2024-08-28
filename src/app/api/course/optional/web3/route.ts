import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 11,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "Web3, Blockchain, and GenAI Integration:",
                    "children": [
                        {
                            "type": "text",
                            "text": "This specialisation will teach students how to integrate generative AI with Web3 and blockchain technologies. This is relevant to fields such as finance, healthcare, and supply chain management."
                        },
                        {
                            "type": "text",
                            "pointer": "Benefits:",
                            "text": "The benefits of this specialisation include:"
                        },
                        {
                            "type": "text",
                            "pointer": "Learn how to create smart contracts:",
                            "text": "Learn how to create smart contracts and decentralised applications (dApps)."
                        },
                        {
                            "type": "text",
                            "pointer": "Gain a deeper understanding:",
                            "text": "Gain a deeper understanding of the potential of blockchain technology and how it can be used to improve business processes."
                        },
                        {
                            "type": "text",
                            "pointer": "Develop the skills necessary:",
                            "text": "Develop the skills necessary to work in a rapidly growing field with high demand for skilled professionals."
                        }
                    ]
                }
            ]
        }
    )
}