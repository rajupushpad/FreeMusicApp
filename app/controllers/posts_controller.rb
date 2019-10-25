class PostsController < ApplicationController
	def create 
		@current_user = find_user(request.headers['Authorization'])
		post = @current_user.posts.create(title: params[:title], url: params[:url], description: params[:description])
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

	def fetch_posts
		@current_user = find_user(request.headers['Authorization'])
		@postsData = []
			
		posts = Post.all
		posts.each do |post| 
			tempPost = {}
			likes = post.likes.count
			dislike = post.dislikes.count
			tempPost['id'] = post.id
			tempPost['title'] = post.title
			tempPost['url'] = post.url
			tempPost['description'] = post.description
			tempPost['post_by'] = User.find_by_id(post.user_id).email rescue nil
			tempPost['date'] = post.created_at
			tempPost['likes'] = likes
			tempPost['dislikes'] = dislike
			# if post.likes.any? {|h| h[:user_id] == @current_user.id.to_s} rescue false
			if @current_user
				tempPost['post_liked_by_current_user'] =  post.likes.any? {|h| h[:user_id] == @current_user.id} rescue false
			end 
			if @current_user
				tempPost['post_disliked_by_current_user'] =  post.dislikes.any? {|h| h[:user_id] == @current_user.id} rescue false
			end
			@postsData.push(tempPost)
		end
			render json: {
	          status: 200,
	          message: 'All posts',
	          posts: @postsData, 
	        }
	end

end
