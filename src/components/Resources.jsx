import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

const resources = [
  {
    href: '/poker-scientist',
    name: 'About Poker Scientist',
    description:
      'What is Poker Scientist and how can it help you improve your poker game?',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/gto',
    name: 'Principles of GTO',
    description:
      'Learn about the fundamentals of GTO and how to apply them to your game.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },

  {
    href: '/getstarted',
    name: 'Getting started',
    description:
      'Learn how to get started with Poker Scientist and how to use the app.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full  backdrop-blur-[2px] transition duration-300  bg-white/7.5 ring-white/15 group-hover:bg-teal-300/10 group-hover:ring-teal-400">
      <Icon className="w-5 h-5 transition-colors duration-300  fill-white/10 stroke-[#757575] group-hover:fill-teal-300/10 group-hover:stroke-teal-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-md transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]  fill-white/1 stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 transition duration-300 rounded-md opacity-0 bg-gradient-to-r group-hover:opacity-100 from-teal-900/50 to-cyan-900/50"
        style={style}
      />
      <motion.div
        className="absolute inset-0 transition duration-300 rounded-md opacity-0 mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]  fill-white/2.5 stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex items-center rounded-md transition-shadow hover:shadow-md  bg-white/2.5 hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 items-center rounded-md ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      <div className="relative items-center px-4 py-12 pb-4 rounded-md">
        <h3 className="mt-0 text-base font-semibold leading-7 text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-md" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm  text-[#757575]">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading className="text-white " level={2} id="resources">
        Fundamentals
      </Heading>
      <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-white/5 sm:grid-cols-1 xl:grid-cols-3">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
