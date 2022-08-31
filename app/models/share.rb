class Share < ApplicationRecord
  validates :content, length: { in: 10...1000 }, uniqueness: true
  validates :user_id,  presence: true
  belongs_to :user

end
