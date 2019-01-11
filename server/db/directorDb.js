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
        
            const director = await client.query('INSERT INTO director (name, photo) VALUES($1,$2) RETURNING *', [newDirector.name, newDirector.photo]);
         
            return director.rows[0];
        
        } 
        catch(error){
            return new Error('error');
        }
        finally{
          
          await client.release();
        }
         }
         static async updateDirector(updDirector, id){
            let client = await pool.connect();
            try{
            
                const director = await client.query('UPDATE director SET name=($1), photo=($2) WHERE id=($3) RETURNING *', [updDirector.name, updDirector.photo, id]);
             
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
