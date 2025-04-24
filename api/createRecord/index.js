import { createRecord } from "../database.js";

export default async function (context, req) {
  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      body: 'Method Not Allowed',
    };
    return;
  }

  const { id, name, designation } = req.body;

  try {
    await createRecord(id, name, designation);
    context.res = {
      status: 201,
      body: { success: true },
    };
  } catch (err) {
    console.error('Azure Function error:', err);
    context.res = {
      status: 500,
      body: { error: 'Failed to create item' },
    };
  }
}