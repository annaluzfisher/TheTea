class Api::SharesController < ApplicationController

  def show
    @share = Share.find(params[:id])
    if @share
      render json: @share
    else
      @share = 'oh no it wasnt found shit'
    end
  end

  def random
  end

  def create
    @share = Share.new(share_params)
    @share.save
  end

  # {"userId"=>0, "content"=>"hi", "share"=>{"content"=>"hi"}}
  def share_params
    params.require(:share).permit(:content,:user_id) #how to get it to be user_id??
  end

end
