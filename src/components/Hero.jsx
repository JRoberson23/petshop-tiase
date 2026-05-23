import PetAnimation from "./PetAnimation";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-pink-100 pt-10 md:pt-20 pb-1 text-center px-4">
            <h2 className="flex item-center justify-center gap-3 md:gap-5 mb-4">

                <div className="text-2xl md:text-5xl font-bold text-pink-600 leading-tight relative top-1 md:top-0">
                    <div>Banho e Tosa</div>
                    <div className="text-center">com Amor</div>
                </div>

                    <img
                        src="/images/img.png"
                        alt="Logo PetShop Tia Se"
                        className="w-20 sm:w-24 md:w-35 rounded-full animated-float relative -top-1"
                    />

            </h2>

            <p className="text-lg text-gray-800 mb-5 -top-2 relative">
                Cuidando do seu pet com carinho e dedicação.
            </p>

            <a
                href="https://wa.me/5511996721823?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet."
                target="_blank"
                title="Agendar banho e tosa pelo WhatsApp"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
                <FaWhatsapp className="text-2xl" />

                <span className="text-lg font-semibold">
                    Agendar pelo WhatsApp
                </span>

            </a>

            <PetAnimation />

        </section>
    );
}
