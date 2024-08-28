import { Child } from '@/types/types'

export const TextChild = ({ child }: { child: Child }) => {
  return (
    <div className='my-3 [&:not(:first-child)]:my-6'>
      {child.pointer ? (
        <span className='font-bold'>{child.pointer}</span>
      ) : null}
      <p className='leading-7'>{child.text}</p>
      {child.children
        ? child.children.map((grandchild, grandchildIndex) => (
            <div key={grandchildIndex} className='py-1'>
              {grandchild.type === 'link' ? (
                <a
                  href={grandchild.url}
                  target='_blank'
                  rel='noreferrer'
                  className='text-blue-500'
                >
                  {grandchild.text}
                </a>
              ) : null}
            </div>
          ))
        : null}
    </div>
  )
}

export const VideoChild = ({ child }: { child: Child }) => {
  return (
    <a
      href={child.url}
      target='_blank'
      rel='noreferrer'
      className='text-blue-500'
    >
      {child.text}
    </a>
  )
}

export const LinkChild = ({ child }: { child: Child }) => {
  return (
    <div>
      <div className='py-2'>
        {child.pointer ? (
          <span className='font-bold'>{child.pointer} </span>
        ) : null}
        <a
          href={child.url}
          target='_blank'
          rel='noreferrer'
          className='text-blue-500'
        >
          {child.text}
        </a>
      </div>
    </div>
  )
}

export const GetChildComponent = (child: Child) => {
  switch (child.type) {
    case 'text':
      return <TextChild child={child} />
    case 'video':
      return <VideoChild child={child} />
    case 'link':
      return <LinkChild child={child} />
    default:
      return null
  }
}

export function ForwardRequest(pathname: string) {
  switch (pathname) {
    case 'introduction':
      return 'course/introduction'
    case 'q1':
    case 'q2':
    case 'q3':
      return `course/core/${pathname}`
    case 'q4':
    case 'q5':
    case 'q6':
      return `course/mastery/${pathname}`
    case 'q7':
      return `course/physical/${pathname}`
    default:
      return `course/optional/${pathname}`
  }
}
