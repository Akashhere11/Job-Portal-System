class FrontController{

    static home =async(req,res)=>{
        try {
            res.render('home')
        } catch (error) {
            console.log(error)
        }
    }

    
    static about =async(req,res)=>{
        try {
            res.render('about')
        } catch (error) {
            console.log(error)
        }
    }

    
    static course =async(req,res)=>{
        try {
            res.send('course page')
        } catch (error) {
            console.log(error)
        }
    }


    
    static contact =async(req,res)=>{
        try {
            res.render('contact')
        } catch (error) {
            console.log(error)
        }
    }

    
    static login =async(req,res)=>{
        try {
            res.send('login page')
        } catch (error) {
            console.log(error)
        }
    }

    
    static register =async(req,res)=>{
        try {
            res.send('register page')
        } catch (error) {
            console.log(error)
        }
    }

    static joblist =async(req,res)=>{
        try {
            res.render('joblist')
        } catch (error) {
            console.log(error)
        }
    }






}
module.exports =FrontController
