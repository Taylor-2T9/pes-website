import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import {
    Container,
    SectionIntro,
    SectionTitle,
    Table
} from './styles'
import { DataCollections, Element } from '@/interfaces/api/data'
import { joinPages } from '@/utils/array'
import { SectionProps } from '@/interfaces/components/Section'
import types from './types'

const Section: NextPage<SectionProps> = ({
    router,
    data,
    type
}) => {
    const [renderedContent, setRenderedContent] = useState<Element[]>([])
    const [top3, setTop3] = useState<Element[]>([])

    useEffect(() => {
        if (router.query.tab && data[`${router.query.tab}`].content) {
            setRenderedContent(data[`${router.query.tab}`].content[0])
            const topElements = []
            for (let i = 0; i < 3; i++)
                topElements.push(data[`${router.query.tab}`].content[0][i])
            setTop3(topElements)
        }
        else if (data.players.content) {
            setRenderedContent(data.players.content[0])
            const topElements = []
            for (let i = 0; i < 3; i++)
                topElements.push(data.players.content[0][i])
            setTop3(topElements)
        }
    }, [router.query.tab, data])

    return (
        <Container>
            <SectionIntro>
                <SectionTitle>{types[`${type}`].label}</SectionTitle>
                <p>
                    {types[`${type}`]
                        .getDescription(data[
                            `${router.query.tab ? router.query.tab : 'players'}`
                        ].label)}
                </p>
            </SectionIntro>
            {type === 'table' ? <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Títulos</th>
                        <th>Vice-campeão</th>
                        <th>Participações</th>
                    </tr>
                </thead>
                <tbody>
                    {router.query.tab ?
                        renderedContent.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Nome}</td>
                                <td>{item.Titulos}</td>
                                <td>{item.Vice}</td>
                                <td>{item.Participacoes}</td>
                            </tr>
                        )) : renderedContent.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Nome}</td>
                                <td>{item.Titulos}</td>
                                <td>{item.Vice}</td>
                                <td>{item.Participacoes}</td>
                            </tr>
                        ))}
                    {router.query.tab ?
                        renderedContent.length + 8 <= (data[`${router.query.tab as keyof DataCollections}`]?.content?.length) * 8
                            ? (
                                <tr id='more'>
                                    <button
                                        onClick={() => {
                                            const currentPage = Math.ceil(renderedContent.length / 8)
                                            const newPage = data[`${router.query.tab as keyof DataCollections}`].content[currentPage]
                                            const finalArray = joinPages(renderedContent, newPage)
                                            setRenderedContent(finalArray)
                                        }}
                                    >
                                        Ver mais
                                    </button>
                                </tr>
                            ) : ''
                        : renderedContent.length + 8 <= (data.players?.content?.length) * 8
                            ? (
                                <tr id='more'>
                                    <button
                                        onClick={() => {
                                            const currentPage = Math.ceil(renderedContent.length / 8)
                                            const newPage = data.players?.content[currentPage]
                                            const finalArray = joinPages(renderedContent, newPage)
                                            setRenderedContent(finalArray)
                                        }}
                                    >
                                        Ver mais
                                    </button>
                                </tr>
                            ) : ''}
                </tbody>
            </Table>
                :
                <div>
                    {top3.map((item, index) => (
                        <h4 key={index}>{item.Nome}</h4>
                    ))}
                </div>
            }
        </Container>
    )
}
export default Section