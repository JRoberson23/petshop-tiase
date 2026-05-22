export default function Services() {
    return (
        <section id="servicos" className="py-16 px-6 bg-pink-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-12">
                Nossos Serviços
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:translate-y3 hover:shadow-2xl transition duration-300">                    
                    <div className="text-5xl mb-4">
                        🛁
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-pink-600">
                        Banho Completo
                    </h3>

                    <p className="text-gray-700">
                        Higiene completa, limpeza de ouvidos, corte de unhas e todo o cuidado que seu pet merece.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:translate-y3 hover:shadow-2xl transition duration-300">
                    <div className="text-5xl mb-4">
                        ✂️
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-pink-600">
                        Tosa Profissional
                    </h3>

                    <p className="text-gray-700">
                        Tosa completa, tosa higiênica e remoção de nós para todas as raças.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:translate-y3 hover:shadow-2xl transition duration-300">
                    <div className="text-5xl mb-4">
                        🧴
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-pink-600">
                        Tratamentos Estéticos
                    </h3>
                    <p className="text-gray-700">
                        Hidratação, remoção de subpelos, tintura de pelos e cuidados especiais para realçar a beleza do seu pet.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:translate-y3 hover:shadow-2xl transition duration-300">
                    <div className="text-5xl mb-4">
                        🎀
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-pink-600">
                        Boutique Pet
                    </h3>
                    <p className="text-gray-700">
                        Penteados, laços, roupinhas e acessórios para realçar ainda mais a personalidade do seu pet.
                    </p>
                </div>

            </div>

        </section>
    );
}