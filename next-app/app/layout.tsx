import './globals.css'
import React from "react";
import Link from "next/link";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <head>
            <title>Random-Cocktail</title>
            <link rel="icon" href="favicon.ico"/>
        </head>
        <body className="min-h-screen bg-gray-700">
            <div className="flex items-center justify-center relative">
                <div
                    className="flex items-center fixed mt-28 justify-between flex-wrap bg-slate-500 bg-opacity-95 rounded-lg w-3/4 h-14 pl-4 pr-4">
                    <Link className="text-white mr-6 font-bold text-2xl" href="/">
                        Random-Cocktail
                    </Link>
                    <Link href="/history">
                        <svg className="h-8 w-8" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.52786 16.7023C6.6602 18.2608 8.3169 19.3584 10.1936 19.7934C12.0703 20.2284 14.0409 19.9716 15.7434 19.0701C17.446 18.1687 18.766 16.6832 19.4611 14.8865C20.1562 13.0898 20.1796 11.1027 19.527 9.29011C18.8745 7.47756 17.5898 5.96135 15.909 5.02005C14.2282 4.07875 12.2641 3.77558 10.3777 4.16623C8.49129 4.55689 6.80919 5.61514 5.64045 7.14656C4.47171 8.67797 3.89482 10.5797 4.01579 12.5023M4.01579 12.5023L2.51579 11.0023M4.01579 12.5023L5.51579 11.0023"
                                stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V12L15 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div>
                {children}
            </div>
        </body>
        </html>
    )
}
