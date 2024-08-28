import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            "id": 4,
            "mainTitle": "Applied GenAI Core Level (3 Quarters)",
            "quarter": "Third Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Cloud Native AI Powered Microservices Design, Development, and Deployment:",
                    "children": [
                        {
                            "type": "text",
                            "text": "Build scalable AI Powered APIs using FastAPI, Postgres, Kafka, Kong, GenAI APIs like OpenAI Chat Completion APIs, Assistant APIs, LangChain and Open Source AI LLMs, develop them using Containers and Dev Containers, and deploy them using Docker Compose locally and Kubernetes Powered Serverless Container Services on the cloud."
                        },
                        {
                            "type": "text",
                            "text": "We will also learn to integrate design thinking and Behavior-Driven Development (BDD) in developing AI systems. We will learn to create AI solutions that are deeply aligned with user needs and expectations. Design thinking ensures a thorough understanding of the user and problem space, while BDD provides a structured approach to defining and validating the desired behaviours of the AI system. Together, these methodologies lead to the development of AI solutions that are not only technically robust but also highly user-centric and effective in solving real-world problems."
                        },
                        {
                            "type": "text",
                            "pointer": "Certifications:",
                            "text": "",
                            "children": [
                                {
                                    "type": "link",
                                    "pointer": "PostgreSQL 13 Associate Certification",
                                    "text": "PostgreSQL 13 Associate Certification",
                                    "url": "https://www.postgresql.org/certification/"
                                },
                                {
                                    "type": "link",
                                    "pointer": "Confluent Certified Developer for Apache Kafka (CCDAK)",
                                    "text": "Confluent Certified Developer for Apache Kafka (CCDAK)",
                                    "url": "https://www.confluent.io/certification/"
                                },
                                {
                                    "type": "link",
                                    "pointer": "Design Thinking Professional Certificate (DTPC):",
                                    "text": "Design Thinking Professional Certificate (DTPC)",
                                    "url": "https://www.designthinkingcertification.com/"
                                },
                                {
                                    "type": "link",
                                    "pointer": "Test and Behavior Driven Development (TDD/BDD):",
                                    "text": "Test and Behavior Driven Development (TDD/BDD)",
                                    "url": "https://www.tddbdd.com/"
                                }
                            ]
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaversity/learn-cloud-native-ai-powered-microservices/",
                            "url": "https://github.com/panaversity/learn-cloud-native-ai-powered-microservices/"
                        },
                        {
                            "type": "text",
                            "text": "We Will Be Using Microsoft Azure as our Default Cloud Platform"
                        },
                        {
                            "type": "text",
                            "text": "Amazon is still the cloud king based on market share. But many analysts agree: In the battle for the cloud, AI is now a game-changer — and Amazon's main competitors, particularly Microsoft, have the momentum."
                        },
                        {
                            "type": "link",
                            "pointer": "Get a free Azure Account now:",
                            "text": "https://azure.microsoft.com/en-us/free",
                            "url": "https://azure.microsoft.com/en-us/free"
                        },
                        {
                            "type": "link",
                            "pointer": "Azure Container Apps:",
                            "text": "https://azure.microsoft.com/en-us/products/container-apps",
                            "url": "https://azure.microsoft.com/en-us/products/container-apps"
                        },
                        {
                            "type": "link",
                            "pointer": "Watch:",
                            "text": "https://www.youtube.com/watch?v=0HwQfsa03K8",
                            "url": "https://www.youtube.com/watch?v=0HwQfsa03K8"
                        },
                        {
                            "type": "link",
                            "pointer": "Deploy:",
                            "text": "https://learn.microsoft.com/en-us/azure/container-apps/code-to-cloud-options",
                            "url": "https://learn.microsoft.com/en-us/azure/container-apps/code-to-cloud-options"
                        },
                        {
                            "type": "link",
                            "pointer": "Azure Container Registry:",
                            "text": "https://azure.microsoft.com/en-us/products/container-registry/",
                            "url": "https://azure.microsoft.com/en-us/products/container-registry/"
                        },
                        {
                            "type": "link",
                            "pointer": "Deploy to Azure Container Apps with GitHub Actions:",
                            "text": "https://learn.microsoft.com/en-us/azure/container-apps/github-actions",
                            "url": "https://learn.microsoft.com/en-us/azure/container-apps/github-actions"
                        },
                        {
                            "type": "link",
                            "pointer": "Azure Kubernetes Service (AKS):",
                            "text": "https://azure.microsoft.com/en-us/products/kubernetes-service",
                            "url": "https://azure.microsoft.com/en-us/products/kubernetes-service"
                        },
                        {
                            "type": "link",
                            "pointer": "GitHub:",
                            "text": "https://azure.microsoft.com/en-us/products/github/",
                            "url": "https://azure.microsoft.com/en-us/products/github/"
                        },
                        {
                            "type": "link",
                            "pointer": "GitHub Actions for AKS:",
                            "text": "https://learn.microsoft.com/en-us/azure/aks/kubernetes-action",
                            "url": "https://learn.microsoft.com/en-us/azure/aks/kubernetes-action"
                        },
                        {
                            "type": "link",
                            "pointer": "Azure OpenAI Service:",
                            "text": "https://azure.microsoft.com/en-us/products/ai-services/openai-service",
                            "url": "https://azure.microsoft.com/en-us/products/ai-services/openai-service"
                        },
                        {
                            "type": "link",
                            "pointer": "Azure Database for PostgreSQL:",
                            "text": "https://azure.microsoft.com/en-us/products/postgresql/",
                            "url": "https://azure.microsoft.com/en-us/products/postgresql/"
                        },
                        {
                            "type": "link",
                            "pointer": "Kafka:",
                            "text": "https://cloudatlas.me/5-different-ways-you-can-run-apache-kafka-on-azure-973a18925ac7",
                            "url": "https://cloudatlas.me/5-different-ways-you-can-run-apache-kafka-on-azure-973a18925ac7"
                        }
                    ]
                }
            ]
        }
    )
}

