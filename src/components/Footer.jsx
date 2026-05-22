import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import CatRelax from "./CatRelax";

export default function Footer() {
    return (
        <footer id="contato" className="bg-pink-600 text-white py-10 mt-10">
            <div className="text-center mb-4">
                <h3 className="text-3xl font-bold mb-2">
                    PetShop Tia Se
                </h3>

                <p className="text-lg text-pink-100">
                    Banho e Tosa com carinho 🐶😺
                </p>

                {/* Redes sociais */}
                <div className="flex justify-center gap-6 mt-6">
                    <a
                        href="https://www.instagram.com/banhoetosa_petshop/profilecard/?igsh=OG81ZTY5cXc5aGU0"
                        target="_blank"
                        className="relative -top-1 text-4xl hover:scale-110 hover:text-red-500 transition duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://wa.me/5511996721823?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet."
                        target="_blank"
                        className="relative -top-1 text-4xl hover:scale-110 hover:text-green-300 transition duration-300"
                    >
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Localização */}
                <div className="mt-4 text-center">
                    <a
                        href="https://www.google.com/maps/place/R.+Alfredo+Ometec%C3%ADdio,+560+-+Jardim+Sao+Jose,+S%C3%A3o+Paulo+-+SP,+05869-170/@-23.6789949,-46.7726917,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5248fb1fda5f:0xc8affdd8c2998828!8m2!3d-23.6789998!4d-46.7701168!16s%2Fg%2F11s63yp_xf?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="inline-block mt-1 text-white hover:text-pink-200 transition"
                    >
                        <p className=" mb-11 text-pink-100 font-semibold">
                            📍 Jardim São José • São Paulo - SP
                        </p>
                    </a>
                </div>

                {/* Animação do gato relaxando */}
                <div className="relative my-10 mb-8">
                    <div className="border-t border-pink-400 w-full"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 -top-16">
                    <CatRelax />
                    </div>
                </div>

                {/* Direitos autorais */}
                <p className="text-sm text-pink-100 mt-8">
                    &copy; 2026 PetShop Tia Se. Todos os direitos reservados.
                </p>

                {/* Desenvolvedor */}
                <div className="flex items-center justify-center gap-3 mt-8 md:mt-6">
                    <div className="text-left text-sm md:text-base text-pink-100 font-bold">
                        Desenvolvido por 
                    </div>

                    <a
                        href="https://roberson-dev.vercel.app/"
                        target="_blank"
                        className="hover:scale-105 transition duration-300"
                    >
                        <img
                            src="/images/logo-roberson.png"
                            alt="Logo Roberson Dev"
                            className="w-16 md:w-20 bg-white p-2 rounded-full shadow-lg hover:scale-105 transition duration-300"
                        />
                    </a>

                    <div className="text-left text-sm md:text-base text-pink-100 font-bold">
                        com 🖥️ e ☕
                    </div>
                                      
                </div>
                
                <div className="flex justify-center mt-1 ml-10">
                    <a
                        href="https://wa.me/5511950768793?text=Olá,%20adorei%20o%20trabalho%20no%20PetShop%20Tia%20Se.%20Gostaria%20de%20um%20orçamento."
                        target="_blank"
                        className="flex items-center gap-2 text-white hover:scale-105 transition duration-300"
                    >

                        <p className="text-sm md:text-base">
                            Fale comigo!
                        </p>

                        <FaWhatsapp className="text-2xl" />
                    </a>
                </div>

                

            </div>

        </footer>
    );
}