import { ZeroDevEthersProvider, EmptyAccountSigner } from "@zerodev/sdk";
import { Hex } from "@alchemy/aa-core";

const main = async () => {
  const aaProvider = await ZeroDevEthersProvider.init("ECDSA", {
    opts: {
      paymasterConfig: {
        policy: "VERIFYING_PAYMASTER",
      },
    },
    owner: new EmptyAccountSigner(
      "0xF58B221DeFbB4BE25d3421e7B3900EDf99bb7167" as Hex
    ),
    projectId: "b75859e1-8941-40d5-9188-2beb7ce600c6",
  });

  const signer = aaProvider.getAccountSigner();

  const address = await signer?.getAddress();

  console.log("address =>", address);
};

main();
