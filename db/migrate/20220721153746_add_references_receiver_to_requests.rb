class AddReferencesReceiverToRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :requests, :receiver_id, :integer, null: false
    add_foreign_key :requests, :users, column: :receiver_id
  end
end
