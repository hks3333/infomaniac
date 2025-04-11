import Image from "next/image"

export default function LandView() {
    return (
        <div className="w-full h-full bg-red-500 flex flex-wrap">
            <div className="relative w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] min-w-[400px] bg-yellow-500 group overflow-hidden cursor-pointer border-dashed border-1">
                <Image src="/img1.jpg" alt="Land View" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 66vw" priority />

                {/* Overlay with fade-out on hover */}
                <div className="absolute inset-0 bg-[#DDA853] mix-blend-multiply opacity-100 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                {/* Text content */}
                <div className="absolute bottom-0 right-0 p-4 text-background text-right">
                    <h2 className="text-2xl sm:text-6xl font-della">Exploring Spanish Architecture</h2>
                    <br />
                    <p className="text-sm sm:text-lg font-open">A quick look at what makes Spain’s buildings so unique</p>
                </div>
            </div>

            <div className="min-w-[300px] h-1/4 bg-blue-500"></div>
        </div>
    )
}
