import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle } from "@/modules/NewsArticles";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import Image from "next/image";
import Saa from "../assets/images/news-journey-high-resolution-logo-color-on-transparent-background.png"


const SearchNewsPage = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const searchQuery = formData.get("searchQuery")?.toString().trim();

        if (searchQuery) {
            try {
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);
                const response = await fetch("/api/search-news?q=" + searchQuery);
                const articles: NewsArticle[] = await response.json();
                setSearchResults(articles);
            } catch (error) {
                console.error(error);
                setSearchResultsLoadingIsError(true);
            } finally {
                setSearchResultsLoading(false);
            }
        }
    }

    return (
        <>
            <Head>
                <title key="title">Search News - NextJS News App</title>
            </Head>
            <main>
                <h1>Search News</h1>
                <Alert> 
        <strong>News Journey</strong> is a news app that provides the latest news from all over the world. It has <strong>search</strong> functionality, <strong>categories</strong> sections. Developed by <strong>Priyanshu Negi</strong>. 
        </Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="search-input">
                        <Form.Label>Search query</Form.Label>
                        <Form.Control
                            name="searchQuery"
                            placeholder="E.g. politics, sports, ..."
                        />
                    </Form.Group>
                    <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
                        Search
                    </Button>
                </Form>
                <div className="d-flex flex-column align-items-center">
                    {searchResultsLoading && <Spinner animation="border" />}
                    {searchResultsLoadingIsError && <p>Something went wrong. Please try again.</p>}
                    {searchResults?.length === 0 && <p>Nothing found. Try a different query!</p>}
                    {searchResults && <NewsArticlesGrid articles={searchResults} />}
                </div>
            </main>
            <Image
                    src={Saa}
                    width={450}
                    height={170}
                    alt="News article Logo"
                    
                />
        
        </>
    );
}

export default SearchNewsPage;