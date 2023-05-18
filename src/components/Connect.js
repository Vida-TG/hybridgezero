import React from 'react'
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'
import './connect.css'
   
export function Connect() {
    const { address, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const [ connectorClicked, setConnectorClicked ] = React.useState(false)
    const { disconnect } = useDisconnect()

    function setTheConnectorClicked() {
      if(connectorClicked){
        setConnectorClicked(false)
      } else {
        setConnectorClicked(true)
      }
    }

    if (isConnected) {
        return (
            <div>
                <div>{address}</div>
                <button onClick={disconnect}>Disconnect</button>
            </div>
        )
    }
   
    return (
      <>

        <button onClick={setTheConnectorClicked} className='connect-btn'>Connect Wallet</button>

        { !connectorClicked ? "" :
          <div className="connect-switch">
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  ' (connecting)'}
              </button>
            ))}
      
            {error && <div>{error.message}</div>}
          </div>
        }
      </>
    )
  }