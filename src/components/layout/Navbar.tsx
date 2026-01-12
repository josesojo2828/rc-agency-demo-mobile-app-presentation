import { Link } from "react-router-dom";
import { Download, Menu } from "lucide-react";

export function Navbar() {
    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 border-b border-white/5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a href="#features">Features</a></li>
                        <li><a href="#screens">Screens</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-sans font-black tracking-tighter text-white">
                    App<span className="text-primary">Vibe</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#screens">Screens</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-primary btn-sm md:btn-md rounded-full text-white shadow-lg shadow-primary/20">
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                </button>
            </div>
        </div>
    );
}

