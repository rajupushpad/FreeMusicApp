class ApplicationController < ActionController::Base
	protect_from_forgery with: :null_session
	before_action :authenticate_request
	skip_before_action :authenticate_request, :only => [:authUser, :fetch_posts]
	attr_reader :current_user

  private

  def authenticate_request
  	 result = JsonWebToken.decode(request.headers['Authorization'])
  	 if result.present?
  	 	user_id = result[0]['user_id']
  	 	current_user = User.find(user_id)
  	 	if current_user.present?

  	 	else
  	 		render json: {
          status: 400,
          message: 'User not present'
          }
  	 	end
  	 else
  	 	render json: {
          status: 400,
          message: 'InValid Auth Token'
          }
  	 end
  end
end
