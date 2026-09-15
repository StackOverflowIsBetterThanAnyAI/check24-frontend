'use client'

import Header from '@/app/components/Header'
import Ice from '@/app/components/Ice'

export default function Home() {
    return (
        <main className="flex flex-col gap-4">
            <Header />
            <Ice />
        </main>
    )
}
