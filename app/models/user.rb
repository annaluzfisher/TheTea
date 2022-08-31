class User < ApplicationRecord
   
  before_validation :ensure_session_token

    has_many :shares
    
  has_secure_password
  validates :username, 
  length: { in: 3..30 },
  format: { without: URI::MailTo::EMAIL_REGEXP , message: 'must not be an email' },
  uniqueness: true

  validates :email, 
  length: { in: 3...225 },
  format: { with: URI::MailTo::EMAIL_REGEXP , message: 'must be a valid email' },
  uniqueness: true

  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..225 , allow_nil: true }

     def self.find_by_credentials(username, password)
      user =  User.find_by(username: username)
      user && user.authenticate(password) ?  user : nil
     end

     def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      # session[:session_token] = nil // only controllers and views have access tio session
      ## models are deep in the back end 
      self.session_token
     end


  private

  def generate_unique_session_token
    token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: token)
          token = SecureRandom.urlsafe_base64
    end
    token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  


  
end
