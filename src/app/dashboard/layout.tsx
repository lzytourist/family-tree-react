'use client'

import Navigation from "@/components/Navigation";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main>{children}</main>
        </>
    )
}