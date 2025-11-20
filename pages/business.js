// pages/business.js
import News from '../Components/News';

export default function Business({setProgress}) {
  const pageSize = 12;
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;

  return (
    <News 
      apiKey={apiKey} 
      pageSize={pageSize} 
      country='us' 
      category='business'
      setProgress={setProgress} 
    />
  );
}
    