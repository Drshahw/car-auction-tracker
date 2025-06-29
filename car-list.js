export default async function handler(req, res) {
  try {
    const response = await fetch('https://erpapi.alqaryahauction.com/api/public/car-list');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error('API fetch failed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
