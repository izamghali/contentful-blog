import Navbar from "@/components/Navbar"
import React from "react"

export default function Template({ children }) {
    return (
        <div>
            <Navbar />

            { children }

        </div>
    )
};

