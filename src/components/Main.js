import React from 'react'
import "./main.css"
import cross from '../cross.png'

const Main = () => {

  return (
    <div className="main">
        <div className="full-card">
            <div  className='card-body'>
                <div className="head">
                    SWAP
                </div>
                <div className="swap swap-1">
                    <input className="swap-input" />
                    <div className="token token1">PEPE</div>
                </div>
                <div className="crossover">
                    <img src={cross} />
                </div>
                <div className="swap swap-2">
                    <input className="swap-input" />
                    <div className="token token2">PEPE</div>
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