class UserController < ApplicationController
	def index
	end

	def authUser
		@user = User.find_by_email(params[:email])
		if @user.present?
			if @user.password == params[:password] 
				 @token = JsonWebToken.encode(user_id: @user.id) rescue nil
				render json: {
		          statusCode: 200,
		          status: true,
		          message: 'User logged in successfully',
		          user_email: @user.email,
		          token: @token
		        }
			else
				render json: {
		          statusCode: 404,
		          status: false,
		          message: 'Wrong Pasword',
		        }
			end

			
		else
			@User.create(email: params["email"], password: params[:password])
			if isUserCreated
				render json: {
		          statusCode: 200,
		          status: true,
		          message: 'account created',
		          user_email: params[:email],
		        }
			else
				render json: {
		          statusCode: 403,
		          status: false,
		          message: 'User created successfully',
		        }
			end
		end
	end
end
