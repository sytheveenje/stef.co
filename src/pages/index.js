import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const sexyP = styled.p`
  color: pink;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      id="about"
      className="l-wrapper l-wrapper-wide l-content l-content-page"
    >
      <h2 className="division">Stef Thoen</h2>
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
          . Zomer 2017 hebben we een{" "}
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
            Na oplevering voer ik onderhoud uit, host ik je website, installeer
            updates en &apos;tweak&apos; de website voor optimale veiligheid en
            conversie.
          </p>
        </article>
      </div>
    </section>

    <section>
      <h2>Wat maak ik?</h2>
      <p>
        Ik bouw responsive websites op maat. Dit gaat van een simpele one-page
        tot complete webshops. HTML, CSS en JavaScript kennen voor mij geen
        geheimen. WordPress is mijn CMS naar keuze, maar ik heb ervaring met een
        boel andere back-end talen en frameworks.
      </p>
      <p>
        Hieronder volgt een greep uit mijn meest recente werk. Wil je meer zien{" "}
        <a href="mailto:hi@stef.co">neem dan contact op</a>.
      </p>
    </section>

    <section>
      <h2>Waar kan ik je mee helpen?</h2>
      <p>
        Denk je dat ik je ergens bij kan helpen? Of je nu een simpele website
        nodig hebt, of je een creatief communicatiebureau hebt en een vaste
        dev&apos;er nodig hebt om je designs te bouwen: Stuur mij een e-mail op{" "}
        <a href="mailto:hi@stef.co">hi@stef.co</a>.
      </p>
    </section>
  </Layout>
)

export default IndexPage
