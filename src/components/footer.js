import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  max-width: 768px;
  margin: 0 auto;
`

const Footer = () => (
  <StyledFooter>
    <div>
      <div>
        <h2>Postadres</h2>
        <ul>
          <li>4 Frétoy</li>
          <li>71550 Cussy-en-Morvan</li>
          <li>France</li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>
            E-mail: <a href="mailto:hi@stef.co">hi@stef.co</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Administratie</h2>
        <ul>
          <li>Siret: 81448255000013</li>
          <li>Bank: NL47 ASNB 0708 3314 67</li>
          <li>TVA: FR08814482550</li>
        </ul>
      </div>
    </div>
    <p>
      <a
        href="http://creativecommons.org/licenses/by-nc-nd/3.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alles hier &copy; Creative Commons
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/stefthoen/stef.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source staat op Github
      </a>
    </p>
  </StyledFooter>
)

export default Footer
