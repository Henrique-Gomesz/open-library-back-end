import mongoose, { ConnectOptions } from 'mongoose';

class Database {
  private static instance: Database;
  private uri: string;

  private constructor() {
    this.uri = 'mongodb+srv://admin:admin@openlibrary.wiyeyo3.mongodb.net/openlibrary?retryWrites=true&w=majority';
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
    
      await mongoose.connect(this.uri);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }

  public get connection(): mongoose.Connection {
    return mongoose.connection;
  }
}

export const MongoDatabase = Database.getInstance();
