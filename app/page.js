export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          7 <span>RAÍZES</span>
        </div>
      </header>

      {/* CAPA PRINCIPAL */}
      <div className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="subtitulo">
            Restauração de Pisos Nobres
          </div>

          <h1>7 RAÍZES</h1>

          <p>
            Tradição, precisão e cuidado para devolver a beleza
            natural dos seus pisos de madeira.
          </p>

          <div className="btn-group">
            <a
              href="https://wa.me/5511970200771?text=Ol%C3%A1,%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20para%20meu%20piso."
              className="btn btn-primary"
            >
              Solicitar Avaliação
            </a>

            <a href="#portfolio" className="btn btn-outline">
              Ver Trabalhos
            </a>
          </div>
        </div>
      </div>

      {/* CONTATO */}
      <div className="top-info">
        <div>
          Fale Conosco:{" "}
          <a href="tel:11970200771">
            (11) 97020-0771
          </a>
        </div>

        <div>
          Instagram do Prestador Parceiro:{" "}
          <a
            href="https://instagram.com/aplicadora_sena_"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aplicadora_sena_
          </a>
        </div>

        <div>
          Atendimento: São Paulo e Região
        </div>
      </div>

      {/* SERVIÇOS */}
      <section>
        <div className="section-title">
          <span>Especialidades</span>
          <h2>Nossos Serviços de Alto Padrão</h2>
        </div>

        <div className="grid-servicos">

          <div className="card">
            <h3>
              Raspagem e Lixamento Especializado
            </h3>

            <p>
              Lixamento progressivo executado com maquinário
              profissional para remoção completa de vernizes
              antigos, riscos e nivelamento perfeito da madeira.
            </p>
          </div>

          <div className="card">
            <h3>
              Calafetação &amp; Juntas
            </h3>

            <p>
              Preenchimento e vedação de frestas entre as tábuas
              utilizando massa PU flexível de alta resistência
              para prevenir trincas futuras.
            </p>
          </div>

          <div className="card">
            <h3>
              Aplicação de Vernizes Nobres
            </h3>

            <p>
              Proteção e vitrificação com vernizes de alta
              performance (como Bona e Skane), oferecendo
              opções de acabamento fosco, acetinado ou brilhante.
            </p>
          </div>

          <div className="card">
            <h3>
              Restauração de Tacos e Assoalhos
            </h3>

            <p>
              Recuperação técnica de tacos, parquetes e
              assoalhos de madeira nobre, devolvendo os tons
              quentes e a elegância original do piso.
            </p>
          </div>

        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio">

        <div className="section-title">
          <span>Portfólio</span>
          <h2>Projetos Realizados</h2>
        </div>

        <div className="grid-portfolio">

          <div className="portfolio-item">
            <img
              src="/IMG-20250113-WA0051.jpg"
              alt="Restauração de piso de madeira e taco antigo"
            />

            <div className="portfolio-caption">
              Restauração de Taco Antigo
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="/20241010_090228.jpg"
              alt="Aplicação de verniz em piso de madeira"
            />

            <div className="portfolio-caption">
              Aplicação de Verniz Acetinado
            </div>
          </div>

          <div className="portfolio-item">
            <img
              src="/20241107_092638.jpg"
              alt="Raspagem e calafetação de piso de madeira"
            />

            <div className="portfolio-caption">
              Raspagem e Calafetação
            </div>
          </div>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section>

        <div className="section-title">
          <span>Depoimentos</span>
          <h2>O que dizem nossos clientes</h2>
        </div>

        <div className="grid-depoimentos">

          <div className="depoimento-card">
            <p>
              "O piso do meu apartamento de taco antigo ficou
              novo de novo! Agilidade no atendimento e um
              acabamento verdadeiramente impecável."
            </p>

            <div className="depoimento-autor">
              — SÉRGIO A. (JARDINS, SP)
            </div>
          </div>

          <div className="depoimento-card">
            <p>
              "Trabalho de extrema precisão. A calafetação
              ficou perfeita e o acabamento acetinado
              valorizou muito nossa sala."
            </p>

            <div className="depoimento-autor">
              — CARLA M. (MOEMA, SP)
            </div>
          </div>

          <div className="depoimento-card">
            <p>
              "Atendimento impecável desde o orçamento.
              Pontuais e o resultado final no assoalho de
              ipê superou as expectativas."
            </p>

            <div className="depoimento-autor">
              — ROBERTO V. (PINHEIROS, SP)
            </div>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">

        <h2>
          Seu piso tem uma história.
        </h2>

        <p>
          Nós ajudamos a continuar ela.
        </p>

        <a
          href="https://wa.me/5511970200771?text=Ol%C3%A1,%20quero%20solicitar%20um%20or%C3%A7amento."
          className="btn btn-primary"
        >
          Fale Conosco Agora
        </a>

      </section>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5511970200771?text=Ol%C3%A1,%20vim%20pelo%20site%20da%207%20Ra%C3%ADzes."
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a 7 Raízes pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 2a13 13 0 0 0-11.3 19.4L3 29l7.8-2A13 13 0 1 0 16 2zm0 24a11 11 0 0 1-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A11 11 0 1 1 16 26zm6-8.2c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a9 9 0 0 1-2.6-1.6 10 10 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6s0-.4 0-.5c-.2-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4A3.8 3.8 0 0 0 8 12.3a6.6 6.6 0 0 0 1.4 3.5 15.2 15.2 0 0 0 5.8 5.1c2.4 1 2.9.8 3.4.8a2.9 2.9 0 0 0 1.9-1.3 2.4 2.4 0 0 0 .2-1.3c-.1-.2-.4-.3-.7-.5z"/>
        </svg>
      </a>

      {/* RODAPÉ */}
      <footer>
        <p>
          © 2026 7 Raízes - Restauração de Pisos Nobres.
          Todos os direitos reservados.
        </p>

        <p>
          Contato: 7raizespisonobre@gmail.com | (11) 97020-0771
        </p>
      </footer>
    </>
  );
            }
