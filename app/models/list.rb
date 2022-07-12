class List < ApplicationRecord
  
  belongs_to :user
  has_many :shared_lists
  has_many :books, dependent: :destroy
end
