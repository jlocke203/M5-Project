class CreateJewelrys < ActiveRecord::Migration[6.0]
  def change
    create_table :jewelries do |t|
      t.string :name
      t.string :description
      t.string :price
      t.string :image 

      t.timestamps
    end
  end
end
