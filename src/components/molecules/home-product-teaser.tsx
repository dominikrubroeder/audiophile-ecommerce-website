import Image from "next/image";
import AnimateAppearance from "@/components/atoms/animate-appearance";

export default function HomeProductTeaser() {
  return (
    <div className="space-y-8">
      <AnimateAppearance>
        <ProductTeaserBlock />
      </AnimateAppearance>

      <AnimateAppearance>
        <ProductTeaserRow />
      </AnimateAppearance>

      <ProductTeaserTwoColumn />
    </div>
  );
}

function ProductTeaserBlock() {
  return (
    <div className="relative mx-auto flex max-w-screen-xl items-center justify-center rounded-lg bg-app-brown">
      <Image
        width={410}
        height={493}
        src="/speaker-zx9.png"
        alt="Speaker zx9"
      />

      <div className="max-w-sm space-y-6">
        <h2>ZX9 Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black px-8 py-4 text-xs uppercase tracking-[1px] text-white">
          See Product
        </button>
      </div>
    </div>
  );
}

function ProductTeaserRow() {
  return (
    <div className="relative mx-auto flex h-[20rem] max-w-screen-xl items-center overflow-hidden rounded-lg bg-app-neutral-50 text-left">
      <Image
        src="/speaker-zx7.jpg"
        alt="Speaker zx7"
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />

      <div className="relative z-10 max-w-sm space-y-8 pl-24">
        <h4>ZX7 Speaker</h4>
        <button className="border border-black px-8 py-4 text-xs uppercase tracking-[1px] text-black">
          See Product
        </button>
      </div>
    </div>
  );
}

function ProductTeaserTwoColumn() {
  return (
    <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-2">
      <AnimateAppearance>
        <div className="relative h-[20rem] overflow-hidden rounded-md bg-app-neutral-100 p-8">
          <Image
            src="/earphones-yx1.jpg"
            alt="Earphones-yx1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </AnimateAppearance>

      <AnimateAppearance>
        <div className="flex h-[20rem] flex-col items-center justify-center space-y-8 rounded-md bg-app-neutral-100 p-8">
          <h4>YX1 Earphones</h4>
          <button className="border border-black px-8 py-4 text-xs uppercase tracking-[1px] text-black">
            See Product
          </button>
        </div>
      </AnimateAppearance>
    </div>
  );
}
