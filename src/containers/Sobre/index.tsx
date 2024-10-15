import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic et omnis
      dicta libero in consequuntur debitis, quos, dolores, adipisci officiis!
      Sunt, repudiandae nobis officia asperiores neque architecto placeat rerum.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=F3lipeB&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=F3lipeB&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
