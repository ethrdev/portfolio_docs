import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/gameplan-concepts',
    name: 'Gameplan concepts',
    description: 'Understand the concepts behind GTO gameplans.',
  },
  {
    href: '/gameplan-features',
    name: 'Gameplan features',
    description: 'Get an overview of the features in Gameplan mode.',
  },
  {
    href: '/practice-concepts',
    name: 'Practice mode concepts',
    description:
      'Read about the concepts behind the Practice mode and how to use it.',
  },
  {
    href: '/practice-features',
    name: 'Practice mode features',
    description:
      'See an overview of the features in Practice mode and how to use them.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading className="text-white " level={2} id="guides">
        Product features
      </Heading>
      <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm  text-[#757575]">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
