import Image from "next/image";

export function Logo(props) {
  return (
    <Image
      src="/poker-scientist.svg"
      alt="PS-logo"
      width={100}
      height={100}
      {...props}
    />
  )
}
