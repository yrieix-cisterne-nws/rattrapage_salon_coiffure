import Map from "./components/Map";
import ProductCard from "./components/ProductCard";
import Salon from "./components/Salon";

export default function Home() {

  const Jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const Heures = ["9h", "9h30", "10h", "10h30", "11h", "11h30", "12h", "12h30", "13h", "13h30", "14h", "14h30", "15h", "15h30", "16h", "16h30", "17h", "17h30", "18h", "18h30"];

  return(
    <>
      <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8 py-24 md:grid-cols-2" id="Presentation">
        <div className="flex flex-col justify-center ">
          <h1 className="text-4xl pb-4">Salon Belle Coiffure</h1>
          <p className="text-lg">Coiffure naturelle, produits locaux et savoir-faire Normand pour prendre soin de vous et de la planète, sans compromis sur la coiffure.</p>
        </div>
        <div>
          <img src="/image_hero.jpg" alt="Personne entrain de se faire coiffer" className="w-full h-64 object-cover rounded-md" />
        </div>
      </section>
      <div className="max-w-5xl mx-auto flex justify-center pb-6" id="Salon">
        <h2 className="text-2xl">Nos salons</h2>
      </div>
      <section className="max-w-5xl mx-auto flex flex-col items-center gap-8 pb-24 md:flex-row md:justify-between md:gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <Salon Ville="Rouen" Image="/salon/Salon_Rouen.jpg" Adresse="123 Rue de la Coiffure, 76000 Rouen" Ouverture="Ouvert du lundi au samedi de 9h à 19h" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Salon Ville="Le Havre" Image="/salon/Salon_Havre.jpg" Adresse="456 Avenue de la Beauté, 76600 Le Havre" Ouverture="Ouvert du lundi au samedi de 9h à 19h" />
        </div>
      </section>
      <div className="flex justify-center pb-4 bg-[#D9C5B2] pt-12" id="Produit">
        <h2 className="text-2xl font-bold">Nos produits phares</h2>
      </div>
      <section className="bg-[#D9C5B2] flex flex-col items-center gap-4 py-4 md:flex-row md:justify-center">
        <ProductCard Image="/produits/shampooing_sec.webp" Titre="Shampooing sec texture volumateur" Description="Craquez pour le shampooing sec Kerasoin Professionnel" Prix="4,76€" />
        <ProductCard Image="/produits/gelee_capillaire.webp" Titre="Gelée capillaire Boost Curl" Description="Hydratez vos cheveux texturés tout en boostant vos boucles" Prix="19,00€" />
        <ProductCard Image="/produits/cire_coiffante.webp" Titre="Cire coiffante Matte Clay" Description="idéale pour structurer les cheveux courts avec précision" Prix="13,10€" />
      </section>
      <div className="flex justify-center pt-4 bg-[#D9C5B2] pb-24">
        <a href="#" className="px-4 py-2 bg-[#7D8C71] hover:bg-[#6D7C61] transform duration-300 text-white rounded-md">Voir tous nos produits</a>
      </div>
      <div className="max-w-5xl mx-auto flex justify-center pt-12 pb-6" id="Prestation">
        <h2 className="text-2xl font-bold">Nos prestations</h2>
      </div>
      <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8 pb-12 md:grid-cols-2">
        <div className="bg-[#D9C5B2] rounded-md p-4">
          <h3>Coupe Femme</h3>
        <ul className="pt-2 flex flex-col gap-3 divide-y divide-gray-900">
          <li>Shampoing Coupe séchage - Cheveux Courts</li>
          <li>Shampoing Coupe séchage Cheveux Mi-longs</li>
          <li>Shampoing Coupe séchage Cheveux Longs</li>
          <li>Shampoing + Brushing Cheveux Courts</li>
          <li >Shampoing + Brushing Cheveux Mi-longs</li>
          <li>Shampoing + Brushing Cheveux Longs</li>
        </ul>
      </div>
        <div className="bg-[#D9C5B2] rounded-md p-4">
          <h3>Coupe Homme</h3>
        <ul className="pt-2 flex flex-col gap-3 divide-y divide-gray-900">
          <li>Shampoing + coupe + séchage</li>
          <li>Shampoing + coupe + séchage Etudiant</li>
          <li>Cover + shampoing + coupe</li>
          <li>Shampoing Séchage</li>
          <li>Forfait Décoloration+ Shampooing, Coupe, Séchage ou Brushing Court</li>
        </ul>
      </div>
      </section>
      <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8 py-12 md:grid-cols-2" id="Contact">
        <div className="bg-[#D9C5B2] p-6 rounded-md flex flex-col justify-center">
          <h2 className="text-2xl mb-4">Prendre rendez-vous</h2>
          <form>
            <label htmlFor="Salons" className="block text-sm font-medium text-gray-700">Choisissez le salon de coiffure</label>
            <select id="Salons" name="Salons" className="mt-1 w-full pl-3 py-2 bg-white sm:text-sm rounded-md">
              <option>Salon de coiffure Rouen</option>
              <option>Salon de coiffure Le Havre</option>
            </select>
            <label htmlFor="Jour" className="block text-sm font-medium text-gray-700 mt-4">Choisissez le jour</label>
            <select id="Jour" name="Jour" className="mt-1 w-full pl-3 py-2 bg-white sm:text-sm rounded-md">
              {Jours.map((jour) => (
                <option key={jour}>{jour}</option>
              ))}
              </select>
            <label htmlFor="Heure" className="block text-sm font-medium text-gray-700 mt-4">Choisissez l'heure</label>
            <select id="Heure" name="Heure" className="mt-1 w-full pl-3 py-2 bg-white sm:text-sm rounded-md">
              {Heures.map((heure) => (
                <option key={heure}>{heure}</option>
              ))}
            </select>
            <label htmlFor="Téléphone" className="block text-sm font-medium text-gray-700 mt-4">Entrez votre numéro de téléphone</label>
            <input type="text" id="Téléphone" name="Téléphone" className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
            <div className="flex justify-center">
              <button type="submit" className="mt-4 px-4 py-2 bg-[#7D8C71] hover:bg-[#6D7C61] transform duration-300 text-white rounded-md">Valider</button>
            </div>
          </form>
        </div>
        <div>
          <Map />
        </div>
      </section>
    </>
  )
}