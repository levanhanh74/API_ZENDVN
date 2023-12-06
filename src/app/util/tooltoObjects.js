module.exports = {
    multipleToObject : (ObjectMultiple)=>{
        return ObjectMultiple.map(obj=> obj.toObject());
    },
    singleToObject : (singleObject) =>{
        return singleObject.toObject();
    }
}