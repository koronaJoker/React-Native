import { SQLiteDatabase } from "expo-sqlite"

export async function initDatabase(db: SQLiteDatabase) {
    await db.execAsync(
        `
        PRAGMA journal_mode = WAL; 

        CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            postId INTEGER,
            username TEXT NOT NULL,
            fullName TEXT NOT NULL,
            likes INTEGER NOT NULL,
            body TEXT NOT NULL
        );
        `
    )
}

// WAL = Write Ahead Logging