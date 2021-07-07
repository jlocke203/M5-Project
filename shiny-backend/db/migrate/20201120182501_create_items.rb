class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.integer :shopping_cart_id
      t.integer :jewelry_id

      t.timestamps
    end
  end
end
