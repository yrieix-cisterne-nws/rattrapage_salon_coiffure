export default function ProductCard({ Image, Titre, Description, Prix }) {
    return(
        <>
        <a href="#">
            <div className="max-w-sm rounded p-4 shadow-md hover:scale-110 transition-transform duration-300">
                <div>
                    <img src={Image} alt={Titre} className="w-full h-64 object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 pt-2">
                    <h3 className="text-xl font-bold">{Titre}</h3>
                    <p className="text-gray-600">{Description}</p>
                    <p className="text-gray-800 font-semibold">{Prix}</p>
                </div>
            </div>
        </a>
        </>
    )
}