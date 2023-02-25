const { expect } = require("chai");

describe("MultiSignWallet", function () {
  let multiSignWallet;
  let owner1, owner2;

  beforeEach(async () => {
    [owner1, owner2] = await ethers.getSigners();
    const MultiSignWallet = await ethers.getContractFactory("MultiSignWallet");
    multiSignWallet = await MultiSignWallet.deploy(
      [owner1.address, owner2.address],
      2
    );
    await multiSignWallet.deployed();
  });

  describe("Deployments", () => {
    it("Should Return Owners", async () => {});
  });
});
