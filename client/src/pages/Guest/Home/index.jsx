import React from 'react';
import Header from '../../../components/Header';

import './style.css';

// fazer links na pagina

const Home = () => {
  return (
    <>
    <Header type="guest" />
    <div className="wrapper">
      
      <main className="home-guest">
        
        <section className="welcome">
          <h2 className="subtitle">
            Bem-vindo ao Correio Elegante! 💌
          </h2>
  
          <p>
            Olá! Estamos muito felizes em vê-lo. Aqui, você pode enviar mensagens anônimas cheias de carinho e gentileza.
          </p>
          <p>
            Navegue pelo nosso site, explore as diferentes opções e não hesite em enviar uma mensagem para alguém especial. Lembre-se, suas palavras têm o poder de trazer um sorriso para o rosto de alguém.
          </p>

          <button className="btn btn-alert">
            Quero enviar o meu Correio
          </button>
        </section>

        <section className="section-common">
          <h2 className="subtitle">
            Confira Nosso Catálogo!
          </h2>

          <p>
            Dê uma olhada nos nossos serviços exclusivos do Correio Elegante! Oferecemos uma variedade de opções para você expressar seus sentimentos de maneira única e especial. Temos tudo para ajudá-lo a demonstrar seu carinho.
          </p>
          <p>
            Não perca tempo, explore nosso catálogo agora mesmo e encontre o serviço perfeito para fazer o dia de alguém mais brilhante!
          </p>

          <button className="btn btn-success">
            Conferir agora!
          </button>
        </section>


        <section className="section-common border-simple-grey">
          <h2 className="subtitle">
            Sua opinião é importante!
          </h2>

          <p>
            Caso queira reportar algum erro, sugestão ou qualquer problema, não tema! Basta apenas clickar no botão logo abaixo e retortar a questão.
          </p>

          <button className="btn btn-warning">
            Reportar!
          </button>
        </section>
        <hr/>
<br/><br/>
      </main>
      
    </div>
    </>
  );
};

export default Home;