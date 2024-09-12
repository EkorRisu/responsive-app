// import image
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Import icon arrow
import { Lexend_Deca } from "next/font/google";//import font

// Inisiasi font Lexend Deca
const font = Lexend_Deca({ subsets: ['latin'], weight: '400' });

const Mockup = () => {
    return (
        <section className={`py-10 ${font.className}`}>
            <div className="container mx-auto px-4 xl:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Gambar berada di atas pada tampilan mobile dan di samping kanan pada tampilan desktop */}
                    <div className="order-1 lg:order-2">
                        <Image 
                            src="/mockup.svg" 
                            alt="Mockup illustration" 
                            width={1050} 
                            height={654} 
                            layout="responsive" 
                            className="rounded-lg"
                        />
                    </div>
                    
                    {/* Artikel berada di samping gambar pada tampilan desktop */}
                    <article className="order-2 lg:order-1">
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

export default Mockup;
