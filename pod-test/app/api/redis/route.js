// app/api/redis/route.js
import redis from '../../../lib/redis';

export async function GET() {
  try {
    // Attempt to get a value from Redis
    const value = await redis.get('my-key');

    if (value) {
      return new Response(JSON.stringify({ success: true, value }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'No value found' }), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { key, value } = await req.json();

    // Set a value in Redis
    await redis.set(key, value);

    return new Response(JSON.stringify({ success: true, message: `Set ${key} to ${value}` }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
