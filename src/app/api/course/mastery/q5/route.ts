import { NextResponse } from "next/server"


export const GET = async () => {
    return NextResponse.json(
        {
            "id": 6,
            "mainTitle": "Cloud Native GenAI Mastery Level (3 Quarters)",
            "quarter": "Fifth Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Fine-Tuning Open-Source Large Language Models (Llama 3):",
                    "children": [
                        {
                            "type": "text",
                            "text": "This comprehensive course is designed to guide learners through the process of fine-tuning open-source Large Language Models (LLMs) such as Meta LLaMA 3 using PyTorch, with a particular emphasis on cloud-native training and deployment. The course covers everything from the fundamentals to advanced concepts, ensuring students acquire both theoretical knowledge and practical skills."
                        },
                        {
                            "type": "text",
                            "pointer": "Course Overview:",
                            "text": "The journey begins with an introduction to LLMs, focusing on their architecture, capabilities, and the specific features of Meta LLaMA 3. Next, the course dives into PyTorch fundamentals, teaching students how to perform basic operations with tensors and build simple neural networks. This foundation is crucial for understanding the mechanics behind LLMs."
                        },
                        {
                            "type": "text",
                            "pointer": "Data Preparation:",
                            "text": "Data preparation is a crucial aspect of training models. The course covers comprehensive data collection and preprocessing techniques, such as tokenization and text normalisation. These steps are essential for preparing datasets suitable for fine-tuning LLMs like Meta LLaMA 3."
                        },
                        {
                            "type": "text",
                            "pointer": "Fine-Tuning Meta LLaMA 3:",
                            "text": "Fine-tuning Meta LLaMA 3 with PyTorch forms a significant part of the course. Students will delve into the architecture of Meta LLaMA 3, learn how to load pre-trained models, and apply fine-tuning techniques."
                        },
                        {
                            "type": "text",
                            "pointer": "Cloud-Native Training and Deployment:",
                            "text": "A critical aspect of this course is its focus on cloud-native training and deployment using Nvidia NIM. Furthermore, students learn how to deploy models using Docker and Kubernetes, set up monitoring and maintenance tools, and ensure their models are scalable and efficient."
                        },
                        {
                            "type": "text",
                            "pointer": "Model Export and Inference:",
                            "text": "To round off the learning experience, the course includes an in-depth segment on exporting models for inference and building robust inference pipelines."
                        },
                        {
                            "type": "text",
                            "pointer": "Capstone Project:",
                            "text": "The course culminates in a capstone project, where students apply all the skills they have learned to fine-tune and deploy Meta LLaMA 3 on a chosen platform."
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaversity/learn-fine-tuning-llms",
                            "url": "https://github.com/panaversity/learn-fine-tuning-llms"
                        }
                    ]
                }
            ]
        }
    )
}