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
    @share = Share.new[share_params]
    console.log('in the shares controller, share_params', share_params)
  end

  def share_params
    params.require[:share].permit[:id,:content]
  end

end
