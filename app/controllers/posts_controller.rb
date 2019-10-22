class PostsController < ApplicationController
	def create 
		post = current_user.posts.create(title: params[:title], url: params[:url], description: params[:description])
		if post.present?
			render json: {
	          statusCode: 200,
	          status: true,
	          message: 'post created successfully',
	        }
		else
			render json: {
	          statusCode: 400,
	          status: false,
	          message: 'Error in uploading post',
	        }
		end
	end
end
