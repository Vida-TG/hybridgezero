import React from 'react'
import { Avalanche } from "avalanche"
import "./main.css"
import cross from '../cross.png'
import ape from "./ape.png"
import joe from "./joe.png"
import avax from "./avax.png"
import eth from "./eth.png"

const Main = () => {
  const avalanche = new Avalanche("127.0.0.1", 9650)
  return (
    <div className="main">
        <div className="full-card">
            <div  className='card-body'>
                <div className="head">
                    SWAP
                </div>
                <div className="swap swap-1">
                    <input className="swap-input" />
                    <div className="token token1">
                        <div className='token-in-swap'>
                            <img src={joe} />
                        </div>
                        <div className='chain-in-swap'>
                            on AVAX <img src={avax} />
                        </div>
                    </div>
                </div>
                <div className="crossover">
                    <img src={cross} />
                </div>
                <div className="swap swap-2">
                    <input className="swap-input" />
                    <div className="token token2">
                        <div className='token-in-swap'>
                            <img src={ape} />
                        </div>
                        <div className='chain-in-swap'>
                            on ETH <img src={eth} />
                        </div>
                    </div>
                </div>
                <div className="swap-btn">
                    <button>
                        SWAP
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main