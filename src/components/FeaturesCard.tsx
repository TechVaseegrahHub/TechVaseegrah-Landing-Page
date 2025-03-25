import { twMerge } from "tailwind-merge";
export default function FeatureCard(props: { 
    title: string; 
    description: string; 
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <div className={twMerge("bg-white border border-black/10 p-6 rounded-3xl flex flex-col h-full", className)}>
            <div className="aspect-video">{children}</div>
            <div>
              <h3 className="section-title text-4xl mt-5">{title}</h3>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">{description}</p>
            </div>
          </div>
    );
}