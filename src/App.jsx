function App() {
  return (
    <div className="text-center py-10 px-4">
      <img src="https://gateway.pinata.cloud/ipfs/bafybeiactssd75k6tdnvw3ywbr2lrvaaepy2xkau2ggrd3jfgolhx4nrre" alt="DesiDawg Logo" className="mx-auto w-32 rounded-full" />
      <h1 className="text-4xl font-bold mt-4">DesiDawg</h1>
      <p className="text-lg text-gray-600 mt-2">Adopt an Indie, Earn the BARK</p>
      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Mint Address:</strong></p>
        <p>5TM5E8NyYjbGBSvEdkfPCwUoXYdTx3z8VVvzuvZNisRm</p>
        <p className="mt-2">Fixed Supply: 10,000,000,000</p>
        <p>Decimals: 9</p>
        <a href="https://explorer.solana.com/address/5TM5E8NyYjbGBSvEdkfPCwUoXYdTx3z8VVvzuvZNisRm?cluster=devnet" target="_blank" className="text-blue-500 underline mt-2 inline-block">View on Solana Explorer</a>
      </div>
    </div>
  )
}

export default App