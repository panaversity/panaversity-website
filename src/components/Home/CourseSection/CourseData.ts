import python from '../../../../public/kpk/course/python.jpeg'
import agents from '../../../../public/kpk/course/agents.jpeg'
import microservices from '../../../../public/kpk/course/microservices.jpeg'
import pytorch from '../../../../public/kpk/course/pytorch.jpeg'
import llama_3 from '../../../../public/kpk/course/llama_3.jpeg'
import Kubernetes from '../../../../public/kpk/course/Kubernetes.jpeg'
import Humanoid from '../../../../public/kpk/course/Humanoid.jpeg'
// import Nextjs from '../../../../public/kpk/course/react.jpeg'
export const CoreLevel = {
  LevelTitle: 'Applied GenAI Core Level (3 Quarters)',
  courses: [
    {
      id: 1,
      title: 'Prompt Engineering and Modern Python',
      href: '/course/q1',
      imageUrl: python,
      quarter: 'First quarter',
      duration: '3 Months',
    },
    {
      id: 2,
      title: 'Developing Multi AI Agent Systems',
      href: '/course/q2',
      imageUrl: agents,
      quarter: 'Second quarter',
      duration: '3 Months',
    },
    {
      id: 3,
      title: 'Cloud Native Microservices',
      href: '/course/q3',
      imageUrl: microservices,
      quarter: 'Third quarter',
      duration: '3 Months',
    },
  ],
}

export const MasteryLevel = {
  LevelTitle: 'Cloud Native GenAI Mastery Level (3 Quarters)',
  courses: [
    {
      id: 4,
      title: 'Generative AI with PyTorch',
      href: '/course/q4',
      imageUrl: pytorch,
      quarter: 'Fourth quarter',
      duration: '3 Months',
    },
    {
      id: 5,
      title: 'Fine-Tuning Open-Source LLM (Llama 3)',
      href: '/course/q5',
      imageUrl: llama_3,
      quarter: 'Fifth quarter',
      duration: '3 Months',
    },
    {
      id: 6,
      title: 'Kubernetes and Advanced CNAI',
      href: '/course/q6',
      imageUrl: Kubernetes,
      quarter: 'Sixth quarter',
      duration: '3 Months',
    },
  ],
}

export const PhysicalAI = {
  LevelTitle: 'Physical AI and Humanoids',
  courses: [
    {
      id: 7,
      title: 'Humanoid Robotics Development',
      href: '/course/q7',
      imageUrl: Humanoid,
      quarter: 'Seventh quarter',
      duration: '3 Months',
    },
  ],
}
