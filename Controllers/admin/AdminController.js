class AdminController {

static dashboard =async(req, res)=>{
    try {
        res.render('admin/dashboard')  //Views main admin naam ka folder banega jisme dashboard.ejs naam ki file banegi
    } catch (error) {
        console.log(error)       
    }
}




}

module.exports =AdminController