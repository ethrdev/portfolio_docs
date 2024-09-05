import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const gameplans = [
  {
    href: '/gameplan',
    name: 'Gameplan',
    description: 'Learn how to authenticate your API requests.',
  },
]

export function Gameplan() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading className="text-white " level={2} id="gameplan">
        Gameplan
      </Heading>
      <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {gameplans.map((gameplan) => (
          <div key={gameplan.href}>
            <h3 className="text-sm font-semibold text-white">
              {gameplan.name}
            </h3>
            <p className="mt-1 text-sm  text-[#757575]">
              {gameplan.description}
            </p>
            <p className="mt-4">
              <Button href={gameplan.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
