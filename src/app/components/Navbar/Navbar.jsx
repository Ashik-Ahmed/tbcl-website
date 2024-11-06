"use client";

import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const dropdownTimeoutRef = useRef(null);
    const dropdownRef = useRef(null);

    // Menu items with selective dropdowns
    const menuItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Products',
            dropdown: [
                { label: 'Featured Products', href: '/products/featured' },
                { label: 'New Arrivals', href: '/products/new-arrivals' },
                { label: 'Best Sellers', href: '/products/best-sellers' },
                { label: 'Special Offers', href: '/products/special-offers' },
            ]
        },
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Solutions',
            dropdown: [
                { label: 'For Enterprise', href: '/solutions/for-enterprise' },
                { label: 'For Startups', href: '/solutions/for-startups' },
                { label: 'For Individuals', href: '/solutions/for-individuals' },
                { label: 'Case Studies', href: '/solutions/case-studies' },
            ]
        },
        {
            label: 'Contact',
            href: '/contact',
        }
    ];

    const handleMouseEnter = (index) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 100);
    };

    const handleMobileDropdownClick = (index) => {
        setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
    };

    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-900">Logo</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item?.dropdown ? (
                                    <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                                        {item.label}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                                    >
                                        {item.label}
                                    </a>
                                )}

                                {item.dropdown && activeDropdown === index && (
                                    <div
                                        ref={dropdownRef}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    >
                                        <div className="py-1">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {subItem?.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Sidebar */}
                    <div className="fixed inset-y-0 right-0 w-64 h-full bg-white shadow-xl">
                        <div className="flex justify-end p-4 bg-white">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="px-2 py-3 bg-white">
                            {menuItems.map((item, index) => (
                                <div key={index} className="space-y-1">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => handleMobileDropdownClick(index)}
                                                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                                            >
                                                {item.label}
                                                <ChevronRight
                                                    className={`h-4 w-4 transform transition-transform duration-200 
                                                    ${activeMobileDropdown === index ? 'rotate-90' : ''}`}
                                                />
                                            </button>
                                            {activeMobileDropdown === index && (
                                                <div className="pl-4 bg-white space-y-1">
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem?.href}
                                                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                                                        >
                                                            {subItem?.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={item?.href}
                                            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                                        >
                                            {item?.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

