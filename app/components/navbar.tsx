import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from '@/public/logo/logo_full.svg'
import { Button } from "antd";

const navigation = [
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'What is Creator', href: '/concept', current: false },
    { name: 'Blog', href: '/docs/blog', current: false },
]

const NavbarComponent = () => {

    return (
        <div className="z-10 w-full max-w-[80%] items-center justify-between font-mono text-sm lg:flex px-6 pb-4">
            <Link href="/">
                <Image
                    style={{ width: "auto", height: "4rem", marginRight: "-0.25rem" }}
                    src={LogoImage}
                    alt="Commune Logo"
                    width={64}
                    height={64}
                />
            </Link>

            <div className="hidden xl:block">
                <div className="flex">
                    {
                        navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={'flex text-gray-500 dark:text-[#32CD32] dark:hover:text-[#6bcd32] p-0 lg:pl-4 cursor-pointer underline-offset-2 hover:underline hover:underline-offset-4  decoration-gray-500'}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <span className={"flex items-center justify-center font-[&quot;Euclid_Circular_A&quot;] text-white font-medium"} style={{fontWeight:'600'}}>
                                    {item.name}
                                </span>
                            </a>
                        ))
                    }
                    <Button type="default" className="ml-4 rounded-full">Sign In</Button>
                </div>
            </div>
        </div>
    )

}

export default NavbarComponent;
