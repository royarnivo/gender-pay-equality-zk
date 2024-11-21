Encode Group-9: gender-pay-equality-zk



# Gender Pay Equality ZK-Proof System

This repository implements a Zero-Knowledge Proof system to verify salary equality without revealing actual salaries, helping identify gender pay disparities while maintaining privacy.

## Overview
The system allows two parties to prove whether their salaries are equal without revealing the actual amounts, using ZK-SNARKs technology.

## Prerequisites
- Node.js v14+
- Hardhat
- circom 2.0
- snarkjs

## Project Structure
gender-pay-equality-zk/
│
├── contracts/
│   └── SalaryComparator.sol
│
├── circuits/
│   └── salary_compare.circom
│
├── scripts/
│   ├── deploy.ts
│   └── generate_proof.js
│
├── test/
│   └── salary_compare.test.js
│
├── package.json
├── hardhat.config.ts
└── README.md

## Installation:

bash
git clone https://github.com/yourusername/gender-pay-equality-zk
mkdir gender-pay-equality-zk
cd gender-pay-equality-zk
npm init -y
npm install
npm install hardhat @nomiclabs/hardhat-ethers ethers circom snarkjs chai

bash
Compile the circuit
circom circuits/salary_compare.circom --r1cs --wasm --sym
Generate the proving key
snarkjs groth16 setup circuit.r1cs pot12_final.ptau circuit_final.zkey

bash
npx hardhat run scripts/deploy.ts --network <your-network>

Generate a proof
node scripts/generate_proof.js

Verify on-chain
npx hardhat test


javascript
// Generate proof for two salaries
const { proof, publicSignals } = await generateProof(100000, 100000);
// Verify on-chain
const result = await comparator.verifyProof(proof, publicSignals);
console.log("Salaries are equal:", result);




