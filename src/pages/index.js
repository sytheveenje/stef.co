import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Case from "../components/case"
import SEO from "../components/seo"

export const caseImage = graphql`
  fragment caseImage on File {
    childImageSharp {
      fluid(maxWidth: 768) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const IndexPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      speld: file(relativePath: { eq: "speld.png" }) {
        ...caseImage
      }
      quaiDesNotaires: file(relativePath: { eq: "quai-des-notaires.png" }) {
        ...caseImage
      }
      hogeschoolUtrecht: file(relativePath: { eq: "hogeschool-utrecht.png" }) {
        ...caseImage
      }
      nexusInstituut: file(relativePath: { eq: "nexus-instituut.png" }) {
        ...caseImage
      }
      echotoon: file(relativePath: { eq: "echotoon.png" }) {
        ...caseImage
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <h2>Stef Thoen</h2>
        <p>
          Ik ben een freelance full-stack developer met een achtergrond in
          Informatica en Filosofie. Ik houd van toegankelijke websites die heel
          snel zijn.
        </p>
      </section>

      <section>
        <div>
          <p>
            Oktober 2013 vertrokken we met{" "}
            <a href="http://joepdezoeperd.nl">Joep de Zoeperd</a> en ben ik door
            Europa gaan zwerven terwijl ik mooie websites maakte voor mijn fijne
            klanten.
          </p>
          <p>
            We zijn gestrand in de Morvan in Frankrijk, waar we twee jaar hebben
            gewoond in een{" "}
            <a href="https://www.paprikapatterns.com/building-home-mounting-yurt/">
              yurt
            </a>
            . In de zomer van 2017 hebben we een{" "}
            <a href="http://peuapeu.nl">
              oude boerderij gekocht die we aan het opknappen zijn
            </a>
            .
          </p>
          <p>
            Ik schrijf sporadisch wel eens wat op{" "}
            <a href="http://twitter.com/stefthoen">Twitter</a>, plaats wel eens
            een (klus) foto op{" "}
            <a href="https://instagram.com/scnthoen">Instagram</a>.
          </p>
        </div>
      </section>

      <section>
        <h2>Wat doe ik?</h2>
        <div>
          <article>
            <i>Design</i>
            <h3>Het ontwerp</h3>
            <p>
              Ik onderzoek, schets en bouw prototypes. Ik zorg voor een
              overzichtelijk en doeltreffend ontwerp, een website waar bezoekers
              graag naar terugkomen.
            </p>
          </article>
          <article>
            <i>Bouw</i>
            <h3>De bouw</h3>
            <p>
              Responsive websites en webapps gebouwd met een sterke focus op
              performance. Razendsnel waardoor je bezoeker snel vindt wat hij
              zoekt.
            </p>
          </article>
          <article>
            <i>Service</i>
            <h3>De service</h3>
            <p>
              Na oplevering voer ik onderhoud uit, host ik je website,
              installeer updates en &apos;tweak&apos; de website voor optimale
              veiligheid en conversie.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Wat maak ik?</h2>
        <p>
          Ik bouw responsive websites op maat. Dit gaat van een simpele one-page
          tot complete webshops. HTML, CSS en JavaScript kennen voor mij geen
          geheimen. WordPress is mijn CMS naar keuze, maar ik heb ervaring met
          een boel andere back-end talen en frameworks.
        </p>
        <p>
          Hieronder volgt een greep uit mijn meest recente werk. Wil je meer
          zien <a href="mailto:hi@stef.co">neem dan contact op</a>.
        </p>
        <Case
          title="De Speld"
          url="https://speld.nl"
          imageData={imageData.speld}
        >
          <p>
            {" "}
            De Speld is de grootste satirische website van Nederland met
            maandelijks meer dan 1,5 miljoen bezoekers. Ik heb het afgelopen
            jaar een grote refactor uitgevoerd en de codebase gemoderniseerd.
            Daarnaast heb ik nieuwe features ontwikkeld en de website gekoppeld
            aan een nieuwe advertentie partner. Ten slotte hebben we een “Vage
            Kennis” abonnement model geintroduceerd waarmee bezoekers lid kunnen
            worden en een advertentie-vrije versie van de website kunnen zien.
          </p>
        </Case>
        <Case
          title="Quai des Notaires"
          url="https://quaidesnotaires.com"
          imageData={imageData.quaiDesNotaires}
        >
          <p>
            Quai des Notaires is een Franse startup in de notaris markt. Ik was
            verantwoordelijk voor het leiden van een team dat een Symfony 3 web
            applicatie converteerde naar een Symfony 4 GraphQL API met een React
            front-end.
          </p>
        </Case>
        <Case
          title="Hogeschool Utrecht"
          url="https://pathfinder.stef.co"
          imageData={imageData.hogeschoolUtrecht}
        >
          <p>
            Hogeschool Utrecht vroeg mij een keuzetool te ontwikkeling, voor de
            selectie van strategieën voor gedragsverandering. Op basis van het
            ontwerp van{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.panton.nl"
            >
              Panton
            </a>{" "}
            heb ik een responsive React progressive web app gebouwd.
          </p>
        </Case>
        <Case
          title="Nexus Instituut"
          url="https://nexus-instituut.nl"
          imageData={imageData.nexusInstituut}
        >
          <p>
            De website van Nexus Instituut heb ik responsive gemaakt waardoor
            hij meeschaalt met verschillende scherm formaten. De oude website
            gebruikte een maatwerk CMS. Onder luid gejuich van de Nexus redactie
            heb ik hem omgezet naar WordPress. Een nieuwe WooCommerce store
            maakt dat klanten met groot gemak het laatste Nexus magazine kunnen
            bestellen.
          </p>
        </Case>
        <Case
          title="Echotoon"
          url="https://echotoon.nl"
          imageData={imageData.echotoon}
        >
          <p>
            Samen met visueel strateeg{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://irisvansen.nl"
            >
              Iris van Sen
            </a>{" "}
            en UX designer{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leonhuisman.com"
            >
              Leon Huisman
            </a>{" "}
            hebben we een responsive WordPress website gemaakt voor Echotoon; de
            beste echoscopie praktijk van Noord-Nederland.
          </p>
        </Case>
      </section>

      <section>
        <h2>Waar kan ik je mee helpen?</h2>
        <p>
          Denk je dat ik je ergens bij kan helpen? Of je nu een simpele website
          nodig hebt, of je een creatief communicatiebureau hebt en een vaste
          dev&apos;er nodig hebt om je designs te bouwen: Stuur mij een e-mail
          op <a href="mailto:hi@stef.co">hi@stef.co</a>.
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
