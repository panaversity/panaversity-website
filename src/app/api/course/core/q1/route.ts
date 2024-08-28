import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "id": 2,
        "mainTitle": "Applied GenAI Core Level (3 Quarters)",
        "quarter": "First Quarter",
        "description": [],
        "outline": [

            {
                "title": "Fundamentals of Prompt Engineering, Docker, GitHub, and Modern Python Programming:",
                "children": [
                    {
                        "type": "text",
                        "text": "We begin the course by understanding the basics of GenAI and Prompt Engineering. Then we will understand the basics of Linux, Docker, VSCode, Devcontainer, and GitHub. The main focus will be on mastering the fundamentals of Modern Python with Typing, the go-to language for AI."
                    },
                    {
                        "type": "text",
                        "pointer": "Certifications:",
                        "text": "",
                        "children": [
                            {
                                "type": "link",
                                "pointer": "Certified Professional Python Programmer (CPPP1)",
                                "text": "Certified Professional Python Programmer (CPPP1)",
                                "url": "https://pythoninstitute.org/pcpp1"
                            },
                        ]
                    },
                    {
                        "type": "link",
                        "pointer": "Learning Repo:",
                        "text": "https://github.com/panaversity/learn-cloud-native-modern-python",
                        "url": "https://github.com/panaversity/learn-cloud-native-modern-python"
                    }
                ]
            }
        ]
    })
}