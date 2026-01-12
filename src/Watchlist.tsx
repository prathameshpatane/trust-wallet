import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  volume: string;
  marketCap: string;
  positive: boolean;
  image?: string;
}

const COINGECKO_SIMPLE_PRICE_API = 'https://api.coingecko.com/api/v3/simple/price';

const TARGET_CRYPTOS = [
  'bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'solana', 'tron', 'dogecoin'
];

const CRYPTO_METADATA = {
  'bitcoin': { symbol: 'BTC', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
  'ethereum': { symbol: 'ETH', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
  'tether': { symbol: 'USDT', name: 'Tether', image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png' },
  'binancecoin': { symbol: 'BNB', name: 'BNB', image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png' },
  'ripple': { symbol: 'XRP', name: 'XRP', image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png' },
  'solana': { symbol: 'SOL', name: 'Solana', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
  'tron': { symbol: 'TRX', name: 'Tron', image: 'https://assets.coingecko.com/coins/images/10978/large/tron-logo.png' },
  'dogecoin': { symbol: 'DOGE', name: 'Dogecoin', image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png' }
};

const MOCK_MARKET_DATA = {
  'bitcoin': { marketCap: 1320000000000, volume: 28000000000, change: 2.1, rank: 1 },
  'ethereum': { marketCap: 420000000000, volume: 15000000000, change: 1.8, rank: 2 },
  'tether': { marketCap: 95000000000, volume: 42000000000, change: 0.01, rank: 3 },
  'binancecoin': { marketCap: 75000000000, volume: 1200000000, change: -0.5, rank: 4 },
  'ripple': { marketCap: 38000000000, volume: 1800000000, change: 3.2, rank: 5 },
  'solana': { marketCap: 68000000000, volume: 2800000000, change: 4.5, rank: 6 },
  'tron': { marketCap: 8000000000, volume: 650000000, change: 1.2, rank: 7 },
  'dogecoin': { marketCap: 13000000000, volume: 950000000, change: 2.8, rank: 8 }
};

const formatPrice = (price: number): string => {
  if (price < 0.01) return `$${price.toFixed(6)}`;
  if (price < 1) return `$${price.toFixed(4)}`;
  if (price < 100) return `$${price.toFixed(2)}`;
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
  return `$${marketCap.toLocaleString()}`;
};

const formatVolume = (volume: number): string => {
  if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
  if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`;
  return `$${volume.toLocaleString()}`;
};

const formatChange = (change: number): string => {
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
};

const getRealTimePrices = async () => {
  try {
    const ids = TARGET_CRYPTOS.join(',');
    const response = await fetch(`${COINGECKO_SIMPLE_PRICE_API}?ids=${ids}&vs_currencies=usd`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching real-time prices:', error);
    return {
      'bitcoin': { usd: 67000 }, 'ethereum': { usd: 3500 }, 'tether': { usd: 1 },
      'binancecoin': { usd: 500 }, 'ripple': { usd: 0.7 }, 'solana': { usd: 150 },
      'tron': { usd: 0.08 }, 'dogecoin': { usd: 0.12 }
    };
  }
};

const getFormattedCryptos = async (): Promise<CryptoPrice[]> => {
  try {
    const realTimePrices = await getRealTimePrices();
    return TARGET_CRYPTOS.map(cryptoId => {
      const metadata = CRYPTO_METADATA[cryptoId as keyof typeof CRYPTO_METADATA];
      const marketData = MOCK_MARKET_DATA[cryptoId as keyof typeof MOCK_MARKET_DATA];
      const realPrice = realTimePrices[cryptoId]?.usd || 0;
      
      return {
        id: cryptoId,
        symbol: metadata.symbol,
        name: metadata.name,
        price: formatPrice(realPrice),
        change: formatChange(marketData.change),
        volume: formatVolume(marketData.volume),
        marketCap: formatMarketCap(marketData.marketCap),
        positive: marketData.change >= 0,
        image: metadata.image
      };
    });
  } catch (error) {
    console.error('Error formatting crypto data:', error);
    throw error;
  }
};

const BodyRow = ({ row }: { row: CryptoPrice }) => {
  const renderPercentage = (change: string, positive: boolean) => {
    return (
      <Box 
        display="flex" 
        justifyContent="flex-end" 
        alignItems="center" 
        sx={{
          color: positive ? '#00C853' : '#FF1744',
          fontWeight: 600
        }}
      >
        {positive ? 
          <ArrowDropUpIcon sx={{ color: '#00C853' }} /> : 
          <ArrowDropDownIcon sx={{ color: '#FF1744' }} />
        }
        <span>{change}</span>
      </Box>
    );
  };

  return (
    <TableRow 
      sx={{
        '&:hover': {
          backgroundColor: '#f5f5f5',
          cursor: 'pointer'
        },
        '&:nth-of-type(even)': {
          backgroundColor: '#fafafa'
        }
      }}
    >
      <TableCell sx={{ fontWeight: 600, color: '#666' }}>
        {MOCK_MARKET_DATA[row.id as keyof typeof MOCK_MARKET_DATA]?.rank}
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src={row.image} 
            sx={{ 
              width: 32, 
              height: 32, 
              mr: 2,
              border: '1px solid #e0e0e0'
            }} 
          />
          <Box>
            <Box sx={{ fontWeight: 600, color: '#333' }}>
              {row.name}
            </Box>
            <Box sx={{ fontSize: '0.875rem', color: '#666' }}>
              {row.symbol}
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="right" sx={{ fontWeight: 600, fontSize: '1rem' }}>
        {row.price}
      </TableCell>
      <TableCell align="right">{renderPercentage(row.change, row.positive)}</TableCell>
      <TableCell align="right" sx={{ fontWeight: 500, color: '#555' }}>
        {row.marketCap}
      </TableCell>
      <TableCell align="right" sx={{ fontWeight: 500, color: '#555' }}>
        {row.volume}
      </TableCell>
    </TableRow>
  );
};

function Watchlist() {
  const [cryptos, setCryptos] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFormattedCryptos();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptos:', error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</Box>;

  return (
    <Box sx={{ 
      width: '100vw', 
      height: '100vh', 
      p: 0, 
      m: 0,
      backgroundColor: '#f8f9fa'
    }}>
      <Box sx={{ 
        p: 3, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '2.5rem',
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Watchlist
        </h1>
        <p style={{ margin: '8px 0 0 0', opacity: 0.9 }}>
          Track your favorite cryptocurrencies in real-time
        </p>
      </Box>
      <TableContainer 
        component={Paper} 
        sx={{ 
          width: '100%', 
          height: 'calc(100vh - 140px)', 
          m: 0,
          borderRadius: 0,
          boxShadow: 'none'
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{
              '& .MuiTableCell-head': {
                backgroundColor: '#fff',
                fontWeight: 700,
                color: '#333',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderBottom: '2px solid #e0e0e0'
              }
            }}>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">24h %</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptos.map(crypto => (
              <BodyRow key={crypto.id} row={crypto} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Watchlist;