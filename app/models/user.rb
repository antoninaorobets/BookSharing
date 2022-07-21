class User < ApplicationRecord
    has_many :lists, dependent: :destroy
    has_many :shared_lists
    has_many :books, through: :lists
    has_many :received_requests, foreign_key: "receiver_id", class_name: "Request"
    has_many :sent_requests, foreign_key: "sender_id", class_name: "Request"
  
    has_secure_password

    validates :name, presence: :true
    validates :email, email: :true, presence: true, uniqueness: true
end
