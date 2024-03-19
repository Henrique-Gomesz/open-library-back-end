import { MongoClient, Db } from 'mongodb';

class Database {
  private static instance: Database;
  private client: MongoClient;

  private constructor() {
    this.client = new MongoClient('mongodb+srv://admin:admin@openlibrary.wiyeyo3.mongodb.net/openlibrary?retryWrites=true&w=majority&appName=openlibrary');
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }

  public get db(): Db {
    return this.client.db('your_database_name'); // Replace 'your_database_name' with your actual database name
  }
}

export const MongoDatabase =  Database.getInstance()