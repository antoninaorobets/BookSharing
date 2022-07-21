class Request < ApplicationRecord
  belongs_to :book
  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"
end
