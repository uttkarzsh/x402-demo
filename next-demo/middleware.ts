import { Address } from "viem";
import { paymentMiddleware, Network, Resource } from "x402-next";

const facilitatorUrl = "https://x402.org/facilitator" as Resource;
const payTo = "0xfE7e0C3C6a72282b02C228aE192a6BBa7559c73b" as Address;
const network = "base-sepolia" as Network;

export const middleware = paymentMiddleware( payTo,
    {
        '/fox': {
            price: '$0.01',
            network: network,
            config: {
                description: "Access to Protected Content."
            }
        }
    },
    {
        url: facilitatorUrl
    },
    {
        appName: "x402-Next Demo"
    }
);

export const config = {
  matcher: ["/fox/:path*"],
};