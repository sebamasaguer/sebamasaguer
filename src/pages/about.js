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
                  Soy Sebastian, vivo en Salta Argentina, tengo 39 años, estoy casado y tengo dos hijas.
                  Me gusta aprender, soy bueno resolviendo problemas, el desarrollo web es mi camino.
                  Tengo mi impresora 3d hago mis personajes preferidos y luego los pinto a mano.
                  
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
                  Mi esposa se llama Cecila y tenemos una relacion de hace mas de 10 años, es mi compañera de ruta, nuestras pequeñas Victoria y Sara son mi motor, 
                  me gusta mucho verlas crecer, jugar y divertirse, me sorprenden dia a dia.
                <br></br>
                <br></br>
                <h3>Haz el bien sin mirar a quien.</h3>
        
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
