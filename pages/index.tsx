import NewsArticlesGrid from '@/components/NewsArticlesGrid';
import { NewsArticle, NewsResponse } from '@/modules/NewsArticles';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Alert } from 'react-bootstrap';

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles }
  }
  // let error go to 500 page
}

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">News Journey </title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        <Alert> 
        <strong>News Journey</strong> is a news app that provides the latest news from all over the world. It has <strong>search</strong> functionality, <strong>categories</strong> sections. Developed by <strong>Priyanshu Negi</strong>. 
        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  )
}