export default function Footer() {
    return(
        <>
        <div className="grid grid-cols-1 gap-4 items-center p-4 md:grid-cols-3 md:gap-0 bg-[#7D8C71] text-white">
            <div className="flex justify-center md:justify-start">
                <img src="/logo-placeholder-image.png" alt="Logo" className="h-16" />
            </div>
            <div className="flex justify-center">
                <ul className="flex flex-row flex-wrap justify-center gap-y-2">
                    <li className="px-4"><a href="#">Politique de confidentialité</a></li>
                    <li className="px-4"><a href="#">Mentions légales</a></li>
                    <li className="px-4"><a href="#">CGU</a></li>
                </ul>
            </div>
            <div className="flex justify-center md:justify-end">
                <a href="#"><img src="/Instagram_icon.png" alt="Reseau social principal" className="h-12" /></a>
            </div>
        </div>
        </>
    ) 
}