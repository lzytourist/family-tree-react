import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
    const res = await fetch('http://127.0.0.1:8000/api/auth/token/login', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(await request.json())
    })

    const data = await res.json()

    if (res.ok) {
        cookies().set({
            name: 'token',
            value: data.auth_token,
            httpOnly: true,
            path: '/'
        })

        const user = await fetch('http://127.0.0.1:8000/api/auth/users/me/', {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Token ${data.auth_token}`
            })
        })

        if (user.ok) {
            cookies().set({
                name: 'user',
                value: JSON.stringify(await user.json()),
                httpOnly: true,
                path: '/'
            })
        }
    }

    return NextResponse.json({
        ...data,
        auth_token: ''
    }, {
        status: res.status,
        statusText: res.statusText
    })
}