const pool = require('./connection');

class GenreDb{

 static async findAllGenres(){
        let client = await pool.connect(); 
     
        try{ 
            const genre = await client.query('SELECT * FROM genre', []);
            console.log(genre.rows);
            return genre.rows;
        }catch(error){
            return new Error('error');
        }
        finally{
            
          await client.release();
        }
    }
   
    static async findGenreById(id){
        let client = await pool.connect();
        try{

         const  genre = await client.query('SELECT * FROM genre WHERE id = $1', [id]);
         return genre.rows[0];
        } 
        catch(error){
            return new Error('error');
        }
        finally{
           
          await client.release();
        }
    }
    
    static async insertGenre(newGenre){
        let client = await pool.connect();
        try{
        
            const genre = await client.query('INSERT INTO genre (name, available) VALUES($1,$2) RETURNING *', [newGenre.id, newGenre.name, newGenre.available]);
         
            return genre.rows[0];
        
        } 
        catch(error){
            return new Error('error');
        }
        finally{
          
          await client.release();
        }
         }
}    

module.exports = GenreDb;
