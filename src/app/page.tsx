import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cookies} from "next/headers";

export default function Home() {

    return (
        <div className={'min-h-screen flex items-center text-center'}>
            <div>
                <Image className={'mx-auto py-6'} src={'/logo-color.png'} alt={'Logo'} width={200} height={80} />
                <h1 className={'text-4xl font-light'}>Family Tree</h1>
                <blockquote className={'font-bold text-gray-600 p-6'}>Discover your roots, one branch at a time with
                    GenerationsForge.
                </blockquote>
                <p className={'px-8'}>GenerationsForge is your virtual family archive. Seamlessly capture and cherish
                    each family member&apos;s
                    unique story with detailed person profiles. Uncover the tapestry of your heritage, weaving
                    connections across generations.</p>

                <Button asChild className={'mt-8'}>
                    {
                        !cookies().has('token') ?
                            <Link href={'/register'}>Join to create your family tree</Link> :
                            <Link href={'/dashboard'}>Goto dashboard</Link>
                    }
                </Button>
            </div>
        </div>
    )
}
