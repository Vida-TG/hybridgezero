import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <div className="main">
        <div className="full-card">
            <div  className='card-body'>
                <div className="head">
                    SWAP
                </div>
                <div className="swap swap1">
                    <input className="swap-input" />
                    <div className="token token1">PEPE</div>
                </div>
                <div className="swap swap2">
                    <input className="swap-input" />
                    <div className="token token2">PEPE</div>
                </div>
                <div className="swap-btn">
                    <button>CONNECT WALLET</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main