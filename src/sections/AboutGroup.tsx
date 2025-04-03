import Image from "next/image";
import teamImage from "@/assets/teamphoto.jpeg";

export default function AboutGroup() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative w-full max-w-6xl rounded-xl overflow-hidden">
        <Image
          src={teamImage}  // Replace with the actual path to the image you want to use
          alt="Team"
          width={1200} // Width of the image
          height={500} // Height of the image
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
}