import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="flex min-h-[75svh] items-center gap-4 overflow-hidden bg-app-neutral-900 text-white">
      <div className="relative mx-auto flex w-full max-w-screen-xl items-center gap-4">
        <div className="w-full max-w-sm space-y-4">
          <h6>New Product</h6>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-app-brown px-8 py-4 text-white">
            See product
          </button>
        </div>

        <Image
          src="/xx99-mark-2-headphones.jpg"
          alt="XX99 Mark II Headphones"
          width={670}
          height={670}
          className="absolute right-0 top-1/2 max-w-screen-md -translate-y-1/2 object-contain"
          draggable={false}
        />
      </div>
    </section>
  );
}
