export default async function handler(req, res) {
  const { category = 'general', country = 'us', page = 1, pageSize = 10 } = req.query;

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
