class RequestSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_one :book
  has_one :sender
  has_one :receiver
end
