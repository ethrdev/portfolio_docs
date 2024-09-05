import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "../primitives/dialog";
import * as DialogPrimitive from '@radix-ui/react-dialog';


const modes = [
    {
        href: '/modes',
        name: 'Modes',
        description: 'Learn how to authenticate your API requests.',
    },
]

export function RangeVsRange() {
    return (

        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full p-0.5  my-12 from-amber-500 to-fuchsia-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/rangevsrange.png"
                            alt="Range versus Range"
                            width={911}
                            height={937} />
                    </div>
                </DialogTrigger>
                <DialogContent className="mt-12 flex items-center justify-start flex-row bg-gradient-to-r w-[1826px] max-h-[1878px] p-0.5 mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/rangevsrange.png"
                            alt="Range versus Range"
                            width={1822}
                            height={1874} />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5  mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/rangevsrange.png"
                    alt="Range versus Range"
                    width={911}
                    height={937} />
            </div>
        </>
    )
}

export function MHD() {
    return (
        <div className="flex flex-row justify-start md:justify-center items-center p-0.5 my-12 rounded-md w-[206px] h-[324px] bg-gradient-to-r from-amber-500 to-fuchsia-500">
            <Image
                className="rounded-md"
                src="/mhd-draws.png"
                alt="MHD"
                width={202}
                height={320}
            />
        </div>
    )
}

export function RunoutDistribution() {
    return (
        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full p-0.5  my-12 from-amber-500 to-fuchsia-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/runouts.png"
                            alt="Round Distribution"
                            width={1856}
                            height={533}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="flex my-[25vh] items-center justify-start flex-row bg-gradient-to-r cursor-zoom-out max-h-full h-[537px] w-[1860px] p-0.5 from-amber-500 to-fuchsia-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/runouts.png"
                            alt="Round Distribution"
                            width={1856}
                            height={533}
                        />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5 mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/runouts.png"
                    alt="Round Distribution"
                    width={1856}
                    height={533}
                />
            </div>
        </>
    )
}

export function MacroAnalysis() {
    return (
        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full p-0.5  my-12 from-amber-500 to-fuchsia-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/macro.png"
                            alt="Macro Analysis"
                            width={1873}
                            height={588}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="flex my-[25vh] items-center justify-start flex-row bg-gradient-to-r cursor-zoom-out max-h-full h-[592px] w-[1877px] p-0.5 from-amber-500 to-fuchsia-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/macro.png"
                            alt="Macro Analysis"
                            width={1873}
                            height={588}
                        />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5  mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/macro.png"
                    alt="Macro Analysis"
                    width={1873}
                    height={588}
                />
            </div>
        </>
    )
}

export function EquityToggle() {
    return (
        <div className='flex flex-row gap-2'>
            <div className="bg-gradient-to-r w-full p-0.5 mb-12 from-gray-500 to-[#757575] rounded-md">
                <Image
                    className="rounded-md"
                    src="/matrix1.png"
                    alt="Matrix Strategy"
                    width={569}
                    height={570}
                />
            </div>
            <div className="bg-gradient-to-r w-full p-0.5 mb-12 from-[#757575] to-gray-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/matrix2.png"
                    alt="Matrix Equity"
                    width={567}
                    height={567}
                />
            </div>
        </div>
    )
}

export function Simplifier() {
    return (

        <div className="flex justify-start items-center bg-gradient-to-r w-[208px] h-[193px] p-0.5 mb-12 from-amber-500 to-fuchsia-500 rounded-md">
            <Image
                className="rounded-md"
                src="/simplifier.png"
                alt="Simplifier"
                width={204}
                height={189}
            />
        </div>
    )
}

export function SimplifierExampleOne() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="bg-gradient-to-r w-[390px] max-h-[345px] p-0.5 mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/simplifier-example-1.png"
                    alt="Simplifier Example 1"
                    width={783}
                    height={693}
                />
            </div>
        </div>
    )
}

export function SimplifierExampleTwo() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="bg-gradient-to-r w-[390px] max-h-[345px] p-0.5 mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/simplifier-example-2.png"
                    alt="Simplifier Example 2"
                    width={780}
                    height={690}
                />
            </div>
        </div>
    )
}

export function ClusteringHigh() {
    return (
        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full p-0.5  mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/clustering-high.png"
                            alt="Clustering High"
                            width={1818}
                            height={572}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="flex my-[25vh] items-center justify-start flex-row bg-gradient-to-r cursor-zoom-out max-h-full h-[576px] w-[1822px] p-0.5 from-amber-500 to-fuchsia-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/clustering-high.png"
                            alt="Clustering High"
                            width={1818}
                            height={572}
                        />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5  mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/clustering-high.png"
                    alt="Clustering High"
                    width={1818}
                    height={572}
                />
            </div>
        </>
    )
}

export function ClusteringMiddle() {
    return (

        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full p-0.5  mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/clustering-middle.png"
                            alt="Clustering Middle"
                            width={1813}
                            height={819}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="flex mt-[10vh] items-center justify-start flex-row bg-gradient-to-r cursor-zoom-out max-h-full h-[823px] w-[1817px] p-0.5 from-amber-500 to-fuchsia-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/clustering-middle.png"
                            alt="Clustering Middle"
                            width={1813}
                            height={819}
                        />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5  mb-12 from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/clustering-middle.png"
                    alt="Clustering Middle"
                    width={1813}
                    height={819}
                />
            </div>
        </>
    )
}

