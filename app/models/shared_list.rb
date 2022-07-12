class SharedList < ApplicationRecord
  belongs_to :user
  belongs_to :list
  has_many :books, through: :list
end
