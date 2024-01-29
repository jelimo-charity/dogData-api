import { getDogs } from "../controllers/dogControllers.js"
 const dogRoutes = (app)=>{
    app.route('/dogs')
    .get(getDogs)
}

export default dogRoutes