const Query ={
    dogs(parent,args,ctx,info){
       return [{name:'Snicker'},{name:'Sunny'}];
    }

}

module.exports = Query;