
import React from 'react';
import Image from 'next/image';
import YearlyDemandBarChart from '../components/Charts/YearlyDemandChart';
import ProductWiseSupplyChart from '../components/Charts/ProductWiseSupplyChart';
import FuelImportIPPChart from '../components/Charts/FuelImportIPPChart';

const Expertise = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Expertise
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                    <div className='max-w-5xl'>
                        <p className='text-white'>At Transbangla Commodities, we transform trades into seamless solutions, being a bridge among industries with expertly tailored services. From powering energy needs to navigating logistics, our concentration is on fueling the sustainable growth of Bangladesh and global trade.</p>
                    </div>
                </div>
            </section>
            <section id="facilitation-and-business-advisory" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Facilitation & Business Advisory
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Being the bridge between overseas suppliers and regional industries, we facilitate businesses with precision and insights. Our expertise in trade and shipping empowers our clients to navigate into the markets seamlessly, while our advisory solutions are tailored to support strategic decision-making and sustainable growth. Providing end-to-end guidance in versatile sectors, especially in energy commodities— oil, gas, and renewable energy; we excel in risk management, trading essential goods and understanding market anatomy.
                    </p>
                </div>
            </section>
            <section id="business-development" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Business Development
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        In the competitive energy sector, we are one of the reliable resources, and our core focus is on petroleum finished products and power generation. Providing our forces with government agencies, notably Bangladesh Petroleum Corporation (BPC), we are one of the pioneers in the market for importing and distributing energy solutions. With our international supplier affiliations, we focus on fulfilling the demand proportion set by BPC every year regarding petroleum finished products.
                    </p>

                    <div className='ml-4 mt-4'>
                        <h3 className='text-2xl font-bold'>A. Mitigating the Demand & Supply of Petroleum Finished Products</h3>
                        <p className='mt-4 text-gray-700'>
                            The primary day-to-day concentration of Transbangla Commodities is to navigate Bangladesh&apos;s fast-growing energy market, meeting around 85% of the country&apos;s demand for petroleum finished products through our affiliated international suppliers. With national demand for fuels, notably Gasoil, Jet Fuel, HSFO, and Mogas, which are consistently rising, we leverage the infrastructure and expertise to ensure flawless distribution and availability across Bangladesh.
                        </p>
                        <div className="w-full mx-auto py-8">
                            {/* <Image src="/expertise/expertise-1.png" alt="Petroleum Finished Products"
                                width={500}
                                height={500}
                                className='mt-4 mx-auto' /> */}

                            <div className='md:p-4 md:border '>
                                <YearlyDemandBarChart />
                            </div>

                            {/* <p className='italic mt-2 text-sm text-center'>Figure: Demand Trend of Finished Petroleum Products [Qty. in Metric Ton]</p> */}
                        </div>
                        <p className='mt-4 text-gray-700'>
                            Since 2008, we have led the way in importing and distributing finished petroleum products from international suppliers (shown by our consistent supply trend across Gasoil, Jet A-1, HSFO, and more). This robust track record highlights our ability to adapt and thrive in a dynamic market, providing stability and coherence to international entities. Collaborate with us to be part of Bangladesh&apos;s expanding energy landscape, where we bring regional expertise, logistical precision, and an unwavering commitment to operational excellence.
                        </p>
                        <div className="w-full mx-auto py-8">
                            {/* <Image src="/expertise/expertise-2.png" alt="Petroleum Finished Products"
                                width={500}
                                height={500}
                                className='mt-4 mx-auto' />
                            <p className='italic mt-2 text-sm text-center'>Fig: Supply Trends by Product Through Transbangla Commodities Ltd. [Qty. in Metric Ton]</p> */}
                            <div className="md:p-4 md:border">
                                <ProductWiseSupplyChart />
                            </div>
                        </div>
                    </div>
                    <div className='ml-4 mt-4'>
                        <h3 className='text-2xl font-bold'>B. Contribution to Power Generation </h3>
                        <h4 className='mt-4 ml-2 text-xl font-semibold'>i) Fuel Oil Import by IPP</h4>
                        <p className='mt-2 ml-4 text-gray-700'>
                            To make an impact in Bangladesh’s electricity generation sector, we are one of the leaders who ensure steady supplies and meet the country’s growing electricity demands.
                            Fuel oil plays a crucial role in Bangladesh&apo;s power generation landscape, standing as a critical resource alongside gas, coal, and HSD to meet the nation’s growing energy needs. The primary import—HSFO 180 CST—has steadily increased in volume over recent years, driven by the surging demand for electricity.
                        </p>
                        <p className="mt-2 ml-4 text-gray-700">
                            Currently, 61 fuel oil-based power plants are operational, contributing an impressive 6141 MW, which accounts for 22.7% of the national power generation capacity and around 20% of the country&apos;s daily power supply.
                        </p>
                        <p className="mt-2 ml-4 text-gray-700">
                            Since private companies own most of these plants, the import volume for privately managed facilities significantly surpasses that of state-owned plants. Transbangla Commodities and its sister concern work closely with private power providers in partnership with reputable international suppliers, supplying high-quality fuel oil and offering industry insights to support operational efficiency and business growth across Bangladesh&apos;s energy sector.
                        </p>
                        <div className="w-full mx-auto py-8">
                            {/* <Image src="/expertise/expertise-2.png" alt="Petroleum Finished Products"
                                width={500}
                                height={500}
                                className='mt-4 mx-auto' />
                            <p className='italic mt-2 text-sm text-center'>Figure: Fuel Oil Import Trend [Qty. in Metric Ton]</p> */}
                            <div className='md:p-4 md:border'>
                                <FuelImportIPPChart />
                            </div>
                        </div>
                        <h4 className='mt-4 text-xl font-semibold'>ii) Coal Import and Our Strategic Way Forward</h4>
                        <p className='mt-2 ml-4 text-gray-700'>
                            Coal is a vital resource in Bangladesh&apos;s energy sector, powering a significant portion of the nation&apos;s electricity generation. With a total capacity of 27,476 MW, coal contributes 7,000 MW—about 19% of the overall supply. The demand for coal is growing steadily, reflected in its rising contribution to power generation, from 7.88% in 2022 to 22.33% in 2024.
                        </p>
                        <p className="mt-2 ml-4 text-gray-700">
                            A range of power plants across the country rely on coal, with notable facilities including:
                            <ul className="list-disc ml-8 mt-2">
                                <li>SS Power, Unit-1 (Private, 1224 MW)</li>
                                <li>Matarbari Coal Power Plant (Public, 1150 MW)</li>
                                <li>Maitree Super Thermal Power, Unit-1 (Joint Venture, 1234 MW)</li>
                                <li>Payra Thermal Power Plant (Joint Venture, 1244 MW)</li>
                                <li>Rampal Power Plant (Joint Venture, 1320 MW)</li>
                                <li>Barishal Coal Power Plant (Private 307 MW)</li>
                                <li>Barapukuria TPP, Unit- 1 & Unit- 2 (Public, 125 MW)</li>
                                <li>Barapukuria TPP, Unit- 3 (Public, 274 MW)</li>
                            </ul>
                        </p>
                        <p className="mt-2 ml-4 text-gray-700">
                            At Transbangla Commodities, we and our sister concerns are paving the way to establish a strong presence in coal import and trading with a commitment to addressing Bangladesh’s growing coal demand. Through our strategic business advisory approach, we are taking the first steps by collaborating with the internationally renowned company White Horse Coal Ltd. to bring innovation and a seamless coal supply chain to the country.
                        </p>
                    </div>
                </div>
            </section>
            <section id="condensate-and-naphtha-export" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Condensate & Naphtha Export
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        In the past, we actively managed and ensured the export of high-quality condensate and naphtha, leveraging our extensive oil and gas trading expertise. We successfully assisted with exports to Projector Asia Pte Ltd., Singapore (2006–2008) and Oilive Asia Pte Ltd., Singapore (2008–2016). With the right opportunity, we&apos;re prepared to bring our proven capabilities back into action and support future export endeavors.
                    </p>
                </div>
            </section>
            <section id="fleet-management" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Fleet Management
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Our fleet management service ensures vessels&apos; secure and efficient movement across multiple routes, from data management to meticulous route planning. Prioritizing safety, punctuality, and streamlined logistics, we perfectly oversee every detail. By monitoring and analyzing comprehensive data, we empower our regional and global partners, fostering seamless connectivity and reliable growth when trading through ships.
                    </p>
                </div>
            </section>
            <section id="agent-management" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Agent Management
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        We monitor and advise on shipping operations by closely coordinating with trusted local agents across ports. Our partner agents handle essential tasks on our behalf in compliance with local regulations. Throughout the decades, we have upheld high service standards through our partner agents, streamlining logistics and maintaining smooth, efficient operations for our clients—ensuring that shipments move without any obstacles from one place to another.
                    </p>
                </div>
            </section>
            <section id="shipping-services" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Shipping Services
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        With one of our sister concerns, we provide end-to-end shipping support for customs handling and documentation. Specializing in shipping management, we guarantee safe cargo transfer offshore, backed by fender services to maintain stability and prevent vessel damage. With our expertise in this sector, we oversee the entire discharge operation to mitigate shortage and pilferage.
                    </p>
                </div>
            </section>
            <section id="fender-service" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Fender Service
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        With this service, we offer high-quality vessel protection to ensure safe docking and transfer operations. We provide specialized fenders that reduce the risk of damage during critical offshore and port activities. We have become proficient in fendering for smooth, secure handling of vessels in complex settings, prioritizing safety and operational efficiency. Our time is dedicated to delivering reliable, expertly managed fender solutions that international entities can depend on.
                    </p>
                </div>
            </section>
            <section id="lightering-operation" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Lightering Operation
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        At Transbangla, we expertly facilitate Lightering Operations for safe and efficient offshore cargo transfers from larger vessels to smaller ones. Our team ensures that each transfer minimizes draught challenges, allowing larger ships to reach ports with drought restrictions.
                    </p>
                </div>
            </section>
            <section id="cargo-discharge" className="max-w-5xl mx-auto py-8 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Process Optimization in Cargo Discharge Operation
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Our specialization also falls under Cargo Discharge Operations, in which we work to efficiently transfer goods from large tankers anchored offshore to onshore storage. Our approach enables government entities such as BPC to discharge larger volumes quickly, cutting typical offloading times and increasing annual discharge capacity. With this optimized process, we support safe, cost-effective cargo discharge solutions.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Expertise;