import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;
  
  const Tokenite = await ethers.getContractFactory("Tokenite");
  const tokenite = await Tokenite.deploy();

  await tokenite.deployed();
  fs.writeFile("/Users/muhammadtaimoor/personal git/Projects-Repository/NFT(Hardhat-Typescript)/src/ERC721Address.json", `{"address": "${tokenite.address}"}`, function(err){
    if(err)
    {
        throw err
    }
  });
  
  console.log(
    `Deployed at timestamp ${unlockTime} deployed to ${tokenite.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
