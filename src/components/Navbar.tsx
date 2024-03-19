import React from "react"

export default function Navbar(props) {
    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Navbar</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>Link</a></li>
                <li>
                    <details>
                    <summary>
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    )
};

