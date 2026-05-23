/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove o header "x-powered-by"
  poweredByHeader: false,
  
  // Compressão para melhor performance
  compress: true,
  
  // Otimizações de imagem
  images: {
    domains: ['petshop-tiase.vercel.app'],
  },
};

export default nextConfig;