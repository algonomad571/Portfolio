export default async function handler(req, res) {
    const apiUrl = 'https://leetcode-stats-api.herokuapp.com/Algonomad571';
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
    }
  }
  