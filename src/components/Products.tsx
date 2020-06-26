import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Product } from "../types/productsTypes";
import '../css/products.css'
import '../css/app.css'

const Products: React.FC = () => {
    const games: Product[] = useSelector((state: any) => state.productsReducer.products)
    // const aLotOfGames: Product[] = games.concat(...games).concat(...games).concat(...games).concat(...games).concat(...games);
    const dispatch = useDispatch()

    const onButtonClick = (item: Product) => {
        dispatch(addToCart(item));
    }

    return (
        <div className={'flex-container-page'}>
            {games.map(game => {
                    return (
                        <div className={'game'}>
                            <p>{game.title}</p>
                            <p>{game.category}</p>
                            <p>Price: {game.price}</p>
                            <br />
                            <img src={game.thumbnail} width={'100px'} height={'100px'} alt={game.title} />
                            <br />
                            <br />
                            <button className={'button'} type="button" onClick={() => onButtonClick(game)}>Add to
                                cart
                            </button>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default Products;
