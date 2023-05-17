import { infuraProvider } from 'wagmi/providers/infura'
import { mainnet, avalanche } from 'wagmi/chains'
import { createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
 
export const { chains, publicClient } = configureChains(
    [mainnet, avalanche],
    [
        infuraProvider({
            apiKey: process.env.REACT_APP_INFURA_ID,
            stallTimeout: 1_000,
        }),
        publicProvider()
    ]
)
 
export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})