// const withMDX = require('@next/mdx')()
import withMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// module.exports = withMDX(nextConfig)

const newWithMDX = withMDX()

export default newWithMDX(nextConfig)
