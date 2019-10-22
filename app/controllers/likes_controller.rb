class LikesController < ApplicationController
	def create
		@post = Post.find(params[:post_id]) rescue nil
		if @post.present?
			@like = @post.likes.create(user_id: current_user.id)
			if @like.present?
				render json: {
	          status: 200,
	          message: 'post liked',
	          like: @like
	        }
	      else
	      	render json: {
		          status: 400,
		          message: 'error while commenting'
		        }
	      end
		else
			render json: {
          status: 400,
          message: 'Post not present'
        }
		end
	end


	def destroy
		post = Post.find(params[:id]) rescue false
		if post.present?
			like = post.likes.find_by_user_id(current_user.id) rescue false
			if like.present? 
				like.delete
				render json: {
		          status: 200,
		          message: 'like deleted',
		          like: like
		        }	
			else
				render json: {
		          status: 404,
		          message: 'like not present',
		        }
			end
			
		else
			render json: {
          status: 404,
          message: 'Comment not present'
        }
		end
	end
end
