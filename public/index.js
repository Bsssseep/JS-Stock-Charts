async function main() {
    const API_KEY = 'your_api_key'; // Replace 'your_api_key' with your actual API key from Twelvedata

    const symbol = 'AAPL'; // Example stock symbol, you can change this to any valid symbol

    try {
        const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch stock data');
        }

        const data = await response.json();
        console.log(data); // Display the fetched data in the console or process it as needed
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

main();


