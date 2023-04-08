import Head from 'next/head'
import axios from 'axios'
import React from 'react'
import {
    Container,
} from '@/components/pages/home/styles'
import { useRouter } from 'next/router'
import { Router } from '@/interfaces/pages/home'
import { Collection, DataCollections } from '@/interfaces/api/data'
import Section from '@/components/Section'
import Header from '@/components/Header'

const Home = () => {
    const router: Router = useRouter()
    const [data, setData] = React.useState<DataCollections>({
        players: {} as Collection,
        teams: {} as Collection,
        chars: {} as Collection
    })
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/data')
            setData({
                players: response.data[0],
                teams: response.data[1],
                chars: response.data[2]
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <Head>
                <title>Os Campeões do PES</title>
                <meta
                    name="description"
                    content="Esse é o repositório do grupo mais pro-player de PES já criado!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Header router={router} />
                <Section data={data} router={router} type={'table'} />
                <Section data={data} router={router} type={'top3'} />
            </Container>
        </>
    )
}
export default Home