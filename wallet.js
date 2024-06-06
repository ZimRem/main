async function connectWallet() {
    // Initialize TON Client
    const { TonClient, signerKeys } = window.tonclient;
    TonClient.useBinaryLibrary(window.libWeb);

    const client = new TonClient({
        network: {
            server_address: 'https://main.ton.dev'
        }
    });

    // Request permissions to access wallet
    try {
        const response = await client.crypto.generate_random_sign_keys();
        console.log('Wallet connected:', response);
        alert('Wallet connected successfully!');
        // You can now use the wallet address and keys for transactions
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet.');
    }
}
