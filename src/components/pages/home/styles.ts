import styled from 'styled-components'

export const Title = styled.h1`
position: absolute;
user-select: none;
color: whitesmoke;
font-size: 3em;
left: 28%;
top: 13%;
-webkit-text-stroke-width: 3px;
-webkit-text-stroke-color: black;
`
export const Container = styled.div`
`
export const Navbar = styled.div`
display: flex;
user-select: none;
justify-content: space-between;
align-items: flex-end;
width: 100%;
max-height: 10vh;
background-color: #474747;
button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color: #474747;
    width: 4.8%;
    padding: 0 25px;
    margin: 0 15px 5px 50px;
    border: 0px;
    border-radius: 50%;
    align-: center;
    &:hover {
        background: #626262;
    }
}
`
export const Subtitle = styled.h2`
text-align: left;
padding: 0 30px;
color: whitesmoke;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
`
export const ListArea = styled.div`
display: flex;
`
export const OptionsList = styled.ul`
display: flex;
list-style-type: none;
`
export const Option = styled.li`
cursor: pointer;
color: whitesmoke;
font-weight: 500;
padding: 0 20px;
margin: 0 10px;
margin-bottom: 5px;
`
export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
margin-top: 2%;
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
}
td{
    padding: 7px;
}
`