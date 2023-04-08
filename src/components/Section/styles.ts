import styled from 'styled-components'

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2% 0;
`
export const SectionIntro = styled.div`
align-self: start;
margin-left: 10%;
p{
    margin-top: -10px;
    margin-left: 1%;
    color: #2b2b2b;
    white-space: nowrap;
}
`
export const SectionTitle = styled.h2`
`
export const Table = styled.table`
border-spacing: 0;
box-shadow: 0px 3px 13px 0px rgba(0,0,0,0.75);
margin: 2% 0%;
width: 70%;
thead{
    background-color: black;
    color: whitesmoke;
    height: 6vh;
}
tbody {
    td{
        background-color: #cac9c9cf;
        text-align: center;
        border-bottom: 1px solid gray;
    }
    tr{
        button{
            cursor: pointer;
            margin: 5px 0;
            margin-left: 145%;
            background: none;
            border: 0;
            min-height: 4vh;
            font-weight: 700;
            font-size: 16px;
            color: #ffad1c;
            white-space: nowrap;
        }
    }
}
td{
    padding: 7px;
}
`