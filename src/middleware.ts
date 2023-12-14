import {NextRequest, NextResponse} from "next/server";
import {log} from "util";

export default function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/_next')) {
        return NextResponse.next()
    }

    const url = request.nextUrl.pathname;

    if (request.cookies.has('token')) {
        if (url.startsWith('/login') || url.startsWith('/register')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    } else if (
        url.startsWith('/login') || url.startsWith('/register') ||
        url.startsWith('/api/login') || url.startsWith('/api/register') ||
        request.nextUrl.toString() === request.url
    ) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/login', request.url))
}