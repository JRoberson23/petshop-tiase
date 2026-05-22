import { FaWhatsapp } from "react-icons/fa";

export default function Gallery() {
    return (
        <section id="galeria" className="bg-pink-50 py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink mb-12">
                🐾 Galeria
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <img
                    src="/images/foto-1.jpeg"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-2.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-3.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-4.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-5.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-6.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-7.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-8.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-9.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-10.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-11.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

                <img
                    src="/images/foto-12.png"
                    alt="PetShop Tia Se"
                    className="w-full h-150 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />

            </div>
            
            <div className="mt-16 text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
                    Gostou do nosso trabalho? 🐾
                </h3>

                <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
                    Agende um horário pelo WhatsApp e proporcione ao seu pet um atendimento cheio de carinho e cuidado.
                </p>

                <a
                href="https://wa.me/5511996721823?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet."
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
                >
                    <FaWhatsapp className="text-2xl" />

                    <span className="text-lg font-semibold">
                        Agendar pelo WhatsApp
                    </span>

                </a>

            </div>


        </section>
    );
}
