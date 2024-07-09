import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image: "/product-teaser-headphones.jpg",
    title: "Headphones",
    href: "/shop/headphones",
    hrefLabel: "Shop",
  },
  {
    image: "/product-teaser-speaker.png",
    title: "Speaker",
    href: "/shop/speaker",
    hrefLabel: "Shop",
  },
  {
    image: "/product-teaser-earphones.png",
    title: "Earphones",
    href: "/shop/earphones",
    hrefLabel: "Shop",
  },
];

export default function HomeCategoryTeaser() {
  return (
    <section>
      <div className="mx-auto my-32 max-w-screen-xl px-4">
        <ul className="grid grid-cols-3 gap-8">
          {categories.map((category) => (
            <li key={category.href}>
              <div className="relative rounded-lg bg-app-neutral-50 p-8 pt-16 text-center">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={140}
                  height={160}
                  className="absolute -top-1/2 left-1/2 -translate-x-1/2 object-contain"
                  draggable={false}
                />
                <h6>{category.title}</h6>
                <Link
                  href={category.href}
                  className="sub-title inline-flex gap-2"
                >
                  {category.hrefLabel}
                  <span className="text-app-brown">&gt;</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
