class Api::SessionsController < ApplicationController

  def show
    
  end

  def create
    #expect params to have username and password 
    username = params[:username]
    password = params[:password]
    #{user : {username: '', password : '' }}
    # {username: '', password: ''}
    @user = User.find_by_credentials(username, password)
    if @user
      login!(@user)
      render 'api/users/show'
    else
      # render json: { errors: ['Invalid credentials'] }, status: 422
      render json: { user: nil }
    end
  end

  def destory
    logout if logged_in?
    render head :no_content
    ## response will have no body. need to render something
  end

end
