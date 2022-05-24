import idb from 'idb';

const DATABASE_NAME = 'SERVICE_ORDERS';
const DATABASE_VERSION = 2;
const TABLE_NAME = "My_table";


const dbPromise = idb.openDB(DATABASE_NAME, DATABASE_VERSION, {
	upgrade(db) {
		
		if(db.objectStoreNames.contains(TABLE_NAME))
			return;

		db.createObjectStore(TABLE_NAME, { autoIncrement: true, keyPath: 'id'});
	}
});


export async function getDataFromTable(key: number) {
	return (await dbPromise).get<any>(TABLE_NAME, key);
}

export async function addDatatoTable(data: any) {
	await (await dbPromise).add(TABLE_NAME, data);
}