export function ClusteringLow() {
    return (

        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full mb-6 p-0.5  from-amber-500 to-fuchsia-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/clustering-low.png"
                            alt="Clustering Low"
                            width={1804}
                            height={819}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="flex mt-[10vh] items-center justify-start flex-row bg-gradient-to-r cursor-zoom-out max-h-full h-[823px] w-[1808px] p-0.5 from-amber-500 to-fuchsia-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/clustering-low.png"
                            alt="Clustering Low"
                            width={1804}
                            height={819}
                        />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5  from-amber-500 to-fuchsia-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/clustering-low.png"
                    alt="Clustering Low"
                    width={1804}
                    height={819}
                />
            </div>
        </>
    )
}


export function PracticeMode() {
    return (
        <>
            <Dialog className="hidden lg:block">
                <DialogTrigger className="hidden lg:block">
                    <div className="bg-gradient-to-r cursor-zoom-in w-full p-0.5 mb-12 mt-8  from-teal-500 to-blue-500 rounded-md">
                        <Image
                            className="rounded-md"
                            src="/practice-mode.png"
                            alt="Practice Mode"
                            width={1917}
                            height={920}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="flex mt-[10vh] items-center justify-start flex-row bg-gradient-to-r cursor-zoom-out max-h-full h-[676px] w-[1400px] p-0.5 from-teal-500 to-blue-500 rounded-md">
                    <DialogPrimitive.Close className="cursor-zoom-out" aria-label="Close">
                        <Image
                            className="rounded-md"
                            src="/practice-mode.png"
                            alt="Practice Mode"
                            width={1917}
                            height={920}
                        />
                    </DialogPrimitive.Close>
                </DialogContent>
            </Dialog>
            <div className="md:hidden bg-gradient-to-r cursor-zoom-in w-full p-0.5  from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/practice-mode.png"
                    alt="Practice Mode"
                    width={1917}
                    height={920}
                />
            </div>
        </>
    )
}


export function LastVsBest() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex justify-start flex-row w-[305px] h-[152px] my-6 items-center bg-gradient-to-r p-0.5 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/lastvsbest-1.png"
                    alt="Last vs Best"
                    width={301}
                    height={148}
                />
            </div>
        </div>
    )
}

export function BotStyles() {
    return (
        <div className="flex w-[295px] h-[69px] items-center bg-gradient-to-r p-0.5 mb-12 from-teal-500 to-blue-500 rounded-md">
            <Image
                className="rounded-md"
                src="/bot-styles.png"
                alt="Last vs Best"
                width={291}
                height={65}
            />
        </div>
    )
}

export function BlunderMessage() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-[216px] h-[127px] md:w-[431px] md:h-[253px] justify-start my-12 items-center bg-gradient-to-r p-0.5 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/blunder-message.png"
                    alt="Blunder Message"
                    width={427}
                    height={249}
                />
            </div>
        </div>
    )
}

export function HandHistory() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-[289px] h-[521px] items-center bg-gradient-to-r p-0.5 my-12 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/handhistory.png"
                    alt="Hand History"
                    width={285}
                    height={517}
                />
            </div>
        </div>
    )
}

export function SessionStats() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-[285px] h-[159px] items-center bg-gradient-to-r  my-12 p-0.5 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/session-stats.png"
                    alt="Session Stats"
                    width={281}
                    height={155}
                />
            </div>
        </div>
    )
}

export function CommandMenu() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-[604px] h-[442px] items-center bg-gradient-to-r p-0.5 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/command-menu.png"
                    alt="Command menu"
                    width={600}
                    height={438}
                />
            </div>
        </div>
    )
}

export function HelpSidebar() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-[190px] h-[486px] items-center bg-gradient-to-r my-6 p-0.5 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md w-[190px]"
                    src="/help-sidebar_01.png"
                    alt="Help sidebar"
                    width={380}
                    height={986}
                />
            </div>
        </div>
    )
}


export function Images() {
    return (
        <div className="my-16 xl:max-w-none">
            <Heading className="text-white " level={2} id="guides">
                Modes
            </Heading>
            <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-white/5 sm:grid-cols-2 xl:grid-cols-4">
                {modes.map((mode) => (
                    <div key={mode.href}>
                        <h3 className="text-sm font-semibold text-white">
                            {mode.name}
                        </h3>
                        <p className="mt-1 text-sm  text-[#757575]">
                            {mode.description}
                        </p>
                        <p className="mt-4">
                            <Button href={mode.href} variant="text" arrow="right">
                                Read more
                            </Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Dark() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/dark-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Darker() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/darker-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Dracula() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/dracula-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Edge() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/edge-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Everforest() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/everforest-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Gruvbox() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/gruvbox-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Iceberg() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/iceberg-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}


export function Nord() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/nord-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Poimandres() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/poimandres-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Spacegrey() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/spacegrey-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Synthwave() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/synthwave-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function TokyoNight() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/tokyo-night-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Vesper() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r my-6 p-0.5 from-neutral-700 to-neutral-800 rounded-md">
                <Image
                    className="w-full rounded-md"
                    src="/themes/vesper-theme.png"
                    alt="Help sidebar"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}

export function Pricing() {
    return (
        <div className="flex flex-row items-center justify-start w-full ">
            <div className="flex w-full items-center bg-gradient-to-r p-0.5 from-teal-500 to-blue-500 rounded-md">
                <Image
                    className="rounded-md"
                    src="/pricing.png"
                    alt="Command menu"
                    width={1080}
                    height={800}
                />
            </div>
        </div>
    )
}