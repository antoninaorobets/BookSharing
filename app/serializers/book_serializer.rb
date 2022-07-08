class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :status
  has_one :list
end
