import { Container, Profile, Search, Brand } from './styles'
import { Input } from "../../components/Input";


export function Header() {
    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            <Search>
                <Input
                    placeholder="Pesquisar pelo título"
                />
            </Search>
            <Profile to="/profile">


                <div>
                    <strong>Weleson Batista</strong>
                    <span to="/register">Sair</span>
                </div>
                <img
                    src="https://github.com/welesonbatista.png"
                    alt="Foto do usuário"
                />
            </Profile>


        </Container>
    )
}