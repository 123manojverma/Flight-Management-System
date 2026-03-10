const {Logger}=require('../config');

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        console.log("inside repository")
        try{
            const response=await this.model.create(data);
            return response;
        }catch(err){
            Logger.error('Something went wrong in the Crud Repo : create');
            throw err;
        }
    }

    async destroy(data){
        try{
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        }catch(err){
            Logger.error('Something went wrong in the Crud Repo : destroy');
            throw err;
        }
    }

    async get(data){
        try{
            const response=await this.model.findByPk(data);
            return response;
        }catch(err){
            Logger.error('Something went wrong in the Crud Repo : get');
            throw err;
        }
    }

    async getAll(){
        try{
            const response=await this.model.findAll();
            return response;
        }catch(err){
            Logger.error('Something went wrong in the Crud Repo : getAll');
            throw err;
        }
    }

    async update(id,data){ // data -> {col: value, ....}
        try{
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response;
        }catch(err){
            Logger.error('Something went wrong in the Crud Repo : update');
            throw err;
        }
    }
}

module.exports=CrudRepository;