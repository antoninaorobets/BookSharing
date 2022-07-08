class Book < ApplicationRecord
  belongs_to :list

  validates :title, presence: :true
  validates :title, presence: :true
end
