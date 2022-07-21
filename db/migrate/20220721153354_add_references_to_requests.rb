class AddReferencesToRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :sender_id, :integer, null: false
    add_foreign_key :requests, :users, column: :sender_id
  end
end
