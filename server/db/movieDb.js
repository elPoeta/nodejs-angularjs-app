const pool = require('./connection');

class MovieDb{

 static async findAllMovies(){
        let client = await pool.connect(); 
     
        try{ 
            const movie = await client.query('SELECT * FROM movies', []);
            console.log(movie.rows);
            return movie.rows;
        }catch(error){
            return new Error('error');
        }
        finally{
            
          await client.release();
        }
    }
   
    static async findMovieById(id){
        let client = await pool.connect();
        try{

         const  movie = await client.query('SELECT title FROM movies WHERE id = $1', [id]);
         console.log(movie.rows);
         return movie.rows[0];
        } 
        catch(error){
            return new Error('error');
        }
        finally{
           
          await client.release();
        }
    }
    
    static async insertMovie(newMovie){
        let client = await pool.connect();
        try{
        
            const movie = await client.query('INSERT INTO movies (title, year, poster, description, available, genre_id, director_id) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *', 
                        [newMovie.title, newMovie.year, newMovie.poster, newMovie.description, newMovie.available, newMovie.genreId, newMovie.directorId]);
         
            return movie.rows[0];
        
        } 
        catch(error){
            return new Error('error');
        }
        finally{
          
          await client.release();
        }
         }
         static async updateMovie(updMovie, id){
            let client = await pool.connect();
            try{
            
                const movie = await client.query('UPDATE movies SET title = ($1), year = ($2), poster = ($3), description = ($4), available = ($5), genre_id = ($6), director_id = ($7)  WHERE id = ($8) RETURNING *', [updMovie.title, updMovie.year, updMovie.poster, updMovie.description, updMovie.available, updMovie.genreId, updMovie.directorId, id]);
             
                return movie.rows[0];
            
            } 
            catch(error){
                return new Error('error');
            }
            finally{
              
              await client.release();
            }
             }     
}    

module.exports = MovieDb;