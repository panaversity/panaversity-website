import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(
        {
            "id": 17,
            "mainTitle": "Vertical Specialization Level (Optional)",
            "description": [],
            "outline": [
                {
                    "title": "GenAI for Cyber Security:",
                    "children": [
                        {
                            "type": "text",
                            "pointer": "Strengthen threat detection and response:",
                            "text": "GenAI can be used to rapidly detect and respond to cyber threats by analysing large volumes of security data in real time, identifying anomalies, and suggesting appropriate countermeasures."
                        },
                        {
                            "type": "text",
                            "pointer": "Enhance security monitoring and analysis:",
                            "text": "GenAI can assist security analysts in monitoring and analysing security logs, automating threat detection, and providing insights into security risks and vulnerabilities."
                        },
                        {
                            "type": "text",
                            "pointer": "Improve threat intelligence:",
                            "text": "GenAI can be used to gather and analyse threat intelligence from various sources, enabling organisations to stay informed about the latest threats and trends and proactively strengthen their security posture."
                        }
                    ]
                }
            ]
        }
    )
}