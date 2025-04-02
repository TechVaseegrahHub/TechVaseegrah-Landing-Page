import { twMerge } from "tailwind-merge";

export default function FeatureCard({
  title,
  description,
  button,
  children,
  className,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  button?: string;
}) {
  return (
    <div
      className={twMerge(
        "bg-white border border-black/10 p-6 rounded-3xl flex flex-col h-full",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div className="flex flex-col justify-between h-full">
        <h3 className="section-title text-4xl mt-5">{title}</h3>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">{description}</p>

        {/* Render Learn More Button if a button URL is passed */}
        {button && (
          <div className="flex justify-center mt-10 mb-6">
            <a
              href={button}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200h-12 px-4 py-2"
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </div>
  );
}



