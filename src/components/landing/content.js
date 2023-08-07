import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                  link
                  description
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* + Job subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>Trabajo{" "}
                    <span className="word">en</span>
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Subsecretaría de Tecnologías de la Información y la Comunicación.</h3>
                        <h6>Gobierno de la provincia de Salta-Argentina</h6>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Desarrollador Web.
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Noviembre 2022 - Presente
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ Trabajo en realizar nuevos modulos y funcionalidades de distintos sistemas.
                        <br />◆ Relizo correccion de errores, genero informes y actualizaciones. 
                      </div>
                      
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Secretaría de Trabajo.</h3>
                        <h6>Gobierno de la provincia de Salta-Argentina</h6>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Desarrollador Web - Informático.
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          - Febrero 2011 -Noviembre 2022 
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ Trabajo en crecion y mantenimiento de sistemas web para la gestion de expedientes de multas.
                  <br />◆ Mantenimineto de  pc y redes.
                  <br />◆ Crecion pagina web Institucional.
                      </div>
                      </div>
                  </div>
                  
                </div>
                {/* - Job subsection */}

                {/* + Technologies subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Lo que conozco{" "}
                    <span className="word">es</span>
                  </h2>
                  <div className="row">
                    {data.allLanguagesJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card">
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              {node.language}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* - Technologies subsection */}

                {/* + School subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Estudio {" "}
                    <span className="word">en</span>
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Instituto Del Milagro</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Técnico Analista de Sistemas
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Abril 2013 - 2016
                        </h4>
                      </div>
                      <div className="card-title">
                        <h3>Soy Henry</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Desarrollador full stack
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Abril 2023 -  actualidad
                        </h4>
                      </div>
                      <div className="card-text">
                        
                      </div>
                    </div>
                  </div>
                </div>
                {/* - School subsection */}

                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Tengo experiencia {" "}
                    <span className="word">en</span>
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}
