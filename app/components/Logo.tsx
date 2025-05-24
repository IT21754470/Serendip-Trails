import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20">
      <Image
        src="/images/trp-logo.png"
        alt="TRP Organization Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
} 