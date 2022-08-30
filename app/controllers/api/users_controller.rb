class Api::UsersController < ApplicationController
   wrap_parameters include: User.attribute_names + ['password']

  def create
    
  end

  private
  def user_parans
    params.require(:user).permit(:username,:password)
  end
end

end
