import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Transbangla Commodities Limited</h2>
                        <p className="text-gray-400">We Are Leading with Trust – With a Legacy of Dependability at Home and Overseas</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                            <li><Link href="/our-path-forward/about" className="hover:text-gray-300 transition-colors">About</Link></li>
                            <li><Link href="/expertise" className="hover:text-gray-300 transition-colors">Our Expertise</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">BTMC Bhaban (7th Floor)</p>
                        <p className="text-gray-400">7-9 Kawran Bazar, Dhaka-1207</p>
                        <p className="text-gray-400">Phone: +880-2-55013774, +880-2-55013778</p>
                        <p className="text-gray-400">Email: info@tbcl.com.bd</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Facebook className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Twitter className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p className='text-xs'>&copy; {new Date().getFullYear()} Transbangla Commodities Ltd. All rights reserved.</p>
                </div>

                <div className='w-full py-2'>
                    <p className='text-gray-400 text-center text-xs font-light italic'>Developed by <Link href="https://lamdatelecombd.com/" target="_blank" className='underline'>Lamda Telecom</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer