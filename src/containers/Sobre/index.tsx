import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';

import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>

    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur
      magnam natus nesciunt a sint ut asperiores odio esse reiciendis, ducimus
      culpa id harum labore hic ad non cupiditate mollitia.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=karolinepodlasinski83&show_icons=true&theme=dracula"
        alt="GitHub stats"
      />

      <img
        height="180em"
        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=karolinepodlasinski83&layout=compact&theme=dracula"
        alt="Top languages"
      />
    </GithubSecao>
  </section>
);

export default Sobre;
