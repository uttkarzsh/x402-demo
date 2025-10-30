import express, {Request, Response } from 'express';
import { paymentMiddleware, Resource, Network } from 'x402-express';

const facilitatorUrl = "https://x402.org/facilitator" as Resource;
const network = "base-sepolia" as Network;
const payTo = "0xfe7e0c3c6a72282b02c228ae192a6bba7559c73b";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(paymentMiddleware(payTo,
    {
        "GET /lol": {
            price: "$0.01",
            network: network,
            config: {
                description: "Access to premium content",
            }
        }
    }
))

app.get("/lol", 
  (req, res) => {
    res.json({ message: "This content is behind a paywall" });
  }
);

app.get("/", (req: Request, res: Response) => {
    res.send("hello");
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})