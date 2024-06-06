async function connectWallet() {
    // Initialize TON Connect
    const TonConnect = TonConnectSdk.TonConnect;

    const tonConnect = new TonConnect({
        manifestUrl: 'https://raw.githubusercontent.com/ton-connect/demo-dapp/main/tonconnect-manifest.json',
    });

    tonConnect.onStatusChange((walletInfo) => {
        if (walletInfo.connected) {
            console.log('Wallet connected:', walletInfo);
            alert('Wallet connected successfully!');
        } else {
            console.log('Wallet disconnected');
        }
    });

    try {
        await tonConnect.connect();
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet.');
    }
}
