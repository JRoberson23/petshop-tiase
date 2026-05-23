"use client";

import { useState, useEffect, useRef } from "react";
import PawAnimation from "./PawAnimation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {

            if 
            (menuRef.current && !menuRef.current.contains(event.target)) 
                {
                    setIsMenuOpen(false);
                }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header id="inicio" 
            className="bg-pink-500 text-white px-4 py-3">
            <div className="flex items-center justify-between w-full gap-1 md:gap-2">

                {/* Nome do PetShop + pata descktop */}
                <div className="flex items-center gap-1">

                    <h1 className="text-2xl md:text-3xl font-bold">
                        PetShop Tia Se
                    </h1>

                    {/* Pata decorativa desktop */}
                    <div className="hidden md:block">
                        <PawAnimation />
                    </div>

                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-4">

                    {/* Navegação */}
                    <nav className="hidden md:flex items-center gap-6 font-semibold fixed top-2 right-1 z-[9997] bg-pink-500/50 px-6 py-3 rounded-full shadow-lg">

                        <a href="#inicio" className="hover:text-pink-200 transition">
                            Início
                        </a>

                        <a href="#servicos" className="hover:text-pink-200 transition">
                            Serviços
                        </a>

                        <a href="#galeria" className="hover:text-pink-200 transition">
                            Galeria
                        </a>

                        <a href="#sobre" className="hover:text-pink-200 transition">
                            Sobre
                        </a>

                        <a href="#contato" className="hover:text-pink-200 transition">
                            Contato
                        </a>

                    </nav>
                </div>

                {/* Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden fixed top-1 right-2 z-[9999] opacity-50 hover:opacity-100 transition duration-300"
                >
                    <PawAnimation />
                </button>

            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                
                <div ref={menuRef} className="md:hidden fixed top-12 right-3 z-[9999] flex flex-col gap-4 font-semibold bg-pink-400/60 p-4 rounded-xl shadow-xl">

                    <a href="#inicio"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-pink-200 transition"
                    >
                        Início
                    </a>

                    <a href="#servicos"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-pink-200 transition"
                    >
                        Serviços
                    </a>

                    <a href="#galeria"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-pink-200 transition"
                    >
                        Galeria
                    </a>

                    <a href="#sobre"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-pink-200 transition"
                    >
                        Sobre
                    </a>

                    <a href="#contato"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-pink-200 transition"
                    >
                        Contato
                    </a>

                </div>
            )}

        </header>
    );
}