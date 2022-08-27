class User < ApplicationRecord
  validates :username, length: { minimum: 6 }
  
  has_many :shares
end
