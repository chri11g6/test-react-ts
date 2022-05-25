import { DBSchema, openDB } from 'idb';

const DATABASE_NAME = 'SERVICE_ORDERS';
const DATABASE_VERSION = 2;

export interface IblogData {
	id?: number;
	name: string;
	text: string;
}

interface IMyDB extends DBSchema {
	blogData: {
		key: number;
		value: IblogData
	};
}

const dbPromise = openDB<IMyDB>(DATABASE_NAME, DATABASE_VERSION, {
	upgrade(db) {
		
		if(db.objectStoreNames.contains('blogData'))
			return;

		db.createObjectStore('blogData', { autoIncrement: true, keyPath: 'id'});
	}
});


export async function getDataFromTable(key: number) {
	return (await dbPromise).get('blogData', key);
}

export async function getAllDataFromTable() {
	return await (await dbPromise).getAll('blogData');
}

export async function addDatatoTable(data: IblogData) {
	await (await dbPromise).add('blogData', data);
}

export async function delDatatoTable(key: number) {
	return (await dbPromise).delete('blogData', key);
};
