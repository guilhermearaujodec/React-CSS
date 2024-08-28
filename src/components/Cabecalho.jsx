import styled from "styled-components"

const HeaderCab = styled.header`
    border: 3px solid royalblue;
    padding: 10px;

    h1{
        text-align: center;
    }

    .part1{
        color: orange
    }

    .part2{
        color: purple;
    }


`

export default function Cabecalho(){

    return(

        <HeaderCab>
            <h1>React - CSS</h1>
            <p className="part1">Parágrafo 1</p>
            <p className="part2">Parágrafo 2</p>
        </HeaderCab>
    )
}