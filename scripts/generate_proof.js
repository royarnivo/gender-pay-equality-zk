const snarkjs = require("snarkjs");
const fs = require("fs");

async function generateProof(salary1, salary2) {
    const circuit = await snarkjs.Circuit.load("circuits/salary_compare.circom");
    
    const witness = await circuit.calculateWitness({
        salary1: salary1,
        salary2: salary2
    });
    
    const { proof, publicSignals } = await snarkjs.groth16.prove(
        "circuit_final.zkey",
        witness
    );
    
    return { proof, publicSignals };
}

module.exports = { generateProof };
