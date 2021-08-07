export const __prod__ = process.env.NODE_ENV === 'production';
export const PORT = +(process.env.PORT ?? 8080);
export const OMDB_API_KEY = process.env.OMDB_API_KEY as string;
