import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Family Tree',
    description: 'Know your roots',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className + ' bg-gray-50'}>
        {children}
        <Toaster/>
        </body>
        </html>
    )
}
