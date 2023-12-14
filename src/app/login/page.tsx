'use client'

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {FormEvent, useState} from "react";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter()
    const {toast} = useToast()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e: FormEvent) => {
        e.preventDefault();

        // @ts-ignore
        const {name, value} = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (user.username === '' || user.password === '') {
            toast({
                title: 'All fields are required',
                variant: "destructive"
            })
            return
        }

        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })

        const data = await res.json()

        if (res.ok) {
            toast({
                title: 'Login successful',
            })
            router.push('/')
            return
        }

        if (res.status === 400) {
            console.log('Hit')
            toast({
                title: data?.non_field_errors[0] ?? res.statusText,
                variant: "destructive",
            })
        }
    }

    return (
        <div className={'h-screen flex items-center justify-center'}>
            <div className={'w-full lg:w-4/12 p-8'}>
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome back to Family Tree</CardTitle>
                        <CardDescription>Login to access your family history</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="py-2">
                                <Label htmlFor={'username'}>Username</Label>
                                <Input onInput={handleInput} name={'username'} type={'text'} id={'username'} placeholder={'john'} />
                            </div>
                            <div className="py-2">
                                <Label htmlFor={'password'}>Password</Label>
                                <Input onInput={handleInput} name={'password'} type={'password'} id={'password'} placeholder={'******'} />
                            </div>
                            <div className="py-2">
                                <Button type={'submit'}>Login</Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>Does not have an account? <Link href={'/register'} className={'text-blue-500'}>Register
                            here</Link></p>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}