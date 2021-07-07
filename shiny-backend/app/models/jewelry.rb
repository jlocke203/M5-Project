class Jewelry < ApplicationRecord
    has_many :items
    has_many :shopping_carts, through: :items
    has_many :users, through: :shopping_carts 
end
