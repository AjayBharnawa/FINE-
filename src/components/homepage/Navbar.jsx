import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-between px-12">
      
        <div className="flex items-center gap-3">
             <img src={logo} className="w-10 h-10 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest text-white cursor-pointer">
            <span className="text-green-400">FINE</span>
            </h1>        
        </div>

        <div className="">
            <a href="">About</a>
            <a href="">Domains</a>
            <a href="">Projects</a>

        </div>

        

        

    </div>
  );
};

export default Navbar;
