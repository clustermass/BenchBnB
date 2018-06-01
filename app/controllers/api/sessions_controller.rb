class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :create
    else
      # flash.now[:errors] = ["Invalid username or password"]
      render json: 'Invalid username or password', status: 422
    end
  end

  def destroy
    if !current_user
    render json: '404 No active session', status: 404
    else
    logout
    render json: {}
    end
  end

end
