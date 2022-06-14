import React from "react";
import CardsProps from "../../Atoms/CategoriesCards/cardsProps";
import MainCarrousel from "../../Context/MainCarrousel";

// importando as imagens dos alimentos
import sushiRice from "../../../../public/assets/img/sushiRice.png";
import lettuce from "../../../../public/assets/img/lettuce.png";
import steakRaw from "../../../../public/assets/img/steakRaw.png";
import cakePiece from "../../../../public/assets/img/cakePiece.png";
import sanduich from "../../../../public/assets/img/sanduich.png";
import chocolateBar from "../../../../public/assets/img/chocolateBar.png";

//importando o fundo das imagens
import sushiRiceBackground from "../../../../public/assets/img/sushiRiceBackground.png";
import lettuceBackground from "../../../../public/assets/img/lettuceBackground.png";
import steakRawBackground from "../../../../public/assets/img/steakRawBackground.png";
import cakePieceBackground from "../../../../public/assets/img/cakePieceBackground.png";
import sanduichBackground from "../../../../public/assets/img/sanduichBackground.png";
import chocolateBarBackground from "../../../../public/assets/img/chocolateBarBackground.png";



const CategoriesCards = () => {
    return (
        <>
            <MainCarrousel 
                mainImage={sushiRice}
                secondaryImage={sushiRiceBackground}
            />

        </>
    )
}

export default CategoriesCards