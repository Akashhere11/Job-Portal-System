class JobController{
    static display =async(req,res)=>{
        try {
            res.render('admin/job/display')
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = JobController