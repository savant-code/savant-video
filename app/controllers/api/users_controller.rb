class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.create(user_params)
    return head :ok
  end
  
  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end