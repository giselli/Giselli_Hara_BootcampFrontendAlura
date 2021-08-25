import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Card from '../src/components/commons/Card';
import SectionTitle from '../src/components/commons/SectionTitle';
import Footer from '../src/components/commons/Footer';
import ProjectsWrapper from '../src/components/foundation/layout/ProjectsWrapper';
import Button from '../src/components/commons/Button';

export default function Home() {
  return (
    <>
      <section id="main">
        <Capa />
        <Cabecalho />
        <ProjectsWrapper.Container>
          <SectionTitle title="Meus Projetos" />
          <ProjectsWrapper.Row>
            <Card
              image="images/image1.png"
              url="https://gi.dev.br"
              title="Página Pessoal"
            />
            <Card
              image="images/image2.png"
              url="https://giselli.dev/"
              title="Meu blog"
            />
            <Card
              image="images/image3.png"
              title="Alurakut - clone do Orkut"
              url="https://alurakut-three-jet.vercel.app/"
            />
          </ProjectsWrapper.Row>
          <ProjectsWrapper.Row>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                // isModalOpen = true;
                setModalState(!isModalOpen);
                // mudando o estado quando o botão é clicado
              }}
            >
            Entre em contato
          </Button>
          </ProjectsWrapper.Row>
        </ProjectsWrapper.Container>
        <Footer />
      </section>
    </>
  );
}
