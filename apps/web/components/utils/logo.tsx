import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="inline-block" href="/">
      {/* Light mode logo */}
      <Image
        alt="Logo of Cole CPA Group"
        className="block dark:hidden"
        height={50}
        priority
        src="/img/logos/colecpa-logo-blue.svg"
        width={150}
      />
      {/* Dark mode logo */}
      <Image
        alt="Logo of Cole CPA Group"
        className="hidden dark:block"
        height={50}
        priority
        src="/img/logos/colecpa-logo-white.svg"
        width={150}
      />
    </Link>
  );
}
