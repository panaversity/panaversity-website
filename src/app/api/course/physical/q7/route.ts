import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 8,
            "mainTitle": "Building the Future: Physical AI and Humanoids",
            "quarter": "Seventh Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Physical AI and Humanoid Robotics Development:",
                    "children": [
                        {
                            "type": "text",
                            "text": "Artificial intelligence (AI) has experienced remarkable advancements in recent years. However, the future of AI extends beyond the digital space into the physical world, driven by robotics. This new frontier, known as “Physical AI,” involves AI systems that can function in the real world and comprehend physical laws."
                        },
                        {
                            "type": "text",
                            "text": "Humanoid robots are poised to excel in our human-centred world because they share our physical form and can be trained with abundant data from interacting in human environments."
                        },
                        {
                            "type": "text",
                            "text": "This course provides an in-depth exploration of humanoid robotics, focusing on the integration of ROS 2 (Robot Operating System), Open Source Meta Llama 3, and OpenAI technologies. Students will learn to design, simulate, and deploy advanced humanoid robots capable of natural interactions."
                        },
                        {
                            "type": "text",
                            "pointer": "Course Topics:",
                            "text": "The curriculum covers essential topics such as ROS 2 for robotic control, simulations with Gazebo and Unity, and using OpenAI’s GPT models for conversational AI."
                        },
                        {
                            "type": "text",
                            "text": "Through practical projects and real-world applications, students will develop the skills needed to drive innovation in humanoid robotics."
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaversity/learn-physical-ai-humanoid-robotics",
                            "url": "https://github.com/panaversity/learn-physical-ai-humanoid-robotics"
                        }
                    ]
                }
            ]
        }
    )
}