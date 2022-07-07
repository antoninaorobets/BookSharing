class User < ApplicationRecord
    has_secure_password

    validates :name, presence: :true
    validates :email, email: :true, presence: true
end
