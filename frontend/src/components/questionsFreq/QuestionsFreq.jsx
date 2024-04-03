import Accordion from "./Accordion";

export default function QuestionsFreq() {
  return (
    <div className=" w-2/3 ml-40 ">
      <div className=" p-4 mt-4 md:flex flex-col justify-center">
        <h1 className="text-2xl lg:text-3xl font-jacques ">
          Questions Fréquentes
        </h1>
        <Accordion
          title="Qui sommes-nous ?"
          answer="Nous sommes FantasiaFly, votre compagnon de voyage vers des destinations fictives éblouissantes. Animés par la passion  de l'évasion et du rêve, nous vous invitons à embarquer pour un voyage extraordinaire au-delà des frontières de l'imagination. Notre équipe dévouée travaille sans relâche pour vous offrir une expérience inoubliable, vous guidant à travers des contrées fantastiques, des cités mythiques et des paysages enchanteurs. Avec FantasiaFly, chaque voyage est une aventure unique, où le merveilleux devient réalité. Bienvenue à bord de notre monde de découvertes infinies. "
        />
        <hr className="border-b border-gray-300 mb-4 " />
        <Accordion
          title="Quelles sont les garanties FantasiaFly ?"
          answer="Les garanties offertes par FantasiaFly sont conçues pour vous assurer une expérience de voyage sûre, confortable et sans souci. En tant que votre compagnon de voyage de confiance, nous nous engageons à vous offrir :Sécurité avant tout ,Service clientèle exceptionnel, Flexibilité et tranquillité d'esprit, Qualité et confort, Innovation et créativité  "
        />
        <hr className="border-b border-gray-300  mb-4 " />
        <Accordion
          title="Pourquoi voyager avec nous ?"
          answer="voyager avec FantasiaFly vous promet une expérience unique et mémorable grâce à :

                  Des destinations fictives extraordinaires qui émerveilleront votre esprit.
                  Une immersion totale dans des univers imaginaires soigneusement élaborés.
                  Un service attentif et des logistiques impeccables pour votre confort et votre tranquillité d'esprit.
                  Des expériences originales et innovantes qui repoussent les limites de l'ordinaire.
                  Un service clientèle exceptionnel, toujours prêt à vous offrir une assis  tance personnalisée et attentionnée. "
        />
        <hr className="border-b border-gray-300 mb-4 " />
        <Accordion
          title="Puis-je régler en plusieurs fois ?"
          answer="Bien sûr ! Chez FantasiaFly, nous comprenons que la flexibilité est importante pour nos voyageurs. C'est pourquoi nous vous offrons la possibilité de régler votre voyage en plusieurs fois. Grâce à nos options de paiement échelonné, vous pouvez répartir le coût de votre voyage sur plusieurs mensualités, vous permettant ainsi de planifier votre budget en toute tranquillité.  "
        />
        <hr className="border-b border-gray-300 mb-4 " />
      </div>
    </div>
  );
}
