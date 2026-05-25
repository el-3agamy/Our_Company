import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <section>
                <ul className='flex justify-around align-middle '>
                    <li>
                        <Link href="/">Home</Link>

                    </li>
                    <li>
                        <Link href="/services">Services</Link>

                    </li>
                    <li>

                        <Link href="/about">About</Link>

                    </li>
                    <li>

                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>

                        <Link href="/contacts">Contact Us</Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
