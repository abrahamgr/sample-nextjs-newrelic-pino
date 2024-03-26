/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    if (config.target.includes('node')) {
      config.externals.push('pino')
    }
    return config
  }
}

export default nextConfig
