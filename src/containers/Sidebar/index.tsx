import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { Descriçao, BotaoTema, SidebarContainer } from './styles';

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Karoline Podlasinski</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        KarolinePodlasinski83
      </Paragrafo>
      <Descriçao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descriçao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
