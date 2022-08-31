class Api::SessionsController < ApplicationController

  def show
    @user = User.find_by(session_token: session[:session_token])
  if   @user
    render json: { user:  @user } 
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential],params[:password])

    if @user
      login!(@user)
      render json: { user:  @user }
    else
      render json: { errors: ['The provided credentials were invalid.']}, status: 422
    end
  end

  def destroy
      @user = User.find_by(session_token: session[:session_token])
  if   @user
      logout
      render json: { message: 'success' }
    else
       render json: { message: 'fail' }
    end
  end

end
