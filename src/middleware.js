import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
	let verify = req.cookies.get('logged_in')
	let url = req.url
}
