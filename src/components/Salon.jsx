export default function Salon({Ville, Image, Adresse, Ouverture}) {
    return(
        <>
            <div className="">
                <h2 className="text-2xl font-bold">{Ville}</h2>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
            <a href="#"><img src={Image} alt={Ville} className="w-full h-64 object-cover rounded-md" /></a>
            </div>
            <div>
                <p className="text-gray-600">{Adresse}</p>
                <p className="text-gray-600">{Ouverture}</p>
            </div>
        </>
    )
}