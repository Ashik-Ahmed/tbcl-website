"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Script from 'next/script'

export default function EnhancedContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="min-h-screen">
            <div className=''>
                {/* Hero Section */}
                <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                    <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get in Touch
                        </h1>
                        <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                        <div className='max-w-5xl'>
                            <p className='text-white'>We&apos;re here to help and answer any question you might have.

                            </p>
                        </div>
                    </div>
                </section>

                <div className="container max-w-7xl mx-auto my-16 lg:mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 border">
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                                <dl className="space-y-8">
                                    <div className="flex items-start">
                                        <MapPin className="h-8 w-8 text-blue-600 mr-4" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium text-gray-900">Address</dt>
                                            <dd className="mt-1 text-gray-500">BTMC Bhaban (7th Floor), 7-9 Kawran Bazar, Dhaka-1207</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-8 w-8 text-blue-600 mr-4" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium text-gray-900">Phone</dt>
                                            <dd className="mt-1 text-gray-500">+880-2-8189244, +880-2-8189321, +880-2-58155623</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="h-8 w-8 text-blue-600 mr-4" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium text-gray-900">Email</dt>
                                            <dd className="mt-1 text-gray-500">info@tbcl.com.bd</dd>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="h-8 w-8 text-blue-600 mr-4" aria-hidden="true" />
                                        <div>
                                            <dt className="font-medium text-gray-900">Hours</dt>
                                            <dd className="mt-1 text-gray-500">
                                                Sunday-Thursday: 9AM - 5PM<br />
                                                Friday-Saturday: Closed
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <div className="bg-gray-50 px-8 py-10">
                                <div className="h-96 rounded-2xl overflow-hidden shadow-inner">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8979324365014!2d90.39134737410039!3d23.751018888754892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8980228f911%3A0x479041331b0c122f!2sTransbangla%20Commodities%20LTD%20(TBCL)!5e0!3m2!1sen!2sbd!4v1731558484758!5m2!1sen!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 border overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="mt-1 py-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 py-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            <Send className="h-5 w-5 mr-2" />
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`}
                strategy="lazyOnload"
            />
        </div >
    )
}