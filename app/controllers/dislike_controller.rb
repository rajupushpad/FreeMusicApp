class DislikeController < ApplicationController
  def find_user(token)
		if token.present?
			result = JsonWebToken.decode(token)
		  	 if result.present?
		  	 	user_id = result[0]['user_id']
		  	 	@current_user = User.find(user_id)
		  	 	return @current_user
		  	end 	
	  	else
	  		return nil
	  	end
	end

	def delete_dislikes(id)
		post = Post.find(id) rescue false
		if post.present?
			like = post.dislikes.find_by_user_id(@current_user.id) rescue false
			if like.present? 
				like.delete
				render json: {
		          status: 200,
		          message: 'dislike deleted',
		          like: like
		        }	
			else
				render json: {
		          status: 404,
		          message: 'dislike not present',
		        }
			end
			
		else
			render json: {
          status: 404,
          message: 'Comment not present'
        }
		end
	end

	def index

	end
		
	def create
		@current_user = find_user(request.headers['Authorization'])
		@post = Post.find(params[:id]) rescue nil
		if @post.present?
			has_already_disliked = @post.dislikes.any? {|h| h[:user_id] == @current_user.id} rescue false
			if !has_already_disliked
				@like = @post.dislikes.create(user_id: @current_user.id)
				if @like.present?
					render json: {
		          status: 200,
		          message: 'post dis liked',
		          like: @like
		        }
		      else
		      	render json: {
			          status: 400,
			          message: 'error while commenting'
			        }
		      end
		    else
		     	delete_dislikes(params[:id])
		     end
		else
			render json: {
          status: 400,
          message: 'Post not present'
        }
		end
	end
end
