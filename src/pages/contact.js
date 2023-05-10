import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Links from "../components/links"
import contactimg from "../images/contactimg.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Contacto</h1>
            <p>
              Hola graciaspor visitar mi sitio. 
              Si tiene alguna consulta o comentario no dude en comunicarse. 
              Mis puntos de contacto son:
            </p>
            <Links />
            <p>
             Actualmente estoy disponible para escuchar nuevas propuestas de trababjo remoto.
              Mi ambito de trabajo incluye:
            </p>
            <ul>
              <li>Desarrollador Web</li>
              <li>bases de datos</li>
              <li>Paginas web responsive</li>
            </ul>

            <a
              href="static/CV-SebastianMasaguer.pdf"
              className="main-button btn btn-primary shadow-sm mt-2"
            >
              Download mi Cv
            </a>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="Vector of a man and a phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
