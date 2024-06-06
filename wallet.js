async function connectWallet() {
    const { TonConnect, CHAIN, Wallet } = tonconnect;

    // Инициализируем TonConnect
    const tonConnect = new TonConnect({
        manifestUrl: 'https://your-manifest-url.json', // Укажите URL манифеста вашего приложения
    });

    tonConnect.onStatusChange(async (walletInfo) => {
        if (walletInfo.connected) {
            console.log('Wallet connected:', walletInfo);
            alert('Wallet connected successfully!');

            // Получаем адрес кошелька
            const address = walletInfo.wallet.account.address;
            console.log('Wallet address:', address);

            // Здесь можно отправить адрес кошелька на ваш сервер для аутентификации
            // Пример:
            // const response = await fetch('/auth', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ address }),
            // });

            // Обработать ответ от сервера
            // const result = await response.json();
            // console.log('Server response:', result);
        } else {
            console.log('Wallet disconnected');
        }
    });

    try {
        await tonConnect.connect({ chain: CHAIN.TESTNET, access: { useRaw: true } });
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet.');
    }
}
