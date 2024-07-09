import Logo from "@/components/atoms/logo";
import Link from "next/link";

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Headphones",
    href: "/headphones",
  },
  {
    title: "Speakers",
    href: "/speakers",
  },
  {
    title: "Earphones",
    href: "/earphones",
  },
];

export default function Header() {
  return (
    <header className="bg-app-neutral-900 px-4 text-white">
      <div className="relative mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 border-b border-b-neutral-700 bg-app-neutral-900 py-8">
        <Logo />
        <nav>
          <ul className="flex gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-wider text-white"
                  prefetch
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>Test</div>
      </div>
    </header>
  );
}
