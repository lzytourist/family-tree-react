import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const res = await fetch('http://127.0.0.1:8000/api/auth/users/', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(await request.json())
    })

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText
    })
}