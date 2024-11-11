import { query } from '../../../lib/sqlconnection';

export async function GET() {
  try {
    // Example SQL query to fetch users
    const result = await query('SELECT * FROM spt_monitor');
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.error('Failed to fetch data from MSSQL:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from MSSQL' }),
      {
        status: 500,
      }
    );
  }
}