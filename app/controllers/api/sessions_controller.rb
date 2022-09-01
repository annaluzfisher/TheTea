class Api::SessionsController < ApplicationController

  def show
    # debugger
    @user = User.find_by(session_token: session[:session_token])
  if   @user
   render :show
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:username],params[:password])

    if @user
      login!(@user)
      render :show
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
