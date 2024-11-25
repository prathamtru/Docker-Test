import { algoliasearch, searchClient } from "algoliasearch";
import { type NextRequest } from 'next/server'
export async function GET(req:NextRequest) {
    const  searchParams  = req.nextUrl.searchParams
    const page:any = searchParams.get('page')
    const hitsPerPage:any = searchParams.get('hitsPerPage')
    
    const appID:any = process.env.ALGOLIA_APPID
    const apiKey:any = process.env.ALGOLIA_API_KEY
    const indexName:any = process.env.ALGOLIA_PRODUCT_INDEX
    const client = algoliasearch(appID, apiKey);
    
    try {
        const { results } = await client.search({
            requests: [
                {
                    indexName,
                    hitsPerPage:hitsPerPage ?? 3,
                    page:page ?? 0,
                    
                }
                
            ],
        });
        return new Response(JSON.stringify({ success: true, data: results[0] }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err }), { status: 500 });
    }
}


// app/api/users/route.js
export async function POST(req:NextRequest) {
    try {
      // Parse the incoming request body
      const { name } = await req.json();
  
      if (!name) {
        return new Response(
          JSON.stringify({ success: false, error: 'Name is required' }),
          { status: 400 }
        );
      }
  
      // Simulate processing or saving the user (this could be a DB call)
      console.log(`Received name: ${name}`);
  
      // Simulate result after processing (replace with actual logic like DB insert)
      const results = { name };
  
      // Return the success response
      return new Response(
        JSON.stringify({ success: true, data: results }),
        { status: 200 }
      );
    } catch (err) {
      console.error('Error processing POST request:', err);
      return new Response(
        JSON.stringify({ success: false, error: 'Something went wrong!' }),
        { status: 500 }
      );
    }
  }
  

