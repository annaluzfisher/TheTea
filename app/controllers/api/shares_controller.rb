class Api::SharesController < ApplicationController

    def show
    @share = Share.find(params[:id])
    if @share
      render json: @share
    else
      @share = 'oh no it wasnt found shit'
    end
  end

  def create
    @share = Share.new
  end

end
