export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key no configurada', reply: 'Error: falta la API key en las variables de entorno.' });
  }

  const { messages, system } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'model: 'claude-sonnet-4-5',
        max_tokens: 1024,
        system: system,
        messages: messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic error:', JSON.stringify(data));
      return res.status(500).json({ 
        error: 'Anthropic API error', 
        detail: data,
        reply: `Error de API: ${data?.error?.message || 'desconocido'}` 
      });
    }

    const reply = data.content?.[0]?.text || 'Sin respuesta';
    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Server error:', error.message);
    return res.status(500).json({ error: error.message, reply: `Error del servidor: ${error.message}` });
  }
}
