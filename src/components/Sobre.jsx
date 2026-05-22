export default function Sobre() {
    return (
        <section
            id="sobre"
            className="py-16 px-6 bg-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">
                🐾 Sobre o PetShop Tia Se
            </h2>

            <div className="max-w-4xl mx-auto flex-col items-center gap-8">

                {/* Texto */}
                <div className="text-gray-700 text-lg leading-relaxed text-center">
                    <p className="mb-4">
                        Há anos cuidando dos pets com dedicação e muito carinho,
                        o <strong>PetShop Tia Se</strong> oferece serviços completos
                        de banho, tosa, hidratação e estética animal.
                    </p>
                    <p className="mb-4">
                        Meu compromisso é garantir conforto, segurança e
                        bem-estar em cada atendimento, sempre respeitando as
                        necessidades de cada pet.
                    </p>
                </div>
                
                <div className="text-center">
                    <div className="inline-block bg-pink-100 text-pink-700 px-6 py-3 rounded-full font-semibold">
                        ❤️ Cuidando do seu pet com amor, carinho e dedicação.
                    </div>
                </div>
                
                {/* Video */}
                <div className="flex justify-center">

                <video
                    controls
                    muted
                    className="
                        w-full
                        max-w-md
                        rounded-3xl
                        shadow-xl
                    "
                >
                    <source src="/videos/banho-pet.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>

                </div>

            </div>
        </section>
    );
}