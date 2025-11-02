import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
import { abi, contractAddress } from "./constants.js";

// DOM Elements
const connectButton = document.getElementById("connectMetamask");
const storeButton = document.getElementById("store");
const storeInput = document.getElementById("inputStore");
const retrieveButton = document.getElementById("retrieve");
const outputFavNumber = document.getElementById("fav-num");

let provider;
let signer;
let contract;

const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        connectButton.innerText = "Connected";
        
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);
        
    } else {
        alert("Please install MetaMask!");
    }
}

connectButton.onclick = connect;

const retrieve = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const currvalue = await contract.retrieve();
            outputFavNumber.innerHTML = "Favorite Number: " + currvalue.toString();
        } catch (error) {
            console.error(error);
            outputFavNumber.innerHTML = "Error: " + error.message;
        }
    }
}

retrieveButton.onclick = retrieve;

const store = async () => {
    const ethAmount = storeInput.value;
    if (typeof window.ethereum !== "undefined") {
        try {
            const transactionResponse = await contract.store(ethAmount);
            await transactionResponse.wait();
            outputFavNumber.innerHTML = "Favorite Number: " + ethAmount;
            console.log("Done");
        } catch (error) {
            console.error(error);
        }
    }
}

storeButton.onclick = store;