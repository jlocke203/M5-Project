class ShoppingCart < ApplicationRecord
    has_many :items 
    has_many :jewelries, through: :items 
    belongs_to :user 
end
