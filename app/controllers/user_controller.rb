class UserController < ApplicationController
	def index
	end

	def authUser
		user = User.find_by_email(params[:email])
		if user.present?
			if user.password == params[:password] 
				render json: {
		          statusCode: 200,
		          status: true,
		          message: 'User logged in successfully',
		          user_email: user.email,
		          token: JsonWebToken.encode(user_id: user.id)
		        }
			else
				render json: {
		          statusCode: 404,
		          status: false,
		          message: 'Wrong Pasword',
		        }
			end

			
		else
			isUserCreated = User.create(email: params["email"], password: params[:password])
			if isUserCreated
				render json: {
		          statusCode: 200,
		          status: true,
		          message: 'User created successfully',
		          user_email: params[:email],
		          token: JsonWebToken.encode(user_id: isUserCreated.id)
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
