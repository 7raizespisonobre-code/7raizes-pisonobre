export default function Home() {
  return (
    <>
      {/* CABEÇALHO */}
      <header>
        <div className="logo">
          7 <span>RAÍZES</span>
        </div>
      </header>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,19,18,0.55), rgba(20,19,18,0.72)), url('/IMG-20250113-WA0051.jpg')",
        }}
      >
        <div className="hero-content">
          <p className="eyebrow">RESTAURAÇÃO DE PISOS NOBRES</p>

          <h1>7 RAÍZES</h1>

          <p className="hero-text">
            Tradição, precisão e cuidado para devolver a beleza natural dos
            seus pisos de madeira.
          </p>

          <div className="hero-buttons">
            <a
              className="btn btn-primary"
              href="https://wa.me/5511970200771?text=Ol%C3%A1,%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20para%20meu%20piso."
              target="_blank"
              rel="noopener noreferrer"
            >
              SOLICITAR
              <br />
              AVALIAÇÃO
            </a>

            <a className="btn btn-outline" href="#portfolio">
              VER
              <br />
              TRABALHOS
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact-info">
        <p>
          Fale Conosco:{" "}
          <a href="tel:11970200771">(11) 97020-0771</a>
        </p>

        <p>
          Instagram do Prestador Parceiro:{" "}
          <a
            href="https://instagram.com/aplicadora_sena_"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aplicadora_sena_
          </a>
        </p>

        <p>Atendimento: São Paulo e Região</p>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">ESPECIALIDADES</p>

          <h2>Nossos Serviços de Alto Padrão</h2>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <h3>Raspagem e Lixamento Especializado</h3>

            <p>
              Lixamento progressivo executado com maquinário profissional para
              remoção completa de vernizes antigos, riscos e nivelamento
              perfeito da madeira.
            </p>
          </article>

          <article className="service-card">
            <h3>Calafetação &amp; Juntas</h3>

            <p>
              Preenchimento e vedação de frestas entre as tábuas utilizando
              massa PU flexível de alta resistência para prevenir trincas
              futuras.
            </p>
          </article>

          <article className="service-card">
            <h3>Aplicação de Vernizes Nobres</h3>

            <p>
              Proteção e vitrificação com vernizes de alta performance (como
              Bona e Skane), oferecendo opções de acabamento fosco, acetinado
              ou brilhante.
            </p>
          </article>

          <article className="service-card">
            <h3>Restauração de Tacos e Assoalhos</h3>

            <p>
              Recuperação técnica de tacos, parquetes e assoalhos de madeira
              nobre, devolvendo os tons quentes e a elegância original do piso.
            </p>
          </article>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className="section" id="portfolio">
        <div className="section-heading">
          <p className="eyebrow">PORTFÓLIO</p>

          <h2>Projetos Realizados</h2>
        </div>

        <div className="portfolio-grid">
          <article className="portfolio-item">
            <img
              src="/IMG-20250113-WA0053.jpg"
              alt="Restauração de piso de madeira realizada pela 7 Raízes"
            />

            <div className="portfolio-caption">
              Restauração de Piso de Madeira
            </div>
          </article>

          <article className="portfolio-item">
            <img
              src="/IMG-20250113-WA0059.jpg"
              alt="Aplicação de acabamento em piso de madeira pela 7 Raízes"
            />

            <div className="portfolio-caption">
              Aplicação de Acabamento
            </div>
          </article>

          <article className="portfolio-item">
            <img
              src="/IMG-20250113-WA0061.jpg"
              alt="Serviço de restauração de piso realizado pela 7 Raízes"
            />

            <div className="portfolio-caption">
              Restauração e Renovação
            </div>
          </article>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">DEPOIMENTOS</p>

          <h2>O que dizem nossos clientes</h2>
        </div>

        <div className="testimonials-grid">
          <article className="testimonial-card">
            <p>
              “O piso do meu apartamento de taco antigo ficou novo de novo!
              Agilidade no atendimento e um acabamento verdadeiramente
              impecável.”
            </p>

            <strong>— SÉRGIO A. (JARDINS, SP)</strong>
          </article>

          <article className="testimonial-card">
            <p>
              “Trabalho de extrema precisão. A calafetação ficou perfeita e o
              acabamento acetinado valorizou muito nossa sala.”
            </p>

            <strong>— CARLA M. (MOEMA, SP)</strong>
          </article>

          <article className="testimonial-card">
            <p>
              “Atendimento impecável desde o orçamento. Pontual e o resultado
              final no assoalho de ipê superou as expectativas.”
            </p>

            <strong>— ROBERTO V. (PINHEIROS, SP)</strong>
          </article>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="cta">
        <p className="eyebrow">RESTAURE A HISTÓRIA DO SEU PISO</p>

        <h2>Seu piso tem uma história.</h2>

        <p>Nós ajudamos a continuar ela.</p>

        <a
          className="btn btn-primary"
          href="https://wa.me/5511970200771?text=Ol%C3%A1,%20quero%20solicitar%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
        >
          SOLICITAR ORÇAMENTO
        </a>
      </section>

      {/* RODAPÉ */}
      <footer>
        <p>
          © 2026 7 Raízes - Restauração de Pisos Nobres. Todos os direitos
          reservados.
        </p>

        <p>
          Contato: 7raizespisonobre@gmail.com | (11) 97020-0771
        </p>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        className="whatsapp-btn"
        href="https://wa.me/5511970200771?text=Ol%C3%A1,%20vim%20pelo%20site%20da%207%20Ra%C3%ADzes."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a 7 Raízes pelo WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
          />
          <path
            fill="currentColor"
            d="M16.03 3.2c-7.08 0-12.84 5.75-12.84 12.82 0 2.26.59 4.46 1.72 6.4L3.1 28.8l6.54-1.72a12.84 12.84 0 0 0 6.39 1.69h.01c7.07 0 12.82-5.75 12.82-12.82 0-3.43-1.33-6.65-3.76-9.07A12.74 12.74 0 0 0 16.03 3.2zm0 23.45h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.88 1.02 1.04-3.78-.25-.39a10.62 10.62 0 1 1 8.89 4.86z"
          />
        </svg>
      </a>
    </>
  );
                }
