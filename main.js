document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectButton');
    const accountAddressElement = document.getElementById('accountAddress');
    const accountBalanceElement = document.getElementById('accountBalance');

    let currentAccount;

    async function connectToWeb3() {
        try {
            // Modern dapp browsers...
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                currentAccount = accounts[0];
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                window.web3.eth.getAccounts(function (error, accounts) {
                    currentAccount = accounts[0];
                });
            }
            // Non-dapp browsers...
            else {
                alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }

            updateAccountInfo();
        } catch (error) {
            console.error(error);
        }
    }

    function updateAccountInfo() {
        if (currentAccount) {
            accountAddressElement.textContent = currentAccount;
            
            // Example: Fetch account balance (requires appropriate Web3 provider)
            // Replace this with your specific use case
            // const balance = await web3.eth.getBalance(currentAccount);
            // accountBalanceElement.textContent = balance;
        } else {
            accountAddressElement.textContent = 'Not connected';
            accountBalanceElement.textContent = 'N/A';
        }
    }

    connectButton.addEventListener('click', connectToWeb3);
});
