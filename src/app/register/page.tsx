'use client'

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import {useToast} from "@/components/ui/use-toast";

export default function Register() {
    const router = useRouter()
    const {toast} = useToast()

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
    })

    const handleInput = (e: FormEvent) => {
        e.preventDefault()

        // @ts-ignore
        const {name, value} = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(user)
        })

        if (res.ok) {
            toast({
                title: 'Congratulations!!',
                description: 'Registration has been successful. Login to continue.'
            })

            router.push('/login')
            return
        }

        console.log(await res.json())
    }

    return (
        <div className={'min-h-screen flex justify-center'}>
            <div className={'w-full lg:w-1/3'}>
                <Card className={'shadow-none border-0'}>
                    <CardHeader>
                        <CardTitle>Welcome to Family Tree</CardTitle>
                        <CardDescription>Create an account to create and store your family history.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="py-2">
                                <Label htmlFor={'first_name'}>First name</Label>
                                <Input onInput={handleInput} name={'first_name'} type={'text'} id={'first_name'} placeholder={'John'} />
                            </div>
                            <div className="py-2">
                                <Label htmlFor={'last_name'}>Last name</Label>
                                <Input onInput={handleInput} name={'last_name'} type={'text'} id={'last_name'} placeholder={'Doe'} />
                            </div>
                            <div className="py-2">
                                <Label htmlFor={'email'}>Email address</Label>
                                <Input onInput={handleInput} name={'email'} type={'email'} id={'email'} placeholder={'john@domain.com'} />
                            </div>
                            <div className="py-2">
                                <Label htmlFor={'username'}>Username</Label>
                                <Input onInput={handleInput} name={'username'} type={'text'} id={'username'} placeholder={'john'} />
                            </div>
                            <div className="py-2">
                                <Label htmlFor={'password'}>Password</Label>
                                <Input onInput={handleInput} name={'password'} type={'password'} id={'password'} placeholder={'******'} />
                            </div>
                            <div className="py-2">
                                <Label htmlFor={'confirm_password'}>Confirm Password</Label>
                                <Input onInput={handleInput} name={'confirm_password'} type={'password'} id={'confirm_password'} placeholder={'******'} />
                            </div>
                            <div className="py-2">
                                <Button type={'submit'}>Register</Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>Already have an account? <Link href={'/login'} className={'text-blue-500'}>Login here</Link></p>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}