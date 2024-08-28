import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 16,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "GenAI for Automation and Internet of Things (IoT):",
                    "children": [
                        {
                            "type": "text",
                            "pointer": "Provide Multi-Modal User Interface for the IoT systems:",
                            "text": "Multimodal interaction exploits the synergic use of different modalities to optimise the interactive tasks accomplished by the users. This allows a user to use several input modes such as speech, touch, and visual to interact with IoT systems."
                        },
                        {
                            "type": "text",
                            "pointer": "Improve efficiency and accuracy of industrial processes:",
                            "text": "By implementing GenAI in automation and IoT systems, industries can optimise their processes, reduce manual labour, and increase productivity while ensuring higher accuracy and consistency."
                        },
                        {
                            "type": "text",
                            "pointer": "Enhance decision-making:",
                            "text": "GenAI can analyse vast amounts of data collected by IoT sensors to derive valuable insights, enabling businesses to make informed decisions regarding operations, maintenance, and resource allocation."
                        },
                        {
                            "type": "text",
                            "pointer": "Personalise user experiences:",
                            "text": "GenAI can leverage IoT data to understand user preferences and behaviours, enabling the creation of personalised experiences across smart devices and IoT-enabled systems."
                        }
                    ]
                }
            ]
        }
    )
}