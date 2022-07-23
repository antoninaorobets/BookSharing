class RequestSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at
  has_one :book
  has_one :sender
  has_one :receiver
end
