import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react'
import { AnimateSharedLayout } from 'framer-motion';



function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 tracking-wide text-sm transition text-[#757575] hover:text-[#fefefe]"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, secondLevel = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm tracking-wide transition font-medium font-sans rounded-r-md rounded-l-sm',
        isAnchorLink ? 'pl-6 py-0.5' : 'pl-4',
        secondLevel ? 'text-xs tracking-wide ' : '',
        active
          ? ' bg-neutral-800 text-teal-400'
          : '  text-[#8a8f98]  hover:text-[#fefefe]'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="neutral">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 will-change-transform"
      style={{ borderRadius: 6, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute w-px h-6 bg-teal-500 left-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className, isOpen, onToggle }) {
  const toggleOpen = () => {
    onToggle(group.title);
  };


  let isInsideMobileNavigation = useIsInsideMobileNavigation();
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  );

  let isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1;

  return (
    <li className={clsx("relative mt-1.5 ", className)}>

      {/* Top navigation */}
      <h2
        className={`flex justify-between tracking-wide items-center text-sm font-sans font-medium cursor-pointer px-2 py-1 rounded-md transition duration-100
        ${isOpen
            ? "bg-transparent   hover:bg-transparent text-neutral-100"
            : " hover:bg-neutral-900  text-neutral-500 hover:text-neutral-100 "}`}
        onClick={toggleOpen}
      >
        {group.title}
        <span className="pl-2">{isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>
      </h2>


      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >

        {/* Sub navigation */}
        <div className="relative pl-2 mt-3">
          <AnimatePresence
            initial={!isInsideMobileNavigation}
          >
            {isActiveGroup && (
              <VisibleSectionHighlight
                group={group}
                pathname={router.pathname}
              />
            )}
          </AnimatePresence>
          <motion.div
            layout
            className="absolute inset-y-0 w-px left-2 bg-white/5 "
          />

          {/*Page marker left of the page title*/}
          <AnimatePresence initial={false}>
            {isActiveGroup && (
              <ActivePageMarker group={group} pathname={router.pathname} />
            )}
          </AnimatePresence>


          <ul role="list" className="border-l border-transparent">
            {group.links.map((link) => (
              <motion.li key={link.href} layout="position" className="relative">
                <NavLink href={link.href} active={link.href === router.pathname}>
                  {link.title}
                </NavLink>
                <AnimatePresence mode="popLayout" initial={false}>
                  {link.href === router.pathname && sections.length > 0 && (
                    <motion.ul
                      className="pt-1 pb-2"
                      role="list"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                    >
                      {sections.map((section) => (
                        <li key={section.id} >
                          <NavLink
                            href={`${link.href}#${section.id}`}
                            tag={section.tag}
                            isAnchorLink
                            secondLevel
                          >
                            {section.title}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Basics',
    links: [
      { title: 'Introduction', href: '/' },
      { title: 'Poker Scientist', href: '/poker-scientist' },
      { title: 'Principles of GTO', href: '/gto' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { title: 'Gameplan approach', href: '/gameplan-approach' },
      { title: 'Practice approach', href: '/practice-approach' },
      { title: 'Onboarding tours', href: '/onboarding' },
    ],
  },
  {
    title: 'Gameplan mode',
    links: [
      { title: 'Concepts', href: '/gameplan-concepts' },
      { title: 'Range vs. Range', href: '/range-vs-range' },
      { title: 'Matrix normalization', href: '/matrix-normalization' },
      { title: 'Equity toggle', href: '/equity-toggle' },
      { title: 'Made-hand distribution', href: '/mhd' },
      { title: 'Runout distribution graph', href: '/runout-distribution' },
      { title: 'Macro analysis', href: '/macro-analysis' },
      { title: 'Simplifier', href: '/simplifier' },
      { title: 'Runout clustering', href: '/runout-clustering' },
    ],
  },
  {
    title: 'Practice mode',
    links: [
      { title: 'Concepts', href: '/practice-concepts' },
      { title: 'Bot playstyles', href: '/bot-playstyles' },
      { title: 'Last vs. Best play', href: '/last-vs-best' },
      { title: 'Hand history', href: '/hand-history' },
      { title: 'Session overview', href: '/session-overview' },
      { title: 'Blunders', href: '/blunders' },
      { title: 'Statistics overview', href: '/statistics-overview' },
      { title: 'Spot selection', href: '/spot-selection' },
      { title: 'Mode switch', href: '/mode-switch' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { title: 'Hotkeys', href: '/hotkeys' },
      { title: 'Command menu', href: '/command-menu' },
      { title: 'Help sidebar', href: '/help-sidebar' },
      { title: 'Focus navigation', href: '/focus-navigation' },
    ],
  },
  {
    title: 'Account setup',
    links: [
      { title: 'Plans', href: '/plans' },
      { title: 'Payment methods', href: '/payments' },
      /*
    { title: 'Custom themes', href: '/themes' },
      */
    ],
  },
]

export function Navigation(props) {
  const [openGroup, setOpenGroup] = useState(null);

  const handleToggle = (groupTitle) => {
    setOpenGroup(openGroup === groupTitle ? null : groupTitle);
  };

  return (
    <nav {...props}>
      <ul role="list">
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            isOpen={openGroup === group.title}
            onToggle={handleToggle}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
