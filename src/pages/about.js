import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="Yo" />
    <section className="about">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>Me presento</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    
                    Hola a todos!!
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h2>
                  <h3>para empezar</h3>
                </div>

                <div className="card-text">
                ¡Hola! Soy Sebastián, un apasionado del desarrollo web y la impresión 3D con sede en Salta, Argentina. Tengo 39 años y estoy casado, siendo padre orgulloso de dos hijas maravillosas.

Desde siempre me ha fascinado el mundo de la tecnología y el aprendizaje constante. Disfruto enfrentando nuevos desafíos y resolviendo problemas de manera creativa y eficiente. Como profesional del desarrollo web, encuentro una satisfacción única en diseñar y crear soluciones digitales que hagan la vida de las personas más fácil y eficiente.

                  
                                  </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="me.jpg"
              alt="familia"
              className="about-img-wrapper"
            />
          </div>
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>Un poquito mas..</h2>
                  <h3>La Familia ante todo</h3>
                </div>
                <div className="card-text">
                Fuera del ámbito digital, tengo una pasión especial por la impresión 3D. Tengo mi propia impresora 3D, lo que me permite dar vida a mis personajes preferidos y crear objetos únicos.
                Es una actividad que me permite desconectar y expresar mi lado más artístico.
                <br></br>
                <br></br>
                <h3>Haz el bien sin mirar a quien.</h3>
                <br></br>
                Trabaje como voluntario 4 años en una ONG llamada <a
                        href="https://www.argentina.techo.org" target="_blank"
                        rel="noreferrer">Techo </a>
                participando en varias contrucciones de viviendas de emergencia y una mesa de trabajo.
                Coordine areas de trabajo y grupos de voluntarios.
                </div>
            
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage
