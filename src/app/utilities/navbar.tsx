const Navbar =()=>{
    return(  
    <nav className="bg-gray-800-500 p-4 flex justify-between shadow-xl items-center">
        <div>
            <h1 className="text-white hover:text-aquamarine text-2xl font-bold">PORTOFOLIO</h1>
        </div>
        <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-aquamarine transition-colors">About</a>
            <a href="#" className="text-white hover:text-aquamarine transition-colors">Skill</a>
            <a href="#" className="text-white hover:text-aquamarine transition-colors">Portfolio</a>
            <a href="#" className="text-white hover:text-aquamarine transition-colors">Contact</a>
        </div>
        
    </nav>
      )
}

export default Navbar;