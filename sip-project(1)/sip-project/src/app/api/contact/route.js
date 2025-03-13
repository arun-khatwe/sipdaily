export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON body

    // Extracting fields from request
    const { name, email, message } = body;

    // Simple validation (optional)
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("Received form data:", body); 

    return new Response(
      JSON.stringify({ success: true, message: "Message received!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
