class User < ApplicationRecord
    has_many :shopping_carts
    has_many :custom_pieces 
    has_many :jewelries, through: :shopping_carts 
end
