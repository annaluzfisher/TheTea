class ApplicationController < ActionController::API

  include ActionController::RequestForegeryProtection

  protect_from_forery with :exception
  before_action :snake_case_params, :attatch_authenticity_token

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def login(user)
     session[:session_token] = user.reset_session_token!
     @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    # current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    if !logged_in
      render json: { errors: ['Must be logged in']}, status :unauthorized
    end
  end


  private

  def snake_case_params
    params.deep_transform_keys![&:underscore]
  end

  def attatch_authenticity_token
    headers['X-CSRF-Token'] = masked_authenticity_token(session) 
  #same as form_authenticity_token
  end
end
