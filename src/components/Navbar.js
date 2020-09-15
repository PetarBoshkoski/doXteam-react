import React from "react"

function Navbar() {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact methods</li>
                    <select name="contacts">
                        <option>Facebook</option>
                        <option>Twitter</option>
                        <option>Skype</option>
                    </select>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar