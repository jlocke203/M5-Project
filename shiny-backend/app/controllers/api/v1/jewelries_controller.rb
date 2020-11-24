class Api::V1::JewelriesController < ApplicationController

    def index 
        jewelries = Jewelry.all 
        render json: jewelries
    end 
end
