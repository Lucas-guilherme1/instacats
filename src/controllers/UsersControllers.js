const Users = require('../model/Users');

module.exports = {
  async singUp(request, response) {
    return response.render('landing_page/singUp');
  },

  // async home(request, response) {
  //   return response.render('landing_page/home');
  // },
  
  async registerUser(request, response) {
    const { user_name, email, password, repeat_password } = request.body;

    const userRegister = await Users.create({
      user_name,
      email,
      password,
      repeat_password
    });

    try{
      if(userRegister) {
        return response.redirect('/singUp');
      }
    }catch(error) {
      console.error(error)
    }
  }
}