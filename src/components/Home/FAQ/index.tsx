import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question:
      'What is the focus of the Cloud Native Applied Generative AI Engineer program?',
    answer:
      'The program is designed to equip participants with the skills needed to excel in Cloud Native technologies, Generative AI, and Physical AI. It emphasizes developing custom GPTs, AI agents, humanoid robotics, and fine-tuning large language models (LLMs).',
  },
  {
    question:
      'What are the career opportunities after completing this program?',
    answer:
      'Graduates will be prepared for various roles, including AI developers, cloud-native application developers, and humanoid robotics specialists. The program also prepares participants for global certifications, startup opportunities, and freelance work.',
  },
  {
    question: 'How long is the program, and how is it structured?',
    answer:
      'The program spans 21 months, divided into seven quarters. It consists of two levels: a foundation level and a professional level, allowing students to start working after completing the foundation level while continuing their professional studies.',
  },
  {
    question:
      'What certifications will I be prepared to take upon completion of the program?',
    answer:
      'The program prepares students to take several online certifications, including Microsoft Certified: Azure AI Engineer Associate, Certified Kubernetes Application Developer (CKAD), Confluent Certified Developer for Apache Kafka (CCDAK), and more. While the program itself does not issue these certifications, it equips students with the skills necessary to successfully pass these industry-recognized exams.',
  },

  {
    question: 'Why is this program focused on Cloud Native technologies?',
    answer:
      'Cloud Native technologies are essential for creating scalable, reliable applications in modern cloud environments. The program covers tools like Docker, Kubernetes, Terraform, and GitHub Actions to ensure participants are well-equipped for the demands of the industry.',
  },
  {
    question:
      'What is the difference between Physical AI and Generative AI, and how does the program address them?',
    answer:
      'Generative AI focuses on creating new data or content using AI models, while Physical AI integrates AI with physical entities like robots. The program covers both areas, teaching participants to develop applications that span both digital and physical realms.',
  },
  {
    question:
      'Will I learn how to build large language models (LLMs) from scratch in this program?',
    answer:
      'The program does not focus on building LLMs from scratch due to the complexity and resources required. Instead, it emphasizes fine-tuning existing open-source LLMs and applying them in cloud-native environments.',
  },
  {
    question:
      'How does the program integrate practical, real-world applications with AI training?',
    answer:
      'The program combines advanced AI training with practical applications, particularly in the context of industries like healthcare, finance, and robotics. Participants will work on projects that apply AI solutions to real-world challenges.',
  },
  {
    question:
      'What is the importance of learning design thinking and behavior-driven development (BDD) in this course?',
    answer:
      'Design thinking and BDD are methodologies that help ensure the AI solutions developed are user-centric, aligned with real-world needs, and technically sound. These approaches are integrated into the program to enhance the design and development process.',
  },
  {
    question:
      'Why is Microsoft Azure the default cloud platform used in this program?',
    answer:
      "Microsoft Azure is chosen as the default cloud platform for its comprehensive AI and cloud services. The program covers using Azure for deploying AI-powered microservices, managing cloud infrastructure, and leveraging Azure's AI tools.",
  },
]

const FAQ = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
        <div className='mx-auto  divide-y divide-gray-900/10'>
          <h2 className='text-4xl text-center leading-tight font-bold py-5 tracking-tight text-custom-color'>
            Frequently asked questions
          </h2>
          {/* <h2 className='text-4xl text-center md:text-justify  font-bold tracking-tight text-custom-color sm:text-4xl pb-10'>
            {level.LevelTitle}
          </h2> */}
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={faq.question}>
                <AccordionTrigger className='text-start text-xl'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=' text-lg px-7'>
                  <p>{faq.answer}</p>
                </AccordionContent>{' '}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ
