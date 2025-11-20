export default async function handler(req, res) {
  const { category = 'general', country = 'us', page = 1, pageSize = 10 } = req.query;

  try {
    const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API;
    if (!apiKey) {
      return res.status(500).json({
        error: 'Missing API key. Set NEWS_API_KEY or NEXT_PUBLIC_NEWS_API.'
      });
    }

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    );

    // Check if the fetch was successful
    if (!response.ok) {
      const errorData = await response.json();
      console.error('News API Error:', errorData);
      return res.status(response.status).json({ 
        error: errorData.message || 'Failed to fetch news' 
      });
    }

    const data = await response.json();
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(data);
    
  } catch (error) {
    console.error('API Route Error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
