// pages/index.js
import News from '../Components/News';

export default function Home() {
  const pageSize = 12;
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API; // Note: NEXT_PUBLIC prefix
  const setProgress = (progress) => {
    // You can implement loading bar logic here if needed
    console.log('Progress:', progress);
  };
  return (
    <News 
      setProgress={setProgress}  // Pass it here
      apiKey={apiKey} 
      pageSize={pageSize} 
      country='us' 
      category='general' 
    />
  );
}
