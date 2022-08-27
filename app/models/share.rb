class Share < ApplicationRecord
  validates :content, length: { in: 10...1000 }
  validates :user_id,  presence: true
  belongs_to :user

end
