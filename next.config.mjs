/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/(pages)/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
