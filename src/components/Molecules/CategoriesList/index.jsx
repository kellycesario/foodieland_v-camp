import React from "react";
import CategoriesCards from "../../Atoms/CategoriesCards";



// importando as imagens dos alimentos
import sushiRice from "@img/sushiRice.png";
import lettuce from "@img/lettuce.png";
import steakRaw from "@img/steakRaw.png";
import cakePiece from "@img/cakePiece.png";
import sanduich from "@img/sanduich.png";
import chocolateBar from "@img/chocolateBar.png";

// importando o fundo das imagens
import sushiRiceBackground from "@img/sushiRiceBackground.png";
import lettuceBackground from "@img/lettuceBackground.png";
import steakRawBackground from "@img/steakRawBackground.png";
import cakePieceBackground from "@img/cakePieceBackground.png";
import sanduichBackground from "@img/sanduichBackground.png";
import chocolateBarBackground from "@img/chocolateBarBackground.png";



const CategoriesList = () => {
    return (
        <>
            <CategoriesCards
                foodSymbol = {sushiRice}
                foodBackground = {sushiRiceBackground}
                title= "Breakfest"
            />
            <CategoriesCards
                foodSymbol = {lettuce}
                foodBackground = {lettuceBackground}
                title= "Vegan"
            />
            <CategoriesCards
                foodSymbol = {steakRaw}
                foodBackground = {steakRawBackground}
                title= "Meat"
            />
            <CategoriesCards
                foodSymbol = {cakePiece}
                foodBackground = {cakePieceBackground}
                title= "Dessert"
            />
            <CategoriesCards
                foodSymbol = {sanduich}
                foodBackground = {sanduichBackground}
                title= "Lunch"
            />
            <CategoriesCards
                foodSymbol = {chocolateBar}
                foodBackground = {chocolateBarBackground}
                title= "Chocolate"
            />
        </>
    )
}

export default CategoriesList