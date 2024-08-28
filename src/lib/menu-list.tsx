import {
    Bookmark,
    LucideIcon,
    CloudCog,
    SquarePen,
    ScissorsSquare,
    Users,
    Brain
} from "lucide-react";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[] | null;
};

export function getMenuList(pathname: string): Group[] {
    return [
        {
            groupLabel: "Compulsory",
            menus: [
                {
                    href: "/course/introduction",
                    label: "Introduction",
                    active: pathname === "/course/introduction",
                    icon: SquarePen,
                    submenus: [

                    ]
                },
                {
                    href: "",
                    label: "Applied GenAI Core Level",
                    active: pathname === (""),
                    icon: Bookmark,
                    submenus: [
                        {
                            href: "/course/q1",
                            label: "Fundamentals of Prompt Engineering, Docker, GitHub, and Modern Python Programming",
                            active: pathname === "/course/q1"
                        },
                        {
                            href: "/course/q2",
                            label: "Applied Generative AI Fundamentals: Prompt Engineering, Developing Custom GPTs and Multi AI Agent Systems",
                            active: pathname === "/course/q2"
                        },
                        {
                            href: "/course/q3",
                            label: "Cloud Native AI Powered Microservices Design, Development, and Deployment",
                            active: pathname === "/course/q3"
                        }
                    ]
                },
                {
                    href: "",
                    label: "Cloud Native GenAI Mastery Level",
                    active: pathname.includes("/cloud-native"),
                    icon: CloudCog,
                    submenus: [
                        {
                            href: "/course/q4",
                            label: "Generative AI with PyTorch",
                            active: pathname === "/course/q4"
                        },
                        {
                            href: "/course/q5",
                            label: "Fine-Tuning Open-Source Large Language Models (Llama 3)",
                            active: pathname === "/course/q5"
                        },
                        {
                            href: "/course/q6",
                            label: "Kubernetes and Advanced CNAI",
                            active: pathname === "/course/q6"
                        }
                    ]
                },
                {
                    href: "",
                    label: "Building the Future: Physical AI and Humanoids",
                    active: pathname === "",
                    icon: Brain,
                    submenus: [
                        {
                            href: "/course/q7",
                            label: "Physical AI and Humanoid Robotics Development",
                            active: pathname === "/course/q7"
                        }
                    ]
                }
            ]
        },
        {
            groupLabel: "Optional",
            menus: [
                {
                    href: "",
                    label: "Frontend GUI Specialisation",
                    active: pathname === "",
                    icon: ScissorsSquare,
                    submenus: [
                        {
                            href: "/course/q8",
                            label: "Front-end Web GUI Development using Next.js and TypeScriptb",
                            active: pathname === "/course/q8"
                        }
                    ]
                }
            ]
        },
        {
            groupLabel: "",
            menus: [
                {
                    href: "",
                    label: "Vertical Specialization Level",
                    active: pathname === (""),
                    icon: Users,
                    submenus: [
                        {
                            href: "/course/healthandmedical",
                            label: "Healthcare and Medical GenAI Specialization",
                            active: pathname === "/course/healthandmedical"
                        },
                        {
                            href: "/course/web3",
                            label: "Web3, Blockchain, and GenAI Integration Specialization",
                            active: pathname === "/course/web3"
                        },{
                            href: "/course/metavers",
                            label: "Metaverse, 3D, and GenAI Integration Specialization",
                            active: pathname === "/course/metavers"
                        },
                        {
                            href: "/course/genaiaccounting",
                            label: "GenAI for Accounting, Finance, and Banking Specialization",
                            active: pathname === "/course/genaiaccounting"
                        },{
                            href: "/course/genaiengg",
                            label: "GenAI for Engineers Specialization",
                            active: pathname === "/course/genaiengg"
                        },
                        {
                            href: "/course/genaisales",
                            label: "GenAI for Sales and Marketing Specialization",
                            active: pathname === "/course/genaisales"
                        },{
                            href: "/course/genaiauto",
                            label: "GenAI for Automation and Internet of Things (IoT) Specialisation",
                            active: pathname === "/course/genaiauto"
                        },
                        {
                            href: "/course/genaisec",
                            label: "GenAI for Cyber Security",
                            active: pathname === "/course/genaisec"
                        },
                    ]
                }
            ]
        }
    ];
}
