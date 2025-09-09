# Solana Crowd Funding dApp

A decentralized crowdfunding platform built on Solana.

## Problem Statement

Traditional crowdfunding platforms are centralized, often charge high fees, and can be subject to censorship. Donors have little transparency into how funds are managed and used.

## Our Solution

This project is a decentralized application (dApp) on the Solana blockchain that allows anyone to create and contribute to fundraising campaigns. By leveraging the speed and low transaction costs of Solana, we provide a transparent, secure, and censorship-resistant alternative to traditional crowdfunding.

## Features

*   **Create Campaigns:** Anyone can create a fundraising campaign with a goal and a description.
*   **Donate to Campaigns:** Users can easily donate SOL to their favorite campaigns.
*   **Withdraw Funds:** Campaign creators can withdraw the donated funds.
*   **Transparency:** All transactions are recorded on the Solana blockchain, providing full transparency to donors.
*   **Low Fees:** Solana's low transaction fees make it affordable to create and donate to campaigns.

## Live Demo

https://68c073f812f3525f973bb155--solana-crowdfuncding-dapp.netlify.app/

## Demo Video

https://youtu.be/PaaxX-Ke6Q4

## Getting Started

### Prerequisites

- Node.js v18.18.0 or higher
- Rust v1.77.2 or higher
- Anchor CLI 0.30.1 or higher
- Solana CLI 1.18.17 or higher

### Installation

1.  **Clone the repo:**
    ```shell
    git clone https://github.com/Nepker/Solana_CrowdFunding_dapp.git
    cd Solana_CrowdFunding_dapp
    ```

2.  **Install Dependencies:**
    ```shell
    npm install
    ```

3.  **Start the web app:**
    ```shell
    npm run dev
    ```

## For Developers

### Anchor Program

The Solana program is located in the `/anchor` directory.

- **Build the program:**
  ```shell
  npm run anchor-build
```

### Run tests:
```
npm run anchor-test
```

### Deploy to Devnet:
```
npm run anchor deploy
```
