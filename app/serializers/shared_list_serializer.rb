class SharedListSerializer < ActiveModel::Serializer
  attributes :id
  # has_one :user
  has_one :list 
  has_many :books
end
