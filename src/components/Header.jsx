export default function Header() {
    return(
        <div className="flex flex-col items-center gap-2 p-4 sticky top-0 z-10 bg-[#7D8C71] md:grid md:grid-cols-3 md:gap-0">
            <div className="flex justify-center md:justify-start">
                <img src="/logo-placeholder-image.png" alt="Logo" className="h-16" />
            </div>
            <div className="flex justify-center">
                <ul className="flex flex-row flex-wrap justify-center text-white">
                    <li className="px-4"><a href="#Presentation">Accueil</a></li>
                    <li className="px-4"><a href="#Salon">Nos salons</a></li>
                    <li className="px-4"><a href="#Produit">Produits</a></li>
                    <li className="px-4"><a href="#Prestation">Prestations</a></li>
                    <li className="px-4"><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    ) 
}