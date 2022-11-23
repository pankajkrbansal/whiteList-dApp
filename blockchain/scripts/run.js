const {ethers} = require('hardhat');
const hre = require('hardhat');

async function main(){
    const acc = await hre.ethers.getSigners();
    const contract = await ethers.getContractFactory('WhiteList');
    const contractInstance = await contract.connect(acc[1]).deploy();
    await contractInstance.deployed();

    console.log("Deployed to = ", contractInstance.address);
    // const acc = await hre.ethers.getSigners();
    // console.log("acc1 = ",acc[0].address);
    const [_,account1, account2, account3] = await hre.ethers.getSigners();
    // console.log("Acc1 = ",account1.address);

    let setter = await contractInstance.connect(acc[1]).setWhiteListLimit(50);
    await setter.wait(); //waiting tx to be mined

    let add2 = await contractInstance.connect(acc[7]).addSendertoWhitelist();
    await add2.wait();
    // let add3 = await contractInstance.connect(account1).addSendertoWhitelist();
    // await add3.wait();
}

main()