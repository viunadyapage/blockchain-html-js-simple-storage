// imports
const { ethers } = require("hardhat")
// async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    
    // PASTIKAN MENGGUNAKAN .address BUKAN .target
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    
    // Tunggu sampai deploy selesai (optional tapi recommended)
    await simpleStorage.deployed()
    console.log("Contract successfully deployed!")
}

// main
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
})