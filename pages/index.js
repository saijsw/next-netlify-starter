import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Web3Button } from "@thirdweb-dev/react";

export default function Component() {
  return (
    <Web3Button
      contractAddress="0xC3F4dF7076Dc21de4Ef5F82bC7cA29a418a88A52"
      action={(contract) => {
        contract.call("approve", [spender, amount])
      }}
    >
      approve
    </Web3Button>
  )
}
// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("mumbai", {
  clientId: "ab651fdd7eb84a79ee19e4631b5ad25a",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK("mumbai", {
  secretKey: "wJIt8ZhbxkhPK22qJBx-hiDumFVnQihui0iEdGPM2QDNArWBHeCTblm7hiUtdx-hpXsbc6yyJXu9WB6yXZEWsQ",
});

const contract = await sdk.getContract("0xC3F4dF7076Dc21de4Ef5F82bC7cA29a418a88A52");
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
