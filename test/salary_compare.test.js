const { expect } = require("chai");
const { ethers } = require("hardhat");
const { generateProof } = require("../scripts/generate_proof");

describe("SalaryComparator", function () {
    let comparator;
    
    beforeEach(async function () {
        const SalaryComparator = await ethers.getContractFactory("SalaryComparator");
        comparator = await SalaryComparator.deploy(
            ethers.utils.formatBytes32String("alpha"),
            ethers.utils.formatBytes32String("beta"),
            ethers.utils.formatBytes32String("beta2"),
            ethers.utils.formatBytes32String("gamma")
        );
        await comparator.deployed();
    });
    
    it("Should verify equal salaries", async function () {
        const salary1 = 100000;
        const salary2 = 100000;
        
        const { proof, publicSignals } = await generateProof(salary1, salary2);
        
        const result = await comparator.verifyProof(proof, [salary1, salary2]);
        expect(result).to.be.true;
    });
});
