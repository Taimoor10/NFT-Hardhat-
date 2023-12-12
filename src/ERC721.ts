import { ethers } from "hardhat";
import fs from "fs";

async function main()
{   
    // await mint("#5e32b2");
    // await totalSupply();
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    console.log(owner.address, addr1.address);
    await insertStruct(addr1, 29, "Yeah", "Jonny", ["Singing", "Guitaring"]);
    await callStruct(addr1.address);
    await studentToInstructor( addr1.address, true);
    await studentToInstructorCall();
}

async function fixture() {
    const ERC721 = await ethers.getContractFactory("ERC721");
    const erc721Address = fs.readFileSync("/Users/muhammadtaimoor/personal git/Projects-Repository/NFT(Hardhat-Typescript)/src/ERC721Address.json", "utf-8");
    const erc721 = ERC721.attach(JSON.parse(erc721Address).address);
    return erc721;
}

async function insertStruct(addr1: any, age: number, first_name: string, last_name: string, hobbies : string[] ) {
    const erc721 = await fixture();
    const tx = await erc721.connect(addr1).insertStruct(age, first_name, last_name, hobbies);
    const response = await tx.wait();
    console.log("Inserted a struct", response);
}

async function studentToInstructor(addresses: string, status: boolean) {
    const erc721 = await fixture();
    const tx = await erc721.studentToInstructor(addresses, status);
    const response = await tx.wait();
    console.log("Student to Instructor", response);
}

async function studentToInstructorCall() {
    const erc721 = await fixture();
    const response = await erc721.studentToInstructorCall();
    console.log("Called a student mapping", response);
}

async function callStruct(address : string) {
    const erc721 = await fixture();
    const response = await erc721.callStruct(address);
    console.log("Called a struct", response);
}

async function mint(color: string) {
    try {
        const erc721 = await fixture();
        const tx = await erc721.mint(color);
        const response = await tx.wait()
        console.log("Minted:", response);
    }
    catch(err : any)
    {
        if(err)
        {
            console.log(err.message);
        }
    }
}

async function totalSupply() {
    const erc721 = await fixture();
    const result = await erc721.totalSupply();
    console.log("Total Supply",  ethers.utils.formatUnits(result, 0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});