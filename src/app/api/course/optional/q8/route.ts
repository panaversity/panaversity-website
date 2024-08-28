import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 9,
            "mainTitle": "Frontend GUI Specialisation (Optional)",
            "quarter": "Eighth Quarter",
            "description": [],
            "outline": [
                {
                    "title": "Front-end Web GUI Development using Next.js and TypeScript (Optional):",
                    "children": [
                        {
                            "type": "text",
                            "text": "Next.js is designed to handle complex front-end applications well, making it a good fit for AI applications that might grow in features and data usage over time. Next.js offers features like API routes and file-based routing, which can streamline development for AI applications that need to interact with backend APIs and manage different application views."
                        },
                        {
                            "type": "text",
                            "text": "While Next.js and TypeScript aren't the only options for building AI application frontends, their focus on performance, scalability, and developer experience makes them a compelling choice for many developers."
                        },
                        {
                            "type": "link",
                            "pointer": "Learning Repo:",
                            "text": "https://github.com/panaverse/learn-nextjs",
                            "url": "https://github.com/panaverse/learn-nextjs"
                        }
                    ]
                }
            ]
        }
    )
}