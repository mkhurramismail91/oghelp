import axios from 'axios'

export const getFunctions = async () => {
    var functions = await axios.get(process.env.REACT_APP_API_URL+"/functions/categories-functions")
    .then(res => {
        if(res.data && res.data.status === "success"){
            const res_cat = res.data.categories
            var categories = []
            res_cat.forEach(function(c){
                c.tbl_functions.forEach(function(f){
                    var c_function = {function_id : f.function_id, function_title : f.function_title, value : f.function_id, label : f.function_title, category : c.title}
                    categories.push(c_function)
                })

            })
            return {categories, res_cat}
        }
        else
            return {categories:[], res_cat:[]}
    })
    .catch(err => {
        console.log(err)
        return null;
    })

    return functions;
};

export const getAllCategories = async () => {
    var functions = await axios.get(process.env.REACT_APP_API_URL+"/functions/categories-functions")
    .then(res => {
        if(res.data && res.data.status === "success"){
            return res.data.categories
        }
        else
            return []
    })
    .catch(err => {
        console.log(err)
        return null;
    })

    return functions;
};

export const sendFunction = async (params) => {
    var res = await axios.post(process.env.REACT_APP_API_URL+"/functions/suggest-function", params)
        .then(res => {
            if(res.status === 200){
                return res.data.status;
            }
        })
        .catch(err => {
            console.log(err)
            return null;
        })

    return res;
};



