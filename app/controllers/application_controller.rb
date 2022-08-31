class ApplicationController < ActionController::API

# include ActionController::RequestForegeryProtection , :attatch_authenticity_token

  # protect_from_forery with :exception
  before_action :snake_case_params

    def current_user
         @current_user = User.find_by(session_token: session[:session_token])
    end
  
    def login!(user)
      user.reset_session_token!
      # debugger
      session[:session_token] = user.session_token
      # debugger
      @current_user = user
    end

    def logout
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    if !logged_in
      render json: { errors: ['Must be logged in']}, status: unauthorized
    end
  end

# def test
#     if params.has_key?(:login)
#       login!(User.first)
#     elsif params.has_key?(:logout)
#       logout
#     end

#     if (!current_user)
#       render json: ['No current user',current_user]
#     else
#       render json: { user: current_user.slice('id', 'username', 'session_token') }
#     end
# end

private

def snake_case_params
  params.deep_transform_keys!(&:underscore)
end

end









  # def attatch_authenticity_token
  #   headers['X-CSRF-Token'] = masked_authenticity_token(session) 
  # #same as form_authenticity_token
  # end

