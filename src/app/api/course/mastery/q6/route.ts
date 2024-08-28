import { NextResponse } from "next/server"


export const GET = async () => {
    return NextResponse.json(
        {
            "id": 7,
            "mainTitle": "Cloud Native GenAI Mastery Level (3 Quarters)",
            "quarter": "Sixth Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Kubernetes and Advanced CNAI:",
                    "children": [
                        {
                            "type": "text",
                            "text": "Master Kubernetes, Terraform, and GitHub Actions to deploy your AI APIs, microservices, and models in the cloud. We will cover distributed system design involving creating AI systems that are distributed across multiple nodes, focusing on scalability, fault tolerance, consistency, availability, and partition tolerance."
                        },
                        {
                            "type": "text",
                            "pointer": "Certifications:",
                            "children": [
                                {
                                    "type": "link",
                                    "pointer": "Certified Kubernetes Application Developer (CKAD):",
                                    "text": "Certified Kubernetes Application Developer (CKAD)",
                                    "url": "https://www.cncf.io/certification/ckad/"
                                },
                                {
                                    "type": "link",
                                    "pointer": "HashiCorp Certified: Terraform Associate:",
                                    "text": "HashiCorp Certified: Terraform Associate",
                                    "url": "https://www.hashicorp.com/certification/terraform-associate"
                                }
                            ]
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaversity/learn-kubernetes",
                            "url": "https://github.com/panaversity/learn-kubernetes"
                        }
                    ]
                }
            ]
        }
    )
}