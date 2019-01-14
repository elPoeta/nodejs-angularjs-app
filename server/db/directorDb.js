const pool = require('./connection');

class DirectorDb{

 static async findAllDirectors(){
        let client = await pool.connect(); 
     
        try{ 
            const director = await client.query('SELECT * FROM director', []);
           
            return director.rows;
        }catch(error){
            return new Error('error');
        }
        finally{
            
          await client.release();
        }
    }
   
    static async findDirectorById(id){
        let client = await pool.connect();
        try{

         const  director = await client.query('SELECT * FROM director WHERE id = $1', [id]);
        
         return director.rows[0];
        } 
        catch(error){
            return new Error('error');
        }
        finally{
           
          await client.release();
        }
    }
    
    static async insertDirector(newDirector){
        let client = await pool.connect();
        try{
        
            const director = await client.query('INSERT INTO director (name, photo, biography) VALUES($1,$2,$3) RETURNING *', [newDirector.name, newDirector.photo, newDirector.biography]);
         
            return director.rows[0];
        
        } 
        catch(error){
            return new Error('error');
        }
        finally{
          
          await client.release();
        }
         }
         static async updateDirector(updDirector){
            let client = await pool.connect();
            try{
            
                const director = await client.query('UPDATE director SET name=($1), photo=($2), biography=($3) WHERE id=($4) RETURNING *', [updDirector.name, updDirector.photo, updateDirector.biography, updDirector.id]);
             
                return director.rows[0];
            
            } 
            catch(error){
                return new Error('error');
            }
            finally{
              
              await client.release();
            }
             }     
}    

module.exports = DirectorDb;
