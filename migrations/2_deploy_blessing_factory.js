require('dotenv').config()

const BlessingFactory = artifacts.require("TenguBlessingFactory");


module.exports = async function(deployer, network, accounts) {
    deployer.deploy(BlessingFactory)
}