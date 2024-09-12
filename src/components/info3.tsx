// import image
import Image from "next/image";
import { Lexend_Deca } from "next/font/google"; // Import font
import { FiArrowRight } from "react-icons/fi"; // Import icon arrow

// Inisialisasi font Lexend Deca
const font = Lexend_Deca({ subsets: ['latin'], weight: '400' });

const Info3 = () => {
    return (
        <section className={`py-10 ${font.className}`}>
            <div className="container mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                    {/* Gambar berada di sebelah kiri artikel pada tampilan desktop dan di atas pada tampilan mobile */}
                    <div className="flex-shrink-0 lg:w-1/2">
                        <Image 
                            src="/infoimage3.svg" 
                            alt="Image" 
                            width={200} 
                            height={200} 
                            layout="responsive" 
                            className="rounded-lg"
                        />
                    </div>
                    
                    {/* Artikel berada di samping gambar pada tampilan desktop dan di bawah gambar pada tampilan mobile */}
                    <article className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-gray-800">
                            Chats for your distributed teams
                        </h2>
                        <p className="text-lg sm:text-xl mb-6 text-gray-600">
                            Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
                        </p>
                        <a 
                            href="#" 
                            className="text-purple-700 font-semibold flex items-center hover:text-purple-800 transition-all"
                            aria-label="Learn more about chats for your teams"
                        >
                            Learn More 
                            <FiArrowRight className="ml-2" />
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Info3;
