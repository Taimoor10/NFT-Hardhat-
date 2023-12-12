import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC721", function() {
    async function ERC721Fixture() {
        const ERC721 = await ethers.getContractFactory("ERC721");
        const [owner, addr1 ,addr2 ] = await ethers.getSigners();
        const erc721 = await ERC721.deploy("Doggo", "D");
        await erc721.deployed();
        
        return {ERC721, erc721, owner, addr1, addr2};
    }
    it("Deploys successfully", async() => {
        const { erc721 } = await loadFixture(ERC721Fixture);
        expect(erc721.address).to.not.be.undefined;
        expect(erc721.address).to.not.equal(null);
        expect(erc721.address).to.not.equal(0x0);
        expect(erc721.address).to.not.equal('');
    })

    it("Should deploy the contract with correct name and symbol", async() => { 
        const { erc721 } = await loadFixture(ERC721Fixture);
        expect(await erc721.name()).to.equal("Doggo");
        expect(await erc721.symbol()).to.equal("D");
    });

    it("Creates a New Token", async() => {
        const { erc721 } = await loadFixture(ERC721Fixture);
        const result = await erc721.mint("EC058E");
        const totalSupply = await erc721.totalSupply();
        expect(totalSupply).to.equal(1);
    })

    it("Should emit Transfer event", async() => {
        const { erc721, owner } = await loadFixture(ERC721Fixture);
        await expect(erc721.connect(owner).mint("EC058E"))
            .to.emit(erc721, "Minted")
            .withArgs(owner.address, "EC058E");
    })

    it("Should support interface", async() => {
        const { erc721 } = await loadFixture(ERC721Fixture);
        expect(await erc721.supportsInterface("0x5b5e139f")).to.be.true;
    })

    it("Should not mint the same color twice", async() => {
        const { erc721 } = await loadFixture(ERC721Fixture);
        await erc721.mint("EC058E");
        await expect(erc721.mint("EC058E")).to.be.reverted;
    })
});