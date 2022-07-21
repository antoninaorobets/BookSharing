class CreateRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :requests do |t|
      t.references :book, null: false, foreign_key: true
      t.string :text

      t.timestamps
    end
  end
end
