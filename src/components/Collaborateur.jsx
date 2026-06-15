export default function Collaborateur( {Image, Nom,} ) {
    return(
        <>
        <div className="grid grid-cols-3 gap-4 p-4">
            <div>
                <img src={Image} alt={Nom} className="w-full h-16 object-contain" />
            </div>
            <div className="flex items-center">
                <h3 className="text-xl">{Nom}</h3>
            </div>
        </div>
        </>
    )
}