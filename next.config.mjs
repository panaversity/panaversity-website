/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: process.env.BASE_URL,
  //         },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET, POST, PUT, DELETE, OPTIONS',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value: 'Content-Type, Authorization',
  //         },
  //       ],
  //     },
  //   ]
  // },

  async redirects() {
    return [
      {
        source: '/announcements',
        destination: 'https://whatsapp.com/channel/0029ValzkrOJ93wMzwkBWl2r ',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
