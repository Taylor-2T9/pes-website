import capa from '../../assets/pes21.jpeg'
import { NextPage } from 'next'
import { HeaderProps } from '@/interfaces/components/Header'
import {
    ListArea,
    Navbar,
    Option,
    OptionsList,
    Subtitle,
    Title
} from "./styles"

const styling = {
    backgroundImage: `url('${capa.src}')`,
    backgroundSize: '100%',
    minHeight: '35vh',
    marginTop: '-7px'
}

const Header: NextPage<HeaderProps> = ({
    router
}) => {

    return (
        <>
            <div style={styling}>
                <Title>Os Campeões do PES 2017</Title>
            </div>
            <Navbar>
                <Subtitle>Compêndio dos Campeonatos</Subtitle>
                <ListArea>
                    <OptionsList>
                        <Option onClick={() => router.push('?tab=players')}>Membros</Option>
                        <Option onClick={() => router.push('?tab=teams')}>Times</Option>
                        <Option onClick={() => router.push('?tab=chars')}>Jogadores</Option>
                    </OptionsList>
                </ListArea>
            </Navbar>
        </>
    )
}
export default Header