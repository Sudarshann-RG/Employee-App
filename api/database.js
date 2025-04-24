import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);

const database = client.database('Employee Details');
const container = database.container('employee');

export async function createRecord(id, name, designation)
{
    const item = {
        'id': id,
        'name': name,
        'designation': designation
    };
    
    let response = await container.items.upsert(item);
    console.log("From index.js: ", response);
}